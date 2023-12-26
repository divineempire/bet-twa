<template>
	<ul class="sport__championship-list">
		<ChampionshipCard
			v-for="(item, index) in hockeyTournaments"
			:key="index"
			:index="index"
			:item="item"
			:league="league"
		/>
		<li class="sport__championship-item"
			v-if="hockeyTournaments.length === 0 && league === 'FANTASY'"
		>
			<SkeletonTournaments
				v-for="(item, index) in 10"
				:key="index"
			/>
		</li>
	</ul>
</template>

<script>
import ChampionshipCard from "@/components/sport/ChampionshipCard.vue";
import { mapGetters } from "vuex";
import SkeletonTournaments from "@/components/sport/SkeletonTournaments.vue";

export default {
	name: "Hockey",
	components: {
		SkeletonTournaments,
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