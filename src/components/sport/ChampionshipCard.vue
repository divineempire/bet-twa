<template>
	<li class="championship-card"
		v-show="filteredEvents.length > 0"
	>
		<div class="championship-card__main"
			 @click="showMore = !showMore"
		>
			<div class="championship-card__info">
<!--				<div :class="`${item?.region.toLowerCase()}` + '_flag'" class="championship-card__region-icon"></div>-->
				<p class="championship-card__name">{{ item?.name }}</p>
			</div>
			<div class="championship-card__amount">
				<p class="championship-card__text">{{ filteredEvents.length }}</p>
				<div :class="{reverse: showMore === false}" class="championship-card__arrow-icon"></div>
			</div>
		</div>
		<div class="events"
			 v-show="showMore"
		>
			<ul class="events__list event-list"
				v-if="league === 'REGULAR'"
			>
				<EventCard
					v-for="(event, index) in filteredEvents"
					:key="index"
					:event="event"
					:league="league"
					:showMore="showMore"
				/>
			</ul>
			<ul class="events__list event-list"
				v-if="league === 'FANTASY'"
			>
				<EventCard
					v-for="(event, index) in filteredEvents"
					:key="index"
					:event="event"
					:league="league"
					:showMore="showMore"
				/>
			</ul>
		</div>
<!--		<transition name="fade">-->
<!--			<Coupon-->
<!--				:showPopup="showPopup"-->
<!--				v-show="showPopup"-->
<!--				@closePopup="closePopup"-->
<!--			/>-->
<!--		</transition>-->
	</li>
</template>

<script>

import Coupon from "@/components/sport/Coupon.vue";
import EventCard from "@/components/sport/EventCard.vue";
import MatchesApi from "/src/api/src/api/MatchesApi.js";

export default {
	name: "ChampionshipCard",
	components: {
		EventCard,
		Coupon
	},
	data() {
		return {
			showMore: false,
			events: []
			// activeBet: '',
			// showPopup: false,
		}
	},
	props: {
		item: {
			type: Object,
			default() {
				return {}
			}
		},
		league: {
			type: String,
			default() {
				return ''
			}
		},
		index: {
			type: Number,
			default() {
				return null
			}
		}
	},
	computed: {
		webApp() {
			return window.Telegram.WebApp
		},
		matchesApi() {
			return new MatchesApi()
		},
		sortEventsByTime() {
			return this.events.sort((a, b) => a.match_start_time - b.match_start_time)
		},
		filteredEvents() {
			if (this.league === 'REGULAR') {
				return this.sortEventsByTime.filter((item) => item?.fantasy === false && item?.finished === false)
			} else if (this.league === 'FANTASY') {
				return this.sortEventsByTime.filter((item) => item?.fantasy === true && item?.finished === false)
			}
		}
	},
	methods: {
		getCoefficient(value) {
			return 'x' + `${ value.coefficient }` + ' - ' + `${ value.percent }` + '%'
		},
		getSum(value) {
			if (this.league === 'REGULAR') {
				return `${ value.sum }` + ' TON'
			} else {
				return `${ value.sum }` + ' Ф'
			}
		},
		async getMatches() {
			let opts = {
				page: 1,
				size: 5
			}
			try {
				let result = await this.matchesApi.getMatchesByTournament(this.item.id, opts)
				this.events = result.items
			} catch(err) {
				console.log(err)
			}
		}
		// closePopup() {
		// 	this.activeBet = ''
		// },
		// chooseBet(value, index) {
		// 	this.activeBet = value + '_' + index
		// }
	},
	watch: {
		showPopup: {
			handler: function() {
				if  (this.showPopup) {
					document.documentElement.style.overflow = 'hidden'
					return
				}
				document.documentElement.style.overflow = 'auto'
			},
			deep: true
		},
	},
	mounted() {
		this.getMatches()
		setTimeout(() => {
			if (this.index === 0) {
				this.showMore = true
			}
		}, 1000)
	}
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
	transition: .25s linear;
}
.fade-enter-from, .fade-leave-to {
	opacity: 0;
}


.championship-card {
	cursor: pointer;
}

.championship-card__main {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 10px;
	border-radius: 8px;
	background: linear-gradient(89deg, #3C3943 0%, #2D2B32 100%);
}

.championship-card__info {
	display: flex;
	align-items: center;
}

.championship-card__region-icon {
	margin-right: 4px;
	width: 18px;
	height: 18px;
}

.ar_flag {
	background: url('@/assets/sport/ar-flag.png') no-repeat;
}

.championship-card__name {
	font-size: 13px;
}

.championship-card__amount {
	display: flex;
	align-items: center;
	padding: 0 0 0 8px;
	border-radius: 8px;
	background: rgba(0, 0, 0, 0.40);
}

.championship-card__text {
	font-size: 12px;
}

.championship-card__arrow-icon {
	transition: .2s;
	width: 24px;
	height: 24px;
	background: url('~@/assets/sport/arrow.svg') no-repeat;
}

.reverse {
	transform: rotateX(180deg);
}
</style>