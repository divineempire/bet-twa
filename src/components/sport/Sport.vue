<template>
	<div class="sport">
		<div class="sport__choose-league">
			<button class="sport__choose-btn regular-btn"
					:class="{active_btn: league === 'REGULAR'}"
					@click="chooseLeague('REGULAR')"
			>
				Обычная
			</button>
			<button class="sport__choose-btn fantasy-btn"
					:class="{active_btn: league === 'FANTASY'}"
					@click="chooseLeague('FANTASY')"
			>
				Фэнтези
			</button>
		</div>
		<div class="sport__content"
			 :class="{soon: league === 'REGULAR'}"
		>
			<button type="button" class="sport__search-btn"
					@click="openSearch"
			>
				Введите название события или турнира
			</button>
			<SportNavigation />
			<router-view
				:league="league"
			/>
			<transition name="fade">
				<div class="coming-soon"
					 v-show="league === 'REGULAR'"
				>
					<div class="coming-soon__lottie" id="coming-soon"></div>
				</div>
			</transition>
		</div>
		<SearchPopup
			v-if="showSearch"
			:sportId="getSportId"
			:league="league"
		/>
	</div>
</template>

<script>
import SportNavigation from "@/components/sport/SportNavigation.vue";
import ChampionshipCard from "@/components/sport/ChampionshipCard.vue";
import SearchPopup from "@/components/sport/SearchPopup.vue";
import lottie from "lottie-web";
import TournamentsApi from "/src/api/src/api/TournamentsApi.js";
import {mapActions} from "vuex";
import {FOOTBALL, HOCKEY} from "@/helpers/sport-type/sport-type";
export default {
	name: 'Sport',
	data() {
		return {
			league: 'FANTASY',
			showSearch: '',
		}
	},
	components: {
		SearchPopup,
		ChampionshipCard,
		SportNavigation,
	},
	computed: {
		webApp() {
			return window.Telegram.WebApp
		},
		tournamentsApi() {
			return new TournamentsApi()
		},
		getOptions() {
			return {
				page: 1,
				size: 20,
				top: true,
				sport_id: 18
			}
		},
		getSportId() {
			let path = this.$route.path
			if (path === '/sport/football') {
				return FOOTBALL
			} else if (path === '/sport/hockey') {
				return HOCKEY
			}
			// else if (path === '/sport/basketball') {
			// 	return
			// } else if (path === '/sport/volleyball') {
			// 	return
			// } else if (path === '/sport/tennis') {
			// 	return
			// }
		}
	},
	methods: {
		...mapActions([
			'SAVE_HOCKEY_TOURNAMENTS',
			'SAVE_FOOTBALL_TOURNAMENTS'
		]),
		chooseLeague(value) {
			this.league = value
		},
		closeSearch() {
			this.showSearch = false
			this.webApp.BackButton.offClick(this.closeSearch)
			this.webApp.BackButton.hide()
		},
		openSearch() {
			this.showSearch = true
			if (!this.webApp.BackButton.isVisible) {
				this.webApp.BackButton.show()
				this.webApp.BackButton.onClick(this.closeSearch)
			}
		},
		getSportTournaments(sportId) {
			let opts = {}
			opts.sport_id = sportId

			this.tournamentsApi.getTournaments(opts)
				.then((res) => {
					if (sportId === FOOTBALL) {
						this.SAVE_FOOTBALL_TOURNAMENTS(res)
					} else if (sportId === HOCKEY) {
						this.SAVE_HOCKEY_TOURNAMENTS(res)
					}
				})
				.catch((err) => {
					console.error(err)
				})

		},
	},
	created() {
		// Получить турниры баскетбол, хоккей и т.д.
		this.getSportTournaments(FOOTBALL)
		this.getSportTournaments(HOCKEY)
		// await this.getSportTournaments(18)
		// await this.getSportTournaments(18)
		// await this.getSportTournaments(18)
	},
	mounted() {
		lottie.loadAnimation({
			container: document.getElementById('coming-soon'), // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			name: 'soon',
			path: 'https://raw.githubusercontent.com/divineempire/twa-image/master/lottie/coming-soon.json'
		});
	},
	watch: {
		showSearch: {
			handler: function() {
				if  (this.showSearch) {
					document.documentElement.style.overflow = 'hidden'
					return
				}
				document.documentElement.style.overflow = 'auto'
			},
			deep: true
		},
		league: {
			handler: function() {
				if  (this.league === 'REGULAR') {
					// console.log()
					document.documentElement.style.overflow = 'hidden'
					return
				}
				document.documentElement.style.overflow = 'auto'
			},
			deep: true
		}
	}
}
</script>

<style scoped>

.fade-enter-active {
	transition: .5s linear;
}

.fade-leave-active {
	transition: 0s linear;
}

.fade-enter-from, .fade-leave-to {
	opacity: 0;
}

.sport__choose-league {
	padding: 14px 0;
}

.sport__choose-btn {
	transition: .2s;
	border: none;
	outline: none;
	background: transparent;
	font-size: 18px;
	font-weight: 500;
	line-height: 21px;
	opacity: 0.5;
}

.active_btn {
	opacity: 1;
}

.regular-btn {
	margin-right: 16px;
}

.sport__search-btn {
	display: flex;
	align-items: center;
	width: 100%;
	height: 44px;
	margin-bottom: 6px;
	padding: 10px 14px;
	border-radius: 12px;
	border: none;
	outline: none;
	background: #3F3C42;
	font-size: 13px;
	color: rgba(255,255,255, .8);
}

.sport__search-btn::before {
	content: '';
	display: block;
	margin-right: 10px;
	width: 22px;
	height: 22px;
	background: url('@/assets/sport/search-icon.svg') no-repeat;
}

.sport__championship-list {
	//margin-bottom: ;
	display: flex;
	flex-direction: column;
	gap: 6px 0;
}

.soon {
	position: relative;
	padding-bottom: calc(100vh - (390px));
}

.coming-soon {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: -5px;
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

</style>