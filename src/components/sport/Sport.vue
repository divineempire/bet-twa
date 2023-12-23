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
			:sportId="sportId"
			:league="league"
		/>
	</div>
</template>

<script>
import SportNavigation from "@/components/sport/SportNavigation.vue";
import ChampionshipCard from "@/components/sport/ChampionshipCard.vue";
import SearchPopup from "@/components/sport/SearchPopup.vue";
import lottie from "lottie-web";
export default {
	name: 'Sport',
	data() {
		return {
			league: 'FANTASY',
			showSearch: '',
			sportId: 18,
			// championships: [
			// 	{
			// 		name: 'Аргентина. Кубок Профессиональной Лиги',
			// 		region: 'AR',
			// 		amount: 1,
			// 		events: [
			// 			{
			// 				firstTeam: {
			// 					name: 'Сан Лоренцо',
			// 					logo: 'https://raw.githubusercontent.com/divineempire/twa-image/master/team-logos/san-lorenzo-logo.png'
			// 				},
			// 				secondTeam: {
			// 					name: 'Сентраль Кордоба СдЕ',
			// 					logo: 'https://raw.githubusercontent.com/divineempire/twa-image/master/team-logos/sentral-cordoba-logo.png'
			// 				},
			// 				date: 'Завтра',
			// 				dateTime: '01:45',
			// 				started: true,
			// 				p1: {
			// 					sum: 2555,
			// 					coefficient: 1.81,
			// 					percent: 30,
			// 				},
			// 				draw: {
			// 					sum: 820,
			// 					coefficient: 5.1,
			// 					percent: 10,
			// 				},
			// 				p2: {
			// 					sum: 5080,
			// 					coefficient: 1.3,
			// 					percent: 60
			// 				}
			// 			},
			// 		]
			// 	},
			// 	{
			// 		name: 'Аргентина. Кубок Профессиональной Лиги',
			// 		region: 'AR',
			// 		amount: 2,
			// 		events: [
			// 			{
			// 				firstTeam: {
			// 					name: 'Сан Лоренцо',
			// 					logo: 'https://raw.githubusercontent.com/divineempire/twa-image/master/team-logos/san-lorenzo-logo.png'
			// 				},
			// 				secondTeam: {
			// 					name: 'Сентраль Кордоба СдЕ',
			// 					logo: 'https://raw.githubusercontent.com/divineempire/twa-image/master/team-logos/sentral-cordoba-logo.png'
			// 				},
			// 				date: 'Завтра',
			// 				dateTime: '02:25',
			// 				started: false,
			// 				p1: {
			// 					sum: 1500,
			// 					coefficient: 1.34,
			// 					percent: 43,
			// 				},
			// 				draw: {
			// 					sum: 500,
			// 					coefficient: 8.2,
			// 					percent: 7,
			// 				},
			// 				p2: {
			// 					sum: 2000,
			// 					coefficient: 1.28,
			// 					percent: 50
			// 				}
			// 			},
			// 			{
			// 				firstTeam: {
			// 					name: 'Сан Лоренцо',
			// 					logo: 'https://raw.githubusercontent.com/divineempire/twa-image/master/team-logos/san-lorenzo-logo.png'
			// 				},
			// 				secondTeam: {
			// 					name: 'Сентраль Кордоба СдЕ',
			// 					logo: 'https://raw.githubusercontent.com/divineempire/twa-image/master/team-logos/sentral-cordoba-logo.png'
			// 				},
			// 				date: 'Завтра',
			// 				dateTime: '04:45',
			// 				started: false,
			// 				p1: {
			// 					sum: 240,
			// 					coefficient: 3.6,
			// 					percent: 17,
			// 				},
			// 				draw: {
			// 					sum: 1000,
			// 					coefficient: 1.2,
			// 					percent: 70,
			// 				},
			// 				p2: {
			// 					sum: 190,
			// 					coefficient: 4.7,
			// 					percent: 13
			// 				}
			// 			}
			// 		]
			// 	},
			// 	{
			// 		name: 'Аргентина. Кубок Профессиональной Лиги',
			// 		region: 'AR',
			// 		amount: 1,
			// 		events: [
			// 			{
			// 				firstTeam: {
			// 					name: 'Сан Лоренцо',
			// 					logo: 'https://raw.githubusercontent.com/divineempire/twa-image/master/team-logos/san-lorenzo-logo.png'
			// 				},
			// 				secondTeam: {
			// 					name: 'Сентраль Кордоба СдЕ',
			// 					logo: 'https://raw.githubusercontent.com/divineempire/twa-image/master/team-logos/sentral-cordoba-logo.png'
			// 				},
			// 				date: 'Завтра',
			// 				dateTime: '10:30',
			// 				started: false,
			// 				p1: {
			// 					sum: 650,
			// 					coefficient: 1.22,
			// 					percent: 65,
			// 				},
			// 				draw: {
			// 					sum: 100,
			// 					coefficient: 10,
			// 					percent: 10,
			// 				},
			// 				p2: {
			// 					sum: 250,
			// 					coefficient: 4.8,
			// 					percent: 25
			// 				}
			// 			},
			// 		]
			// 	}
			// ]
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
		getOptions() {
			return {
				page: 1,
				size: 20,
				top: true,
				sport_id: 18
			}
		}
	},
	methods: {
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
		// async getSportTournaments(sportId) {
		// 	let opts = {
		// 		page: 1,
		// 		size: 20,
		// 		top: true,
		// 	}
		// 	opts.sport_id = sportId
		// 	try {
		// 		let result = await this.tournamentsApi.getTournaments(opts)
		// 		if (sportId === hockey_id) {
		//			SAVE_HOCKEY_TOURNAMENTS(result)
		// 		} else if(sportId === basketball_id) {
		//			SAVE_BASKETBALL_TOURNAMENTS(result)
		// 		} else if(sportId === tennis_id) {
		//			SAVE_TENNIS_TOURNAMENTS(result)
		// 		} else if(sportId === volleyball_id) {
		//			SAVE_VOLLEYBALL_TOURNAMENTS(result)
		// 		}
		// 	} catch(err) {
		// 		console.log(err)
		// 	}
		// },
	},
	async created() {
		// Получить турниры баскетбол, хоккей и т.д.
		// await this.getSportTournaments(18)
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