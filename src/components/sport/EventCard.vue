<template>
	<li class="event-list__item">
		<div class="event-list__teams">
			<div class="event-list__team first-team">
<!--				<img :src="event.team1?.icon_url" alt="" class="event-list__logo">-->
				<div class="event-list__logo" :class="getSportCategory"></div>
				<p class="event-list__team-name">{{ event.team1?.name }}</p>
			</div>
			<div class="event-list__date"
				v-if="event.phase === 'prematch'"
			>
				<p class="event-list__date-text">{{ getDate }}</p>
				<p class="event-list__date-time">{{ getDatetime }}</p>
			</div>
			<div class="event-list__date"
				v-if="event.phase === 'live'"
			>
				<p class="event-list__date-text">{{ getMatchTime }}</p>
				<p class="event-list__score">{{ getScore }}</p>
			</div>
			<div class="event-list__team second-team">
<!--				<img :src="event.team2?.icon_url" alt="" class="event-list__logo">-->
				<div class="event-list__logo" :class="getSportCategory"></div>
				<p class="event-list__team-name">{{ event.team2?.name }}</p>
			</div>
		</div>
		<div class="event-list__bet-names">
			<p class="event-list__bet-text">П1</p>
			<p class="event-list__bet-text">Х</p>
			<p class="event-list__bet-text">П2</p>
		</div>
		<div class="event-list__bets choose-bet">
			<div class="choose-bet__card first-bet"
				 :class="{reverse_flex: league === 'FANTASY', active_bet: activeBet === 'FIRST_WIN', disabled: getCoefficient('TEAM1') === 0}"
				 @click="chooseBet('FIRST_WIN')"
			>
				<p class="choose-bet__sum">{{ getSum(event?.team1_summary) }}</p>
				<div class="choose-bet__odds">
					<p class="choose-bet__coefficient">{{ 'x' + getCoefficient("TEAM1") + ' - ' }}</p>
					<p class="choose-bet__percent">{{ getPercent("TEAM1") }}</p>
				</div>
			</div>
			<div class="choose-bet__card second-bet"
				 :class="{reverse_flex: league === 'FANTASY', active_bet: activeBet === 'DRAW', disabled: getCoefficient('DRAW') === 0}"
				 @click="chooseBet('DRAW')"
			>
				<p class="choose-bet__sum">{{ getSum(event?.draw_summary) }}</p>
				<div class="choose-bet__odds">
					<p class="choose-bet__coefficient">{{ 'x' + getCoefficient("DRAW") + ' - ' }}</p>
					<p class="choose-bet__percent">{{ getPercent("DRAW") }}</p>
				</div>
			</div>
			<div class="choose-bet__card third-bet"
				 :class="{reverse_flex: league === 'FANTASY', active_bet: activeBet === 'SECOND_WIN', disabled: getCoefficient('TEAM2') === 0}"
				 @click="chooseBet('SECOND_WIN')"
			>
				<p class="choose-bet__sum">{{ getSum(event?.team2_summary) }}</p>
				<div class="choose-bet__odds">
					<p class="choose-bet__coefficient">{{ 'x' + getCoefficient("TEAM2") + ' - ' }}</p>
					<p class="choose-bet__percent">{{ getPercent("TEAM2") }}</p>
				</div>
			</div>
		</div>
		<div class="event-list__progress-bar">
			<div class="progress-line first-line"
				 :style="{flexBasis: getPercent('TEAM1') > '0%' ? getPercent('TEAM1') : '2%'}"
			></div>
			<div class="progress-line second-line"
				 :style="{flexBasis: getPercent('DRAW') > '0%' ? getPercent('DRAW') : '2%'}"
			></div>
			<div class="progress-line third-line"
				 :style="{flexBasis: getPercent('TEAM2') > '0%' ? getPercent('TEAM2') : '2%'}"
			></div>
		</div>
		<transition name="fade">
			<Coupon
				@closePopup="closePopup"
				v-show="showPopup"
				:event="event"
				:activeBet="activeBet"
				:showPopup="showPopup"
				:league="league"
			/>
		</transition>
	</li>
</template>

<script>
import Coupon from "@/components/sport/Coupon.vue";
import TeamsApi from "/src/api/src/api/TeamsApi.js";
import { getFullDate, getDateTime } from "@/helpers/time/time.js";

