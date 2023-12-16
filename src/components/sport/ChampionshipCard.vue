<template>
	<li class="championship-card">
		<div class="championship-card__main"
			 @click="showMore = !showMore"
		>
			<div class="championship-card__info">
				<div :class="`${item?.region.toLowerCase()}` + '_flag'" class="championship-card__region-icon"></div>
				<p class="championship-card__name">{{ item?.name }}</p>
			</div>
			<div class="championship-card__amount">
				<p class="championship-card__text">{{ item?.amount }}</p>
				<div :class="{reverse: showMore === false}" class="championship-card__arrow-icon"></div>
			</div>
		</div>
		<div class="events"
			 v-show="showMore"
		>
			<ul class="events__list event-list">
				<EventCard
					v-for="(event, index) in item?.events"
					:key="index"
					:event="event"
					:league="league"
				/>
<!--				:index="index"-->
<!--				:activeBet="activeBet"-->
<!--				@chooseBet="chooseBet"-->
<!--				@closePopup="closePopup"-->
<!--				<li class="event-list__item"-->
<!--					v-for="(event, index) in item?.events"-->
<!--					:key="index"-->
<!--				>-->
<!--					<div class="event-list__teams">-->
<!--						<div class="event-list__team first-team">-->
<!--							<img :src="event?.firstTeam?.logo" alt="" class="event-list__logo">-->
<!--							<p class="event-list__team-name">{{ event?.firstTeam?.name }}</p>-->
<!--						</div>-->
<!--						<div class="event-list__date">-->
<!--							<p class="event-list__date-text">{{ event?.date }}</p>-->
<!--							<p class="event-list__date-time">{{ event?.dateTime }}</p>-->
<!--						</div>-->
<!--						<div class="event-list__team second-team">-->
<!--							<img :src="event?.secondTeam?.logo" alt="" class="event-list__logo">-->
<!--							<p class="event-list__team-name">{{ event?.secondTeam?.name }}</p>-->
<!--						</div>-->
<!--					</div>-->
<!--					<div class="event-list__bet-names">-->
<!--						<p class="event-list__bet-text">П1</p>-->
<!--						<p class="event-list__bet-text">Х</p>-->
<!--						<p class="event-list__bet-text">П2</p>-->
<!--					</div>-->
<!--					<div class="event-list__bets choose-bet">-->
<!--						<div class="choose-bet__card first-bet"-->
<!--							 :class="{reverse_flex: league === 'FANTASY', active_bet: activeBet === 'FIRST_WIN_' + index}"-->
<!--							 @click="chooseBet('FIRST_WIN', index)"-->
<!--						>-->
<!--							<p class="choose-bet__sum">{{ getSum(event.p1) }}</p>-->
<!--							<div class="choose-bet__odds">-->
<!--								<p class="choose-bet__coefficient">{{ getCoefficient(event.p1) }}</p>-->
<!--							</div>-->
<!--						</div>-->
<!--						<div class="choose-bet__card second-bet"-->
<!--							 :class="{reverse_flex: league === 'FANTASY', active_bet: activeBet === 'DRAW_' + index}"-->
<!--							 @click="chooseBet('DRAW', index)"-->
<!--						>-->
<!--							<p class="choose-bet__sum">{{ getSum(event.draw) }}</p>-->
<!--							<div class="choose-bet__odds">-->
<!--								<p class="choose-bet__coefficient">{{ getCoefficient(event.draw) }}</p>-->
<!--							</div>-->
<!--						</div>-->
<!--						<div class="choose-bet__card third-bet"-->
<!--							 :class="{reverse_flex: league === 'FANTASY', active_bet: activeBet === 'SECOND_WIN_' + index}"-->
<!--							 @click="chooseBet('SECOND_WIN', index)"-->
<!--						>-->
<!--							<p class="choose-bet__sum">{{ getSum(event.p2) }}</p>-->
<!--							<div class="choose-bet__odds">-->
<!--								<p class="choose-bet__coefficient">{{ getCoefficient(event.p2) }}</p>-->
<!--							</div>-->
<!--						</div>-->
<!--					</div>-->
<!--				</li>-->
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

export default {
	name: "ChampionshipCard",
	components: {
		EventCard,
		Coupon
	},
	data() {
		return {
			showMore: true,
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
		}
	},
	computed: {
		webApp() {
			return window.Telegram.WebApp
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
		closePopup() {
			// this.activeBet = ''
		},
		chooseBet(value, index) {
			// this.activeBet = value + '_' + index
		}
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