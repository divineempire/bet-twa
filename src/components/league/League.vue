<template>
	<div class="league"
		:class="{soon: league === 'REGULAR'}"
	>
		<transition name="fade">
			<div class="coming-soon"
				 v-show="league === 'REGULAR'"
			>
				<div class="coming-soon__lottie" id="coming-soon"></div>
			</div>
		</transition>
		<div class="league__button-block">
			<button class="league__choose-btn"
					:class="{active_btn: league === 'REGULAR'}"
					@click="league = 'REGULAR'"
			>
				Обычная лига
			</button>
			<button class="league__choose-btn"
					:class="{active_btn: league === 'FANTASY'}"
					@click="league = 'FANTASY'"
			>
				Фэнтези лига
			</button>
		</div>
		<div class="league__info">
			<div class="league__banner"
				 :class="{fantasy_banner: league === 'FANTASY'}"
			></div>
			<h2 class="league__heading">{{ getHeading }}</h2>
			<h4 class="league__title">{{ getTitle }}</h4>
			<p class="league__text">Дата проведения акции: с 25.12.2023 по 31.02.2024 </p>
<!--			<a href="" class="league__link">Подробнее об условиях акции</a>-->
		</div>
		<div class="league__leaderboard"
			 v-if="league === 'REGULAR'"
		>
			<h3 class="league__caption">Таблица лидеров</h3>
			<div class="your-placement"
				 :class="{member: regularPlacement !== null}"
			>
				<p class="your-placement__text">{{ getYourPlacement }}</p>
				<div class="your-placement__arrow-icon"
					 v-if="regularPlacement !== null"
				></div>
			</div>
			<ul class="leaderboard__list">
				<li class="leaderboard__item"
					v-for="(item, index) in sortRegularLeaders"
					:key="index"
				>
					<div class="leaderboard__placement">
						<p class="leaderboard__place">{{ index + 1 + '-й' }}</p>
						<p class="leaderboard__account">{{ item.account }}</p>
					</div>
					<div class="leaderboard__amount">
						<p class="leaderboard__win-amount">{{ item.winAmount + ' Побед' }}</p>
						<div class="leaderboard__arrow-icon"
							 :class="item.rising"
						></div>
					</div>
				</li>
			</ul>
<!--			<button class="show-more-btn">Показать ещё</button>-->
		</div>
		<div class="league__leaderboard leaderboard"
			 v-if="league === 'FANTASY'"
		>
			<h3 class="league__caption">Таблица лидеров</h3>
			<div class="your-placement"
				 :class="{member: userInFantasy !== null}"
			>
				<p class="your-placement__text">{{ getYourPlacement }}</p>
				<div class="your-placement__arrow-icon"
					 v-if="userInFantasy !== null"
				></div>
			</div>
			<ul class="leaderboard__list">
				<li class="leaderboard__item"
					v-for="(item, index) in sortFantasyLeaders"
					:key="index"
				>
					<div class="leaderboard__placement">
						<p class="leaderboard__place">{{ item?.place + '-й' }}</p>
						<p class="leaderboard__account">{{ item?.user?.telegram_user_id }}</p>
					</div>
					<div class="leaderboard__amount">
						<p class="leaderboard__win-amount">{{ item.score + ' Побед' }}</p>
						<div class="leaderboard__arrow-icon"
							 :class="item.place >= item.previous_place ? 'up' : 'down'"
						></div>
					</div>
				</li>
			</ul>
			<p class="empty-text" v-if="sortFantasyLeaders.length === 0">Пока в лиге нет участников</p>
			<button class="show-more-btn"
				v-if="sortFantasyLeaders.length > 0 && fantasyTotal > opts.size"
				@click="showMoreFantasy"
			>
				Показать ещё
			</button>
		</div>
	</div>
</template>

<script>
import RatingApi from "/src/api/src/api/RatingApi.js";
import { mapGetters } from "vuex";
import lottie from "lottie-web";

