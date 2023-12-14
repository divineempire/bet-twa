<template>
	<li class="event-list__item">
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
				 :class="{reverse_flex: league === 'FANTASY', active_bet: activeBet === 'FIRST_WIN'}"
				 @click="chooseBet('FIRST_WIN')"
			>
				<p class="choose-bet__sum">{{ getSum(event.p1) }}</p>
				<div class="choose-bet__odds">
					<p class="choose-bet__coefficient">{{ getCoefficient(event.p1) }}</p>
				</div>
			</div>
			<div class="choose-bet__card second-bet"
				 :class="{reverse_flex: league === 'FANTASY', active_bet: activeBet === 'DRAW'}"
				 @click="chooseBet('DRAW')"
			>
				<p class="choose-bet__sum">{{ getSum(event.draw) }}</p>
				<div class="choose-bet__odds">
					<p class="choose-bet__coefficient">{{ getCoefficient(event.draw) }}</p>
				</div>
			</div>
			<div class="choose-bet__card third-bet"
				 :class="{reverse_flex: league === 'FANTASY', active_bet: activeBet === 'SECOND_WIN'}"
				 @click="chooseBet('SECOND_WIN')"
			>
				<p class="choose-bet__sum">{{ getSum(event.p2) }}</p>
				<div class="choose-bet__odds">
					<p class="choose-bet__coefficient">{{ getCoefficient(event.p2) }}</p>
				</div>
			</div>
		</div>
	</li>
</template>

<script>
export default {
	name: "EventCard",
	data() {
		return {
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
		}
	},
	methods: {
		getCoefficient(value) {
			return 'x' + `${value.coefficient}` + ' - ' + `${value.percent}` + '%'
		},
		getSum(value) {
			if (this.league === 'REGULAR') {
				return `${value.sum}` + ' TON'
			} else {
				return `${value.sum}` + ' Ф'
			}
		},
		chooseBet(value) {
			this.activeBet = value
		}
	}
}
</script>

<style scoped>
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