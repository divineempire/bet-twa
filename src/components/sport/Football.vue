<template>
	<ul class="sport__championship-list">
		<ChampionshipCard
			v-for="(item, index) in footballTournaments"
			:key="index"
			:index="index"
			:item="item"
			:league="league"
		/>
		<li class="sport__championship-item"
			v-if="footballTournaments.length === 0 && league === 'FANTASY'"
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
	name: "Football",
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
			'GET_FOOTBALL_TOURNAMENTS',
		]),
		footballTournaments() {
			if (this.GET_FOOTBALL_TOURNAMENTS.length > 0) {
				if (this.league === 'FANTASY') {
					return this.GET_FOOTBALL_TOURNAMENTS.filter((item) => item?.fantasy === true)
				} else {
					return []
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