export default {
	name: "League",
	data() {
		return {
			league: 'FANTASY',
			regularPlacement: null,
			// fantasyPlacement: null,
			// userInFantasy: null,
			regularLeaders: [
				// {
				// 	account: 'UQCav_Y8Mdb9sQUaNVAS-2C6xpnIY3-uEPx4uKY4DBRO17GM',
				// 	winAmount: 101,
				// 	rising: 'up'
				// },
				// {
				// 	account: 'UQCav_Y8Mdb9sQUaNVAS-2C6xpnIY3-uEPx4uKY4DBRO17GM',
				// 	winAmount: 10,
				// 	rising: 'down'
				// },
				// {
				// 	account: 'UQCav_Y8Mdb9sQUaNVAS-2C6xpnIY3-uEPx4uKY4DBRO17GM',
				// 	winAmount: 24,
				// 	rising: 'up'
				// },
				// {
				// 	account: 'UQCav_Y8Mdb9sQUaNVAS-2C6xpnIY3-uEPx4uKY4DBRO17GM',
				// 	winAmount: 15,
				// 	rising: 'down'
				// },
				// {
				// 	account: 'UQCav_Y8Mdb9sQUaNVAS-2C6xpnIY3-uEPx4uKY4DBRO17GM',
				// 	winAmount: 33,
				// 	rising: 'up'
				// },
				// {
				// 	account: 'UQCav_Y8Mdb9sQUaNVAS-2C6xpnIY3-uEPx4uKY4DBRO17GM',
				// 	winAmount: 80,
				// 	rising: 'up'
				// },
			],
			fantasyLeaders: [],
			fantasyTotal: null,
			opts: {
				page: 1,
				size: 20
			}
		}
	},
	computed: {
		...mapGetters([
			'GET_LEAGUES',
			'GET_USER_INFO'
		]),
		ratingApi() {
			return new RatingApi()
		},
		getFantasyLeague() {
			console.log(this.GET_LEAGUES)
			if (this.GET_LEAGUES.length > 0) {
				return this.GET_LEAGUES[0]
			} else {
				return []
			}
		},
		getHeading() {
			if (this.league === 'REGULAR') {
				return 'Winter Betting League'
			} else if (this.league === 'FANTASY') {
				return `Winter Fantasy\nBetting League`
			}
		},
		getTitle() {
			return 'Присоединяйтесь к зимнему сезону лиги ставок,\nс призовым фондом 100 000 TON.'
		},
		getYourPlacement() {
			if (this.league === 'REGULAR') {
				if (this.regularPlacement !== null) {
					return `Вы занимаете ${this.regularPlacement} место`
				} else {
					return 'Вы ещё не участвовали в обычной лиге'
				}
			} else if (this.league === 'FANTASY') {
				if (this.userInFantasy !== null) {
					return `Вы занимаете ${this.userInFantasy} место`
				} else {
					return 'Вы ещё не участвовали в фентези лиге'
				}
			}
		},
		sortRegularLeaders() {
			return this.regularLeaders.sort((a, b) => b.winAmount - a.winAmount )
		},
		sortFantasyLeaders() {
			return this.fantasyLeaders.sort((a, b) => a.place - b.place )
		},
		userInFantasy() {
			if (this.GET_USER_INFO.rated_league_entries) {
				let meFantasy = this.GET_USER_INFO?.rated_league_entries.find((item) => item?.rated_league?.fantasy === true)
				if (meFantasy) {
					return meFantasy?.place
				} else {
					return null
				}
			} else {
				return null
			}
		},
	},
	methods: {
		getFantasyRating() {
			if (this.getFantasyLeague.id) {
				this.ratingApi.getLeagueEntries(this.getFantasyLeague?.id, this.opts)
					.then((res) => {
						this.fantasyLeaders = res.items
						console.log(this.fantasyLeaders)
						this.fantasyTotal = res.total
					})
					.catch((err) => {
						console.log(err)
					})
			}
		},
		showMoreFantasy() {
			let staticValue = 20
			if (this.fantasyTotal > this.opts.size) {
				this.opts.size = this.opts.size + staticValue
			}
		}
	},
	mounted() {
		this.getFantasyRating()
		lottie.loadAnimation({
			container: document.getElementById('coming-soon'), // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			name: 'soon',
			path: 'https://raw.githubusercontent.com/divineempire/twa-image/master/lottie/coming-soon.json'
		});
	},
	unmounted() {
		document.documentElement.style.overflow = 'auto'
	},
	watch: {
		league: {
			handler: function() {
				if  (this.league === 'REGULAR') {
					document.documentElement.style.overflow = 'hidden'
					return
				}
				document.documentElement.style.overflow = 'auto'
			}
		}
	},
}
</script>

<style scoped>
.league {
	padding: 14px 0;
}

