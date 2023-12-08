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
		<div class="sport__search">
			<input type="search" class="sport__search-input" placeholder="Введите название события или турнира">
		</div>
		<SportNavigation
			:activeSport="activeSport"
			@updateSport="updateSport"
		/>
		<ul class="sport__championship-list"
			v-if="activeSport === 'FOOTBALL'"
		>
			<ChampionshipCard
				v-for="(item, index) in championships"
				:key="index"
				:item="item"
				:league="league"
			/>
		</ul>
		<ul class="sport__championship-list"
			v-if="activeSport === 'HOCKEY'"
		>
			<ChampionshipCard
				v-for="(item, index) in championships"
				:key="index"
				:item="item"
				:league="league"
			/>
		</ul>
		<ul class="sport__championship-list"
			v-if="activeSport === 'BASKETBALL'"
		>
			<ChampionshipCard
				v-for="(item, index) in championships"
				:key="index"
				:item="item"
				:league="league"
			/>
		</ul>
		<ul class="sport__championship-list"
			v-if="activeSport === 'TENNIS'"
		>
			<ChampionshipCard
				v-for="(item, index) in championships"
				:key="index"
				:item="item"
				:league="league"
			/>
		</ul>
		<ul class="sport__championship-list"
			v-if="activeSport === 'VOLLEYBALL'"
		>
			<ChampionshipCard
				v-for="(item, index) in championships"
				:key="index"
				:item="item"
				:league="league"
			/>
		</ul>
	</div>
</template>

<script>
import SportNavigation from "@/components/SportNavigation.vue";
import ChampionshipCard from "@/components/ChampionshipCard.vue";
export default {
	name: 'Sport',
	data() {
		return {
			league: 'REGULAR',
			activeSport: 'FOOTBALL',
			championships: [
				{
					name: 'Аргентина. Кубок Профессиональной Лиги',
					region: 'AR',
					amount: 1,
					events: [
						{
							firstTeam: {
								name: 'Сан Лоренцо',
								logo: 'https://raw.githubusercontent.com/divineempire/twa-image/master/team-logos/san-lorenzo-logo.png'
							},
							secondTeam: {
								name: 'Сентраль Кордоба СдЕ',
								logo: 'https://raw.githubusercontent.com/divineempire/twa-image/master/team-logos/sentral-cordoba-logo.png'
							},
							date: 'Завтра',
							dateTime: '01:45',
							started: true,
							p1: {
								sum: 2555,
								coefficient: 1.81,
								percent: 30,
							},
							draw: {
								sum: 820,
								coefficient: 5.1,
								percent: 10,
							},
							p2: {
								sum: 5080,
								coefficient: 1.3,
								percent: 60
							}
						},
					]
				},
				{
					name: 'Аргентина. Кубок Профессиональной Лиги',
					region: 'AR',
					amount: 2,
					events: [
						{
							firstTeam: {
								name: 'Сан Лоренцо',
								logo: 'https://raw.githubusercontent.com/divineempire/twa-image/master/team-logos/san-lorenzo-logo.png'
							},
							secondTeam: {
								name: 'Сентраль Кордоба СдЕ',
								logo: 'https://raw.githubusercontent.com/divineempire/twa-image/master/team-logos/sentral-cordoba-logo.png'
							},
							date: 'Завтра',
							dateTime: '02:25',
							started: false,
							p1: {
								sum: 1500,
								coefficient: 1.34,
								percent: 43,
							},
							draw: {
								sum: 500,
								coefficient: 8.2,
								percent: 7,
							},
							p2: {
								sum: 2000,
								coefficient: 1.28,
								percent: 50
							}
						},
						{
							firstTeam: {
								name: 'Сан Лоренцо',
								logo: 'https://raw.githubusercontent.com/divineempire/twa-image/master/team-logos/san-lorenzo-logo.png'
							},
							secondTeam: {
								name: 'Сентраль Кордоба СдЕ',
								logo: 'https://raw.githubusercontent.com/divineempire/twa-image/master/team-logos/sentral-cordoba-logo.png'
							},
							date: 'Завтра',
							dateTime: '04:45',
							started: false,
							p1: {
								sum: 240,
								coefficient: 3.6,
								percent: 17,
							},
							draw: {
								sum: 1000,
								coefficient: 1.2,
								percent: 70,
							},
							p2: {
								sum: 190,
								coefficient: 4.7,
								percent: 13
							}
						}
					]
				},
				{
					name: 'Аргентина. Кубок Профессиональной Лиги',
					region: 'AR',
					amount: 1,
					events: [
						{
							firstTeam: {
								name: 'Сан Лоренцо',
								logo: 'https://raw.githubusercontent.com/divineempire/twa-image/master/team-logos/san-lorenzo-logo.png'
							},
							secondTeam: {
								name: 'Сентраль Кордоба СдЕ',
								logo: 'https://raw.githubusercontent.com/divineempire/twa-image/master/team-logos/sentral-cordoba-logo.png'
							},
							date: 'Завтра',
							dateTime: '10:30',
							started: false,
							p1: {
								sum: 650,
								coefficient: 1.22,
								percent: 65,
							},
							draw: {
								sum: 100,
								coefficient: 10,
								percent: 10,
							},
							p2: {
								sum: 250,
								coefficient: 4.8,
								percent: 25
							}
						},
					]
				}
			]
		}
	},
	components: {
		ChampionshipCard,
		SportNavigation,
	},
	methods: {
		chooseLeague(value) {
			this.league = value
		},
		updateSport(value) {
			this.activeSport = value
		}
	}
}
</script>

<style scoped>

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

.sport__search-input {
	width: 100%;
	height: 44px;
	margin-bottom: 6px;
	padding: 10px 14px;
	border-radius: 12px;
	border: none;
	outline: none;
	background: #3F3C42;
	font-size: 13px;
	color: #fff;
}

.sport__search-input::placeholder {
	color: #fff;
}

.sport__search-input::before {
	content: '';
	display: block;
	width: 22px;
	height: 22px;
	background: url('@/assets/sport/search-icon.svg') no-repeat;
}

input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
	display: none;
}

.sport__championship-list {
	margin-bottom: ;
	display: flex;
	flex-direction: column;
	gap: 6px 0;
}

</style>