export default {
	name: "EventCard",
	components: {Coupon},
	data() {
		return {
			showPopup: false,
			activeBet: '',
		}
	},
	props: {
		event: {
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
		call: {
			type: String,
			default() {
				return ''
			}
		},
		showMore: {
			type: Boolean,
			default() {
				return false
			}
		}
	},
	computed: {
		webApp() {
			return window.Telegram.WebApp
		},
		// teamsApi() {
		// 	return new TeamsApi()
		// },
		getScore() {
			return this.event.team1_score + ':' + this.event.team2_score
		},
		getMatchTime() {
			if (this.event.matchTime !== null) {
				return (this.event?.match_time / (1000 * 60)).toFixed(0) + `'`
			}
		},
		getDate() {
			return getFullDate(this.event.match_start_time)
		},
		getDatetime() {
			return getDateTime(this.event.match_start_time)
		},
		getSportCategory() {
			let path = this.$route.path
			return path.replaceAll('/sport/', '')
		}
	},
	methods: {
		getCoefficient(value) {
			if (value === 'TEAM1') {
				return this.event.team1_ratio
			} else if (value === 'DRAW') {
				return this.event.draw_ratio
			} else if (value === 'TEAM2') {
				return this.event.team2_ratio
			}
		},
		getPercent(value) {
			let total = this.event.team1_summary + this.event.draw_summary + this.event.team2_summary
			if (value === 'TEAM1') {
				if (this.event.team1_summary > 0 && total > 0) {
					return `${(this.event.team1_summary / total) * 100}` + '%'
				} else if (this.event.draw_summary > 0 || this.event.team2_summary) {
					return '0%'
				} else {
					return '33.3%'
				}
			} else if (value === 'DRAW') {
				if (this.event.draw_summary > 0 && total > 0) {
					return `${(this.event.draw_summary / total) * 100}` + '%'
				} else if (this.event.team1_summary > 0 || this.event.team2_summary) {
					return '0%'
				} else {
					return '33.3%'
				}
			} else if (value === 'TEAM2') {
				if (this.event.team2_summary > 0 && total > 0) {
					return `${(this.event.team2_summary / total) * 100}` + '%'
				} else if (this.event.team1_summary > 0 || this.event.draw_summary) {
					return '0%'
				} else {
					return '33.3%'
				}
			}
		},
		getSum(value) {
			if (this.league === 'REGULAR') {
				return `${value}` + ' TON'
			} else {
				return `${value}` + ' Ф'
			}
		},
		chooseBet(value) {
			// this.$emit('chooseBet', value, index)
			this.activeBet = value
			this.showPopup = true
			if (!this.webApp.BackButton.isVisible) {
				this.webApp.BackButton.show()
				this.webApp.BackButton.onClick(this.closePopup)
			}
		},
		closePopup() {
			console.log('event card coupon close')
			// this.$emit('closePopup')
			this.activeBet = ''
			this.showPopup = false
			this.webApp.BackButton.offClick(this.closePopup)
			this.webApp.BackButton.hide()
		},
	},
	watch: {
		showPopup: {
			handler: function() {
				// if (this.call !== 'SEARCH') {
				// 	if  (this.showPopup) {
				// 		document.documentElement.style.overflow = 'hidden'
				// 		return
				// 	}
				// 	document.documentElement.style.overflow = 'auto'
				// }
			},
			deep: true
		},
	}
}
</script>

<style scoped>
.event-list__item {
	margin-top: 4px;
	padding: 6px;
	border-radius: 8px;
	background: #28272B;
}

.event-list__teams {
	margin-bottom: 8px;
	display: flex;
	gap: 0 10px;
	flex-direction: row;
	align-items: start;
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
	margin-top: 12px;
}

.event-list__logo {
	margin-bottom: 8px;
	width: 26px;
	height: 26px;
	opacity: .3;
}

.football {
	background: url('~@/assets/sport/football.svg') no-repeat;
}

.hockey {
	background: url('~@/assets/sport/hockey.svg') no-repeat;
}

.basketball {
	background: url('~@/assets/sport/basketball.svg') no-repeat;
}

.tennis {
	background: url('~@/assets/sport/tennis.svg') no-repeat;
}

.volleyball {
	background: url('~@/assets/sport/volleyball.svg') no-repeat;
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

.event-list__score {
	margin-bottom: 8px;
	font-size: 12px;
	font-family: Roboto-Medium, sans-serif;
	font-weight: 500;
	color: #F5EB00;
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

.disabled {
	opacity: 0.7;
	pointer-events: none;
}

.active_bet p {
	color: #000;
}

.choose-bet__odds {
	display: flex;
	align-items: center;
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

.choose-bet__percent {
	margin-left: 4px;
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

.reverse_flex .choose-bet__percent {
	margin-bottom: 4px;
	font-size: 14px;
	font-family: Roboto-Bold, sans-serif;
	font-weight: 700;
}

.event-list__progress-bar {
	width: 100%;
	display: flex;
	align-items: center;
	gap: 0 3px;
}

.progress-line {
	height: 2px;
//flex: 33%; //flex-shrink: 0;
}

.first-line {
	background: #fff;
	border-radius: 3px 0 0 3px;
}

.second-line {
	background: #909090;
}

.third-line {
	background: #00F59B;
	border-radius: 0 3px 3px 0;
}
</style>