.soon {
	position: relative;
	padding-bottom: calc(100vh - (530px));
}

.coming-soon {
	position: absolute;
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 55px;
	left: -10px;
	right: -10px;
	bottom: -5px;
	background: rgba(21, 19, 23, 0.80);
	backdrop-filter: blur(5px);
}

.coming-soon__lottie {
	width: 274px;
	height: 180px;
}

.league__button-block {
	margin-bottom: 12px;
	display: flex;
	align-items: center;
	padding: 3px;
	border-radius: 9px;
	background: #28272B;
}

.league__choose-btn {
	transition: .2s;
	flex: 50%;
	padding: 6px 6px 7px 6px;
	border-radius: 7px;
	border: none;
	outline: none;
	background-color: transparent;
	font-size: 13px;
	line-height: 15px;
}

.active_btn {
	background: rgba(255, 255, 255, 0.35);
	box-shadow: 0px 3px 1px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12);
}

.league__banner {
	margin-bottom: 12px;
	width: 100%;
	height: 160px;
	border-radius: 12px;
	background: #1C2197;
}

.fantasy_banner {
	background: #521C97;
}

.league__info {
	margin-bottom: 14px;
}

.league__heading {
	margin-bottom: 12px;
	font-size: 36px;
	line-height: 42px;
	font-family: Roboto-Bold, sans-serif;
	white-space: pre-wrap;
}

.league__title {
	margin-bottom: 4px;
	font-family: Roboto-Regular, sans-serif;
	white-space: pre-wrap;
}

.league__text {
	margin-bottom: 4px;
	font-size: 13px;
	opacity: 0.8;
}

.league__link {
	font-size: 13px;
	text-decoration: underline;
	color: #00F59B;
}

.league__leaderboard {
	padding: 14px 0;
}

.league__caption {
	margin-bottom: 12px;
	font-size: 26px;
}

.your-placement {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 14px;
	padding: 12px 16px;
	border-radius: 8px;
	background: rgba(63, 60, 66, 0.50);
}

.member {
	top: 14px;
	position: sticky;
	background: #3F3C42;
}

.your-placement__text {
	font-size: 14px;
	line-height: 20px;
}

.your-placement__arrow-icon {
	width: 20px;
	height: 20px;
	background: url('~@/assets/menu/arrow.svg') no-repeat;
}

.leaderboard__list {
	margin-bottom: 14px;
	display: flex;
	flex-direction: column;
	gap: 4px 0;
}

.leaderboard__item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px;
	border-radius: 8px;
	background: #28272B;
	white-space: nowrap;
}

.leaderboard__item:first-child {
	background: linear-gradient(269deg, rgba(245, 213, 81, 0.05) 0%, rgba(245, 213, 81, 0.70) 100%);
}

.leaderboard__item:nth-child(2) {
	background: linear-gradient(269deg, rgba(211, 211, 211, 0.05) 0%, rgba(211, 211, 211, 0.70) 100%);
}

.leaderboard__item:nth-child(3) {
	background: linear-gradient(269deg, rgba(185, 154, 89, 0.05) 0%, rgba(185, 154, 89, 0.70) 100%);
}

.leaderboard__placement,
.leaderboard__amount {
	display: flex;
	align-items: center;
}

.leaderboard__place {
	width: 40px;
	margin-right: 8px;
	font-size: 14px;
	line-height: 16px;
	font-family: Roboto-Medium, sans-serif;
}

.leaderboard__account {
	max-width: 40vw;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 14px;
	line-height: 16px;
}

.leaderboard__win-amount {
	margin-right: 8px;
	width: 100px;
	font-size: 14px;
	line-height: 16px;
	font-family: Roboto-Medium, sans-serif;
	text-align: end;
	color: #00F59B;
}

.leaderboard__arrow-icon {
	width: 20px;
	height: 20px;
}

.up {
	background: url('~@/assets/league/up.svg') no-repeat;
}

.down {
	background: url('~@/assets/league/down.svg') no-repeat;
}

.empty-text {
	text-align: center;
	font-size: 20px;
}

.show-more-btn {
	width: 100%;
	padding: 14px;
	outline: none;
	border: none;
	border-radius: 12px;
	background: #3F3C42;
	font-size: 14px;
	line-height: 16px;
	font-family: Roboto-Regular, sans-serif;
}

</style>