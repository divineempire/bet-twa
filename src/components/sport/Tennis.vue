<template>
	<ul class="sport__championship-list">
		<ChampionshipCard
			v-for="(item, index) in championships"
			:key="index"
			:item="item"
			:league="league"
		/>
	</ul>
</template>

<script>
import ChampionshipCard from "@/components/sport/ChampionshipCard.vue";

export default {
	name: "Tennis",
	components: {
		ChampionshipCard
	},
	data() {
		return {
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
	props: {
		league: {
			type: String,
			default() {
				return ''
			}
		}
	}
}
</script>

<style scoped>

</style>