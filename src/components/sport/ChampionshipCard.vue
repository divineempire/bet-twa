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
				<li class="event-list__item"
					v-for="(event, index) in item?.events"
					:key="index"
				>
					<div class="event-list__teams">
						<div class="event-list__team first-team">
							<img :src="event?.firstTeam?.logo" alt="" class="event-list__logo">
							<p class="event-list__team-name">{{ event?.firstTeam?.name }}</p>
						</div>
						<div class="event-list__date">
							<p class="event-list__date-text">{{ event?.date }}</p>
							<p class="event-list__date-time">{{ event?.dateTime }}</p>
						</div>
						<div class="event-list__team second-team">
							<img :src="event?.secondTeam?.logo" alt="" class="event-list__logo">
							<p class="event-list__team-name">{{ event?.secondTeam?.name }}</p>
						</div>
					</div>
					<div class="event-list__bet-names">
						<p class="event-list__bet-text">П1</p>
						<p class="event-list__bet-text">Х</p>
						<p class="event-list__bet-text">П2</p>
					</div>
					<div class="event-list__bets choose-bet">
						<div class="choose-bet__card first-bet"
							 :class="{reverse_flex: league === 'FANTASY', active_bet: activeBet === 'FIRST_WIN_' + index}"
							 @click="chooseBet('FIRST_WIN', index)"
						>
							<p class="choose-bet__sum">{{ getSum(event.p1) }}</p>
							<div class="choose-bet__odds">
								<p class="choose-bet__coefficient">{{ getCoefficient(event.p1) }}</p>
							</div>
						</div>
						<div class="choose-bet__card second-bet"
							 :class="{reverse_flex: league === 'FANTASY', active_bet: activeBet === 'DRAW_' + index}"
							 @click="chooseBet('DRAW', index)"
						>
							<p class="choose-bet__sum">{{ getSum(event.draw) }}</p>
							<div class="choose-bet__odds">
								<p class="choose-bet__coefficient">{{ getCoefficient(event.draw) }}</p>
							</div>
						</div>
						<div class="choose-bet__card third-bet"
							 :class="{reverse_flex: league === 'FANTASY', active_bet: activeBet === 'SECOND_WIN_' + index}"
							 @click="chooseBet('SECOND_WIN', index)"
						>
							<p class="choose-bet__sum">{{ getSum(event.p2) }}</p>
							<div class="choose-bet__odds">
								<p class="choose-bet__coefficient">{{ getCoefficient(event.p2) }}</p>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
		<Coupon
			:showPopup="showPopup"
			v-show="showPopup"
			@closePopup="closePopup"
		/>
	</li>
</template>

<script>

import Coupon from "@/components/sport/Coupon.vue";

export default {
	name: "ChampionshipCard",
	components: {
		Coupon
	},
	data() {
		return {
			showMore: true,
			activeBet: '',
			showPopup: false
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
			this.showPopup = false
			this.activeBet = ''
			this.webApp.BackButton.offClick(this.closePopup)
			this.webApp.BackButton.hide()
		},
		chooseBet(value, index) {
			this.activeBet = value + '_' + index
			this.showPopup = true
			if (!this.webApp.BackButton.isVisible) {
				this.webApp.BackButton.show()
				this.webApp.BackButton.onClick(this.closePopup)
			}
		}
	},
	mounted() {

	}
}
</script>

<style scoped>

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

.event-list__item {
	margin-top: 6px;
	padding: 6px;
	border-radius: 8px;
	background: #28272B;
}

.event-list__teams {
	margin-bottom: 8px;
	display: flex;
	gap: 0 10px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}

.event-list__team {
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 33.3%;
}

.event-list__date {
	display: flex;
	flex-direction: column;
	align-items: center;
	flex: 33.3%;
}

.event-list__logo {
	margin-bottom: 8px;
	width: 26px;
	height: 26px;
}

.event-list__team-name {
	max-width: 70%;
	text-align: center;
	font-size: 10px;
}

.event-list__date-text {
	margin-bottom: 8px;
	font-size: 12px;
	font-family: Roboto-Medium, sans-serif;
	font-weight: 500;
}

.event-list__date-time {
	margin-bottom: 8px;
	font-size: 12px;
	font-family: Roboto-Medium, sans-serif;
	font-weight: 500;
	color: #00F59B;
}

.event-list__bet-names {
	margin-bottom: 8px;
	display: flex;
	gap: 0 10px;
	justify-content: space-between;
	align-items: center;
}

.event-list__bet-text {
	font-size: 10px;
	flex: 33.3%;
	text-align: center;
}

.choose-bet {
	margin-bottom: 6px;
	display: flex;
	justify-content: space-between;
	gap: 0 8px;
}

.choose-bet__card {
	padding: 6px;
	flex: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 10px;
	background: #3F3C42;
}

.reverse_flex {
	flex-direction: column-reverse;
}

.active_bet {
	background-color: #00F59B;
}

.active_bet p {
	color: #000;
}

.choose-bet__sum {
	margin-bottom: 4px;
	font-size: 14px;
	font-family: Roboto-Bold, sans-serif;
	font-weight: 700;
}

.choose-bet__coefficient {
	font-size: 11px;
	font-family: Roboto-Medium, sans-serif;
	font-weight: 500;
}

.reverse_flex .choose-bet__sum {
	margin: 0;
	font-size: 11px;
	font-family: Roboto-Medium, sans-serif;
	font-weight: 500;
}

.reverse_flex .choose-bet__coefficient {
	margin-bottom: 4px;
	font-size: 14px;
	font-family: Roboto-Bold, sans-serif;
	font-weight: 700;
}

</style>