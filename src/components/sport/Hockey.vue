<template>
	<ul class="sport__championship-list">
		<ChampionshipCard
			v-for="(item, index) in hockeyTournaments"
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

export default {
	name: "Hockey",
	components: {
		ChampionshipCard
	},
	data() {
		return {

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
			'GET_HOCKEY_TOURNAMENTS',
		]),
		hockeyTournaments() {
			if (this.GET_HOCKEY_TOURNAMENTS.length > 0) {
				if (this.league === 'FANTASY') {
					return this.GET_HOCKEY_TOURNAMENTS.filter((item) => item?.fantasy === true)
				} else {
					return []
					// return this.GET_FOOTBALL_TOURNAMENTS.items.filter((item) => item?.fantasy === false)
				}
			} else {
				return []
			}
		}
	}
}
</script>

<style scoped>

</style>