<template>
	<li class="card">
		<div class="card__title"
			 @click="showMore = !showMore"
		>
			<div class="card__info">
				<p class="card__status" :class="status.toLowerCase() + '_status'">{{ getStatus }}</p>
				<p class="card__datetime">{{ getDatetime }}</p>
			</div>
			<div class="arrow-icon" :class="{reverse: showMore === true}"></div>
		</div>
		<div class="match-info">
			<div class="match-info__row">
				<div class="match-info__title">
					<div class="match-info__category" :class="getSportType"></div>
					<p class="match-info__name bet-type">{{ getBetType }}</p>
				</div>
				<div class="match-info__coefficient">
					<p class="match-info__value coefficient">{{ 'x' + card?.bet_ratio }}</p>
					<button type="button" class="match-info__btn"
							v-if="card?.match?.phase === 'prematch'"
					></button>
				</div>
			</div>
			<div class="match-info__column match-result">
				<div class="match-result__value">
					<p class="match-info__name">{{ card?.match?.team1.name }}</p>
					<p class="match-info__value">{{ card?.match?.team1_score }}</p>
				</div>
				<div class="match-result__value">
					<p class="match-info__name">{{ card?.match?.team2.name }}</p>
					<p class="match-info__value">{{ card?.match?.team2_score }}</p>
				</div>
			</div>
			<div class="match-info__row">
				<p class="match-info__name">Ставка</p>
				<p class="match-info__value" :class="{lose: status === 'LOSE'}">{{ card?.bet_amount }}</p>
			</div>
			<div class="match-info__row"
				 v-if="status !== 'LOSE'"
			>
				<p class="match-info__name">Потенциальный выигрыш</p>
				<p class="match-info__value" :class="{win: status === 'WIN'}">{{ getPossibleWin }}</p>
			</div>
			<button type="button" class="match-info__cancel-btn"
					v-if="status === 'WAIT'"
					@click="cancelBet"
			>
				Отменить ставку
			</button>
		</div>
		<div class="hidden-info"
			 v-show="showMore"
		>
			<div class="hidden-info__row"
				 v-if="status !== 'LOSE'"
			>
				<p class="hidden-info__name">Комиссия с выигрыша</p>
				<p class="hidden-info__value">{{ getFeeWithWin + '%' }}</p>
			</div>
			<div class="hidden-info__row"
				v-if="card?.match.fantasy === false"
			>
				<p class="hidden-info__name">Смарт-контракт</p>
				<a href="" class="hidden-info__link">
					<p class="link-text">{{ card?.match?.contract_address }}</p>
				</a>
			</div>
		</div>
	</li>
</template>

<script>
// import Profile from "@/components/menu/Profile.vue";
import { getFullDate, getDateTime } from "@/helpers/time/time.js";
import { FOOTBALL, HOCKEY } from "@/helpers/sport-type/sport-type";
import BetsApi from "/src/api/src/api/BetsApi.js";
import UsersApi from "/src/api/src/api/UsersApi.js";
import {mapActions} from "vuex";

export default {
	name: "BetsHistoryCard",
	data() {
		return {
			showMore: false,
			status: 'WAIT'
		}
	},
	props: {
		card: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	computed: {
		getSportType() {
			if (this.card?.match?.sport_id === FOOTBALL) {
				return 'football'
			} else if (this.card?.match?.sport_id === HOCKEY) {
				return 'hockey'
			}
		},
		getBetType() {
			if (this.card?.bet_team === 'team1') {
				return 'Исход: П1'
			} else if (this.card?.bet_team === 'draw') {
				return 'Исход: Ничья'
			} else if (this.card?.bet_team === 'team2') {
				return 'Исход: П2'
			}
		},
		getStatus() {
			if (this.card?.win_amount > 0) {
				this.status = 'WIN'
				return 'Выигрыш'
			} else if (this.card?.win_amount === 0) {
				this.status = 'LOSE'
				return 'Проигрыш'
			} else if (this.card?.win_amount === null) {
				this.status = 'WAIT'
				return 'Не рассчитана'
			}
		},
		getDatetime() {
			return getFullDate(this.card?.match?.match_start_time) + ' в ' + getDateTime(this.card?.match?.match_start_time)
		},
		getPossibleWin() {
			let winAmount = this.card?.bet_amount * this.card?.bet_ratio
			let feeAmount = winAmount / 100 * this.card?.match?.fee
			return winAmount.toFixed(1) - feeAmount.toFixed(1)
		},
		getFeeWithWin() {
			let winAmount = this.card?.bet_amount * this.card?.bet_ratio
			return winAmount / 100 * this.card?.match?.fee
		}
	},
	methods: {
		cancelBet() {
			this.$emit('cancelBet', this.card)
			// let initData = null
			// if (this.webApp.initData) {
			// 	initData = this.webApp.initData
			// }
			// this.betsApi.cancelBet(this.card?.id, initData)
			// 	.then((res) => {
			// 		console.log(res)
			// 		this.updateUserInfo()
			// 		this.updateBetsHistory()
			// 	})
			// 	.catch((err) => {
			// 		console.log(err)
			// 	})
			// console.log('cancel')
		},
		// updateUserInfo() {
		// 	let initData = null
		// 	if (this.webApp.initData) {
		// 		initData = this.webApp.initData
		// 	}
		// 	this.usersApi.getCurrentUser(initData)
		// 		.then((res) => {
		// 			this.SAVE_USER_INFO(res)
		// 		})
		// 		.catch((err) => {
		// 			console.error(err)
		// 		})
		// },
		// updateBetsHistory() {
		// 	let initData = null
		// 	if (this.webApp.initData) {
		// 		initData = this.webApp.initData
		// 	}
		// 	let opts = {
		// 		fantasy: true,
		// 		page: 1,
		// 		size: 10
		// 	}
		// 	this.betsApi.getUserBets(initData, opts)
		// 		.then((res) => {
		// 			this.SAVE_BETS_HISTORY(res)
		// 		})
		// 		.catch((err) => {
		// 			console.log(err)
		// 		})
		// }
	}
}
</script>

<style scoped>
.card {
	background: rgba(40, 39, 43, 0.50);
	border-radius: 8px;
}

.card__title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	border-radius: 8px 8px 0 0;
	background: #3F3C42;
	cursor: pointer;
}

