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
				<p class="stats__value" v-show="!showSkeleton">{{ totalWinBets || 0 }} TON</p>
				<div class="skeleton anim-content" v-show="showSkeleton"></div>
			</div>
			<div class="stats__row total-win">
				<p class="stats__text">Всего выиграно фентези</p>
				<p class="stats__value" v-show="!showSkeleton">{{ totalWinFantasyBets || 0 }} Ф</p>
				<div class="skeleton anim-content" v-show="showSkeleton"></div>
			</div>
<!--			<div class="stats__row fee-lose"-->
<!--				v-if="getRouteName === 'Profile'"-->
<!--			>-->
<!--				<p class="stats__text">Потеряно на комиссии</p>-->
<!--				<p class="stats__value">0 TON</p>-->
<!--			</div>-->
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
			showSkeleton: true,
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
	},
	mounted() {
		setTimeout(() => {
			this.showSkeleton = false
		}, 700)
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

.skeleton {
	width: 40px;
	max-width: 40px;
	height: 15px;
	border-radius: 5px;
}

.anim-content::after {
	content: '';
	display: block;
	width: 100%;
	height: 100%;
	background-image: linear-gradient(to top right, #58585a 0%, rgba(67, 67, 66, 0.1) 15%, #58585a 30%, rgba(67, 67, 66, 0.1) 45%, #58585a 60%, rgba(67, 67, 66, 0.1) 75%, #58585a 100%);
	background-repeat: no-repeat;
	background-size: 800px 398px;
	animation: Shimmer 8s linear infinite;
	border-radius: 5px;
}

@keyframes Shimmer {
	0% {
		background-position: -650px -150px;
	}
	25% {
		background-position: 0 0;
	}
	50% {
		background-position: -650px -150px;
	}
	75% {
		background-position: 0 0;
	}
	100%{
		background-position: -650px -150px;
	}
}
</style>