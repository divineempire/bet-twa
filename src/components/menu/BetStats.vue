<template>
	<div class="stats">
		<h3 class="stats__caption">Статистика ставок</h3>
		<div class="stats__info">
<!--			<div class="stats__row total-bet">-->
<!--				<p class="stats__text">Всего поставлено</p>-->
<!--				<p class="stats__value">{{ totalBets || 0 }} TON</p>-->
<!--			</div>-->
			<div class="stats__row total-win">
				<p class="stats__text">Всего выиграно</p>
				<p class="stats__value">{{ totalWinBets || 0 }} TON</p>
			</div>
			<div class="stats__row total-win">
				<p class="stats__text">Всего выиграно фентези</p>
				<p class="stats__value">{{ totalWinFantasyBets || 0 }} TON</p>
			</div>
			<div class="stats__row fee-lose"
				v-if="getRouteName === 'Profile'"
			>
				<p class="stats__text">Потеряно на комиссии</p>
				<p class="stats__value">0 TON</p>
			</div>
<!--			<div class="stats__row your-fee">-->
<!--				<p class="stats__text">{{ yourFeeText }}</p>-->
<!--				<p class="stats__value">10%</p>-->
<!--			</div>-->
<!--			<div class="stats__column you-fee">-->
<!--				<div class="stats__text-info">-->
<!--					<p class="stats__text">Ваша комиссия</p>-->
<!--					<p class="stats__value">10%</p>-->
<!--				</div>-->
<!--				<button class="reduce-btn">Уменьшить комиссию</button>-->
<!--			</div>-->
		</div>
	</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
	name: "BetStats",
	data() {
		return {

		}
	},
	computed: {
		...mapGetters([
			'GET_USER_INFO',
		]),
		getRouteName() {
			return this.$route.name
		},
		yourFeeText() {
			if (this.getRouteName === 'Profile') {
				return 'Ваша комиссия'
			} else {
				return 'Комиссия с выйгрыша'
			}
		},
		totalBets() {
			return this.GET_USER_INFO?.total_bets
		},
		totalWinBets() {
			return this.GET_USER_INFO?.total_earned_tons
		},
		totalWinFantasyBets() {
			return this.GET_USER_INFO?.total_earned_balance
		}
	}
}
</script>

<style scoped>

.stats {
	padding: 14px 0;
}

.stats__caption {
	font-size: 26px;
	margin-bottom: 12px;
}


.stats__info {
	border-radius: 8px;
	background: #28272B;
}

.stats__row {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
}

.stats__row:not(:last-child) {
	border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.stats__column {
	display: flex;
	flex-direction: column;
	padding: 10px;
}

.stats__text-info {
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.stats__text {
	font-size: 13px;
}

.stats__value {
	font-size: 13px;
	font-family: Roboto-Medium, sans-serif;
	font-weight: 500;
}

.reduce-btn {
	border: none;
	outline: none;
	padding: 14.5px;
	border-radius: 10px;
	background: #00F59B;
	font-size: 14px;
	line-height: 16px;
	color: #141414;
}
</style>