.card__info {
	display: flex;
	align-items: center;
}

.card__status {
	margin-right: 10px;
	padding: 4px 8px;
	border-radius: 5px;
	background: rgba(255, 255, 255, 0.20);
	font-size: 13px;
	font-family: Roboto-Medium, sans-serif;
	font-weight: 500;
}

.win_status {
	background: rgba(75, 197, 117, 0.50);
}

.lose_status {
	background: rgba(240, 97, 89, 0.50);
}

.card__datetime {
	font-size: 12px;
	opacity: 0.8;
}

.arrow-icon {
	transition: .2s;
	width: 20px;
	height: 20px;
	background: url('~@/assets/menu/card-arrow.svg') no-repeat;
}

.reverse {
	transform: rotateX(180deg);
}

.match-info {
	background: #28272B;
	border-radius: 0 0 8px 8px;
}

.match-info__row {
	display: flex;
	padding: 10px;
	align-items: center;
	justify-content: space-between;
}

.match-info__row:not(:last-child) {
	border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.match-info__column {
	display: flex;
	flex-direction: column;
	border-bottom: 1px solid rgba(255, 255, 255, 0.08);
	padding: 10px;
}

.match-result__value {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.match-result__value:not(:last-child) {
	margin-bottom: 2px;
}

.match-info__title {
	display: flex;
	align-items: center;
}

.match-info__category {
	margin-right: 6px;
	width: 14px;
	height: 14px;
}

.football {
	background: url('~@/assets/sport/football.svg') no-repeat;
	background-size: cover;
}

.hockey {
	background: url('~@/assets/sport/hockey.svg') no-repeat;
	background-size: cover;
}

.match-info__name:not(.bet-type) {
	font-size: 13px;
	opacity: 0.7;
}

.bet-type {
	font-size: 12px;
}

.match-info__value {
	font-size: 13px;
	font-family: Roboto-Medium, sans-serif;
}

.match-result__value .match-info__value {
	font-family: Roboto-Regular, sans-serif;
}

.match-info__coefficient {
	display: flex;
	align-items: center;
}

.coefficient {
	font-size: 14px;
	color: #00F59B;
}

.match-info__btn {
	margin-left: 6px;
	width: 26px;
	height: 26px;
	border: none;
	outline: none;
	border-radius: 8px;
	opacity: 0.8;
	background: rgba(255, 255, 255, 0.10) url('@/assets/menu/info.png') center no-repeat;
}

.win {
	color: #00F59B;
}

.lose {
	color: #F06159;
}

.match-info__cancel-btn {
	width: 100%;
	text-align: start;
	padding: 10px;
	border: none;
	outline: none;
	background: transparent;
	color: #FF3B30;
	font-size: 13px;
}

.hidden-info__row {
	display: flex;
	padding: 10px;
	align-items: center;
	justify-content: space-between;
}

.hidden-info__row:not(:last-child) {
	border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.hidden-info__name {
	font-size: 13px;
	opacity: 0.7;
	white-space: nowrap;
}

.hidden-info__value {
	font-size: 13px;
	font-family: Roboto-Medium, sans-serif;
}

.hidden-info__link {
	display: flex;
	align-items: center;
}

.hidden-info__link::before {
	content: '';
	display: block;
	margin-right: 6px;
	min-width: 15px;
	height: 15px;
	background: url('~@/assets/menu/copy.svg') no-repeat;
}

.link-text {
	max-width: 150px;
	overflow: hidden;
	text-overflow: ellipsis;
	font-size: 13px;
	font-family: Roboto-Medium, sans-serif;
}
</style>