<template>
	<ul class="sport__championship-list">
		<ChampionshipCard
			v-for="(item, index) in footballTournaments"
			:key="index"
			:index="index"
			:item="item"
			:league="league"
		/>
	</ul>
</template>

<script>
import ChampionshipCard from "@/components/sport/ChampionshipCard.vue";
import { mapGetters } from "vuex";
import MatchesApi from "/src/api/src/api/MatchesApi.js";
import lottie from "lottie-web";

export default {
	name: "Football",
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
	},
	computed: {
		...mapGetters([
			'GET_FOOTBALL_TOURNAMENTS',
		]),
		matchesApi() {
			return new MatchesApi()
		},
		footballTournaments() {
			if (this.GET_FOOTBALL_TOURNAMENTS.items) {
				if (this.league === 'FANTASY') {
					return this.GET_FOOTBALL_TOURNAMENTS.items.filter((item) => item?.fantasy === true)
				} else {
					return []
					// return this.championships
					// return this.GET_FOOTBALL_TOURNAMENTS.items.filter((item) => item?.fantasy === false)
				}
			} else {
				return []
			}
		}
	},
	mounted() {

	}
}
</script>

<style scoped>

</style>