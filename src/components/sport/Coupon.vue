<template>
	<div class="popup"
		@click.self="closePopup"
	>
		<transition name="slide">
			<div class="coupon" :id="'coupon_' + event?.id"
				 v-if="showPopup"
			>
				<div class="close_btn"
					@click="closePopup"
				>
					<div class="line-icon"></div>
				</div>
				<div class="coupon__balance balance">
					<p class="balance__name">Баланс:</p>
					<div class="value-group">
						<p class="balance__value">{{ this.getActualBalance }}</p>
						<p class="balance__value">{{ ' ' + this.getValueType }}</p>
					</div>
				</div>
				<div class="coupon__info">
					<div class="match-info">
						<div class="match-info__flex">
							<p class="match-info__name">{{ betType }}</p>
							<p class="match-info__teams">{{ getTeamNames }}</p>
							<p class="match-info__category">{{ category }}</p>
						</div>
						<p class="coupon__coefficient"
						   :class="{up: upped === true, down: downed === true}">
							{{ 'x' + getCoefficient }}
						</p>
					</div>
					<div class="bet-info first-row">
						<p class="bet-info__name">Сумма ставки</p>
						<div class="value-group">
							<p class="bet-info__value">{{ betAmount || 0}}</p>
							<p class="bet-info__value">{{ ' ' + getValueType }}</p>
						</div>
					</div>
					<div class="bet-info">
						<p class="bet-info__name">Потенциальный выигрыш</p>
						<div class="value-group">
							<p class="bet-info__value">{{ getPossibleWin || 0 }}</p>
							<p class="bet-info__value">{{ ' ' + getValueType }}</p>
						</div>
					</div>
				</div>
				<div class="coupon__input-container">
					<div class="additional-value"
						@click="focusInput"
					>
						<p class="hidden_value"
						   v-show="betAmount !== null && betAmount !== '' && betAmount > 0">
							{{ betAmount + ' ' + getValueType }}
						</p>
						<svg class="additional-value__arrow-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none"
							v-show="betAmount !== null && betAmount !== '' && betAmount > 0"
						>
							<path d="M10.3846 13.7404L9.59422 12.9269L12.4587 10.0625H3.375V8.93753H12.4587L9.59422 6.07309L10.3846 5.25964L14.625 9.50001L10.3846 13.7404Z" fill="white"/>
						</svg>
						<p class="win-value"
						   v-show="betAmount !== null && betAmount !== '' && betAmount > 0">
							{{ getPossibleWin + ' ' + getValueType }}
						</p>
					</div>
<!--					v-if="event?.match?.fee > 0"-->
					<p class="input-fee">{{ event?.match?.fee }}</p>
					<label for="bet-amount" class="coupon__label">
						<p class="label-text"
						   :class="{message_red: inputMessage === 'Недостаточно средств'}"
						   v-if="betAmount !== null && betAmount !== '' && betAmount > 0">
							{{ inputMessage }}
						</p>
						<input inputmode="numeric" type="number" class="coupon__input" placeholder="Сумма ставки" v-model="betAmount" @input="inputBetAmount" id="bet-amount">
					</label>
				</div>
				<div class="coupon__button-block"
					 v-if="league === 'REGULAR'"
				>
					<button class="coupon__choose-btn"
							v-for="(item, index) in offers"
							:key="index"
							@click="setAmount(item.regular)"
					>
						{{ item.regular + ' ' + getValueType }}
					</button>
				</div>
				<div class="coupon__button-block"
					v-if="league === 'FANTASY'"
				>
					<button class="coupon__choose-btn"
							v-for="(item, index) in offers"
							:key="index"
							@click="setAmount(item.fantasy)"
					>
						{{ item.fantasy + ' ' + getValueType }}
					</button>
				</div>
<!--				<ul class="coupon__bonus-list">-->
<!--					<li class="bonus-card"-->
<!--						v-for="(item, index) in bonuses"-->
<!--						:key="index"-->
<!--						:class="{active_card: active.includes(index)}"-->
<!--					>-->
<!--						<div class="bonus-card__main">-->
<!--							<p class="bonus-card__amount">{{ item?.amount }}</p>-->
<!--							<p class="bonus-card__type">{{ item?.type }}</p>-->
<!--							<p class="bonus-card__date">{{ 'до ' + item?.date }}</p>-->
<!--						</div>-->
<!--						<div class="bonus-card__switch-btn"-->
<!--							 @click="activeSwitch(index)"-->
<!--							 :class="{active_switch: active.includes(index)}"-->
<!--						>-->
<!--							<div class="switch-toggle"></div>-->
<!--						</div>-->
<!--					</li>-->
<!--				</ul>-->
				<div class="coupon__make-bet">
					<button class="coupon__main-btn"
							:disabled="disabledButton"
							@click="makeBet"
					>
						Сделать ставку
					</button>
				</div>
				<p class="coupon__notice">Коэффициент может измениться до начала матча, <br> в зависимости от ставок других игроков</p>
			</div>
		</transition>
	</div>
</template>

<script>
import {subscribeTouchEvents, unsubscribeTouchEvents} from '/src/helpers/touch-events/swipes.js'
import BetsApi from "/src/api/src/api/BetsApi.js";
import {mapActions, mapGetters} from "vuex";
import UsersApi from "/src/api/src/api/UsersApi.js";
import {MatchesApi} from "@/api/src";

export default {
	name: "Coupon",
	data() {
		return {
			interval: null,
			updatedMatchInfo: null,
			upped: false,
			downed: false,
			activeFreeBet: null,
			betAmount: null,
			type: '',
			bonuses: [
				{
					amount: '0.5 TON',
					type: 'FREE',
					date: '24.02.2024'
				}
			],
			active: [],
			offers: [
				{
					regular: 15,
					fantasy: 500
				},
				{
					regular: 25,
					fantasy: 1000
				},
				{
					regular: 50,
					fantasy: 2000
				},
				{
					regular: 100,
					fantasy: 3000
				},
				{
					regular: 200,
					fantasy: 5000
				}
			]
		}
	},
	props: {
		showPopup: {
			type: Boolean,
			default() {
				return false
			}
		},
		league: {
			type: String,
			default() {
				return ''
			}
		},
		event: {
			type: Object,
			default() {
				return {}
			}
		},
		firstTeam: {
			type: Object,
			default() {
				return {}
			}
		},
		secondTeam: {
			type: Object,
			default() {
				return {}
			}
		},
		activeBet: {
			type: String,
			default() {
				return ''
			}
		}
	},
	computed: {
		...mapGetters([
			'GET_WALLET_INFO',
			'GET_USER_INFO'
		]),
		disabledButton() {
			if (this.getActualBalance < this.betAmount || this.betAmount === 0 || this.betAmount === null || this.betAmount === '' || this.getCoefficient <= 1) {
				console.log(true)
				return true
			} else {
				console.log(false)
				return false
			}
		},
		webApp() {
			return window.Telegram.WebApp
		},
		betsApi() {
			return new BetsApi()
		},
		usersApi() {
			return new UsersApi()
		},
		matchesApi() {
			return new MatchesApi()
		},
		getValueType() {
			if (this.league === 'REGULAR') {
				return 'TON'
			} else if (this.league === 'FANTASY') {
				return 'Ф'
			}
		},
		getActualBalance() {
			if (this.league === 'REGULAR') {
				if (this.GET_WALLET_INFO.balance) {
					return (this.GET_WALLET_INFO?.balance / Math.pow(10, 9)).toFixed(2)
				} else {
					return 0
				}
			} else if (this.league === 'FANTASY') {
				if (this.GET_USER_INFO.balance) {
					return this.GET_USER_INFO?.balance
				} else {
					return 0
				}
			}
		},
		getPossibleWin() {
			if (this.betAmount !== null && this.betAmount > 0 && this.betAmount !== '') {
				console.log(this.betAmount)
				let winAmount = this.betAmount * this.getCoefficient
				let feeAmount = winAmount / 100 * this.event?.fee
				return winAmount.toFixed(1) - feeAmount.toFixed(1)
			} else {
				return ''
			}
		},
		betType() {
			if (this.activeBet === 'FIRST_WIN') {
				this.type = 'team1'
				return 'Исход: П1'
			} else if (this.activeBet === 'DRAW') {
				this.type = 'draw'
				return 'Исход: Ничья'
			} else if (this.activeBet === 'SECOND_WIN') {
				this.type = 'team2'
				return 'Исход: П2'
			}
		},
		category() {
			let text = ''
			if (this.league === 'REGULAR') {
				text = 'Обычная/'
			} else {
				text = 'Фентези/'
			}

			text += this.getBetType

			return text
		},
		inputMessage() {
			if (this.getActualBalance >= this.betAmount ) {
				if (this.event?.fee > 0) {
					return	'Потенциальный выигрыш с учётом комиссии'
				} else if (this.event?.fee === 0) {
					return	'Потенциальный выигрыш'
				}
			} else {
				return 'Недостаточно средств'
			}
		},
		getTeamNames() {
			return this.event.team1?.name + ' - ' + this.event.team2?.name
		},
		getBetType() {
			let path = this.$route.path
			if (path === '/sport/football') {
				return 'Спорт/Футбол'
			} else if (path === '/sport/hockey') {
				return 'Спорт/Хоккей'
			} else if (path === '/sport/basketball') {
				return 'Спорт/Баскетбол'
			} else if (path === '/sport/volleyball') {
				return 'Спорт/Волейбол'
			} else if (path === '/sport/tennis') {
				return 'Спорт/Теннис'
			}
		},
		getCoefficient() {
			if (this.activeBet === 'FIRST_WIN') {
				if (this.updatedMatchInfo !== null) {
					return this.updatedMatchInfo.team1_ratio
				} else {
					return this.event.team1_ratio
				}
			} else if (this.activeBet === 'DRAW') {
				if (this.updatedMatchInfo !== null) {
					return this.updatedMatchInfo.draw_ratio
				} else {
					return this.event.draw_ratio
				}
			} else if (this.activeBet === 'SECOND_WIN') {
				if (this.updatedMatchInfo !== null) {
					return this.updatedMatchInfo.team2_ratio
				} else {
					return this.event.team2_ratio
				}
			}
		},
		setFantasyData() {
			let obj = {
				match_id: this.event.id,
				bet_amount: this.betAmount,
				bet_team: this.type,
				free_bet_id: 0
			}
			if (this.activeFreeBet !== null) {
				obj.free_bet_id = this.activeFreeBet?.id
			}
			return obj
		}
	},
	methods: {
		...mapActions([
			'SAVE_USER_INFO',
		]),
		activeSwitch(value) {
			if (this.active.includes(value)) {
				let index = this.active.indexOf(value)
				this.active.splice(index, 1)
			} else {
				this.active.push(value)
			}
		},
		closePopup() {
			this.$emit('closePopup')
		},
		checkUserChoose(value) {
			if (value) {
				this.closePopup()
			}
		},
		makeBet() {
			if (this.league === 'FANTASY') {
				this.fantasyBet()
			}
		},
		fantasyBet() {
			let initData = null
			if (this.webApp.initData) {
				initData = this.webApp.initData
			}
			let obj = this.setFantasyData
			this.betsApi.createFantasyBet(initData, obj)
				.then((res) => {
					console.log(res)
					this.updateUserInfo()
					this.closePopup()
				})
				.catch((err) => {
					console.error(err)
					if (err.error.status === 400) {
						console.log('status 400')
						let message = `${err?.body?.detail}.\nЗакрыть купон?`
						this.webApp.showConfirm(message, this.checkUserChoose)
					}
				})
		},
		updateUserInfo() {
			let initData = null
			if (this.webApp.initData) {
				initData = this.webApp.initData
			}
			console.log(initData, 'getCurrentUser App.vue')
			this.usersApi.getCurrentUser(initData)
				.then((res) => {
					this.SAVE_USER_INFO(res)
				})
				.catch((err) => {
					console.error(err)
				})
		},
		updateCoefficient() {
			this.matchesApi.getMatch(this.event.id)
				.then((res) => {
					// this.updatedMatchInfo = res
					this.compareCoefficient(res)
				})
				.catch((err) => {
					console.error(err)
				})
		},
		compareCoefficient(value) {
			if (this.activeBet === 'FIRST_WIN') {
				if (value.team1_ratio > this.getCoefficient) {
					this.upped = true
				} else if (value.team1_ratio < this.getCoefficient) {
					this.downed = true
				}
			} else if (this.activeBet === 'DRAW') {
				if (value.draw_ratio > this.getCoefficient) {
					this.upped = true
				} else if (value.draw_ratio < this.getCoefficient) {
					this.downed = true
				}
			} else if (this.activeBet === 'SECOND_WIN') {
				if (value.team2_ratio > this.getCoefficient) {
					this.upped = true
				} else if (value.team2_ratio < this.getCoefficient) {
					this.downed = true
				}
			}
			setTimeout(() => {
				this.upped = false
				this.downed = false
			}, 1000)
			this.updatedMatchInfo = value
		},
		inputBetAmount() {
			let maxValue = 100000
			if (this.betAmount > maxValue) {
				this.betAmount = maxValue
			}
		},
		setAmount(value) {
			this.betAmount = value
			// this.focusInput()
		},
		focusInput() {
			console.log('focus')
			let input = document.getElementById('bet-amount')
			input.focus()
		}
	},
	watch: {
		showPopup: {
			handler: function () {
				if (this.showPopup === true) {
					this.interval = setInterval(() => {
						if (this.event.id) {
							this.updateCoefficient()
						}
					},5000)
					// setTimeout(() => {
					// 	let coupon = document.getElementById('coupon_' + this.event?.id)
					// 	subscribeTouchEvents(coupon, this)
					// }, 300)
				} else {
					clearInterval(this.interval)
					this.betAmount = null
					// let coupon = document.getElementById('coupon_' + this.event?.id)
					// unsubscribeTouchEvents(coupon)
				}
			}
		}
	},
	mounted() {
		// let coupon = document.getElementById('coupon_' + this.event?.id)
		// subscribeTouchEvents(coupon, this)
	},
	unmounted() {
		// clearInterval(this.interval)
		// let coupon = document.getElementById('coupon' + this.event?.id)
		// unsubscribeTouchEvents(coupon)
	}
}
</script>
<style scoped>
.slide-enter-active, .slide-leave-active {
	transition: .2s linear;
	transform-origin: bottom;
}

.slide-enter-from, .slide-leave-to {
	transform: translateY(450px);
}

.popup {
	z-index: 999;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: flex-end;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.8);
}

.coupon {
//position: fixed; //left: 0; //right: 0; //bottom: 0;
	width: 100%;
	padding: 0 0 28px 0;
	border-radius: 14px 14px 0 0;
	background: #151317;
}

.close_btn {
	padding: 14px 0;
	width: min-content;
	margin: 0 auto;
}

.line-icon {
	//padding-top: 14px;

	width: 34px;
	height: 4px;
	border-radius: 3px;
	background: rgba(255, 255, 255, 0.50);
}

.balance {
	padding: 0 14px;
	margin-bottom: 22px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.balance__name {
	font-size: 16px;
	font-family: Roboto-Medium, sans-serif;
	line-height: 19px;
}

.value-group {
	display: flex;
	align-items: center;
	gap: 0 3px;
}

.balance__value {
	font-size: 16px;
	font-family: Roboto-Medium, sans-serif;
	line-height: 19px;
}

.coupon__info {
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	//margin-bottom: 8px;
	padding: 12px;
	margin: 0 14px 8px 14px;
	border-radius: 8px;
	background: #28272B;
}

.match-info {
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 10px;
	padding-bottom: 10px;
	border-bottom: 1px solid rgba(255, 255, 255, .2);
}

.match-info__name {
	margin-bottom: 4px;
	font-size: 15px;
	font-family: Roboto-Medium, sans-serif;
}

.match-info__teams {
	margin-bottom: 4px;
	font-size: 13px;
}

.match-info__category {
	font-size: 11px;
	opacity: 0.8;
}

.coupon__coefficient {
	font-size: 15px;
	font-family: Roboto-Medium, sans-serif;
}

.bet-info {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.first-row {
	margin-bottom: 4px;
}

.bet-info__name {
	font-size: 13px;
	opacity: .7;
}

.bet-info__value {
	font-size: 13px;
}

.up {
	color: #00F59B;
}

.down {
	color: #F06159;
}

.coupon__input-container {
	position: relative;
}

.coupon__label {
	display: block;
	margin-bottom: 8px;
	padding: 0 14px;
}

.coupon__input {
	transition: .2s;
	width: 100%;
	padding: 19px 14px;
	outline: none;
	border: none;
	border-radius: 8px;
	background: #000;
	font-size: 16px;
	line-height: 19px;
	font-family: Roboto-Regular, sans-serif;
	color: transparent;
}

.coupon__input::placeholder {
	color: #fff;
	opacity: 0.6;
}

.coupon__input::-webkit-outer-spin-button,
.coupon__input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

.coupon__input:focus::-webkit-input-placeholder {
	color: transparent;
}

.coupon__input:focus::-moz-placeholder {
	color: transparent;
}

.coupon__input:focus:-moz-placeholder {
	color: transparent;
}

.coupon__input:focus:-ms-input-placeholder {
	color: transparent;
}

.label-text {
	transition: .2s;
	position: absolute;
	line-height: 0;
	padding-left: 15px;
	transform: translateY(17px);
	font-size: 11px;
	opacity: 0.8;
}

.message_red {
	transition: .2s;
	color: #FF453A;
}

.additional-value {
	position: absolute;
	z-index: 100;
	display: flex;
	align-items: center;
	gap: 0 2px;
	padding-left: 29px;
	transform: translateY(26px);
}

.hidden_value {
	font-size: 16px;
	line-height: 19px;
	font-family: Roboto-Regular, sans-serif;
}

.win-value {
	color: #00F59B;
	font-size: 16px;
	line-height: 19px;
	font-family: Roboto-Regular, sans-serif;
}

.coupon__button-block {
	display: flex;
	align-items: center;
	gap: 0 6px;
	padding: 0 14px 8px 14px;
	overflow-x: auto;
}

.coupon__choose-btn {
	padding: 12px 14px;
	outline: none;
	border-radius: 8px;
	border: 1px solid rgba(255, 255, 255, 0.15);
	background: transparent;
	font-size: 14px;
	font-family: Roboto-Medium, sans-serif;
	white-space: nowrap;
}

.bonus-card {
	transition: .2s;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 11px 14px;
	border-radius: 8px;
	border: 1px solid rgba(255, 255, 255, 0.15);
}

.active_card {
	border: 1px solid rgba(0, 245, 155, 0.50);
}

.bonus-card__main {
	display: flex;
	align-items: center;
}

.bonus-card__amount {
	margin-right: 4px;
	font-family: Roboto-Medium, sans-serif;
	font-weight: 500;
	font-size: 14px;
}

.bonus-card__type {
	margin-right: 12px;
	padding: 4px 6px;
	border-radius: 6px;
	background: #3F3C42;
	font-family: Roboto-Medium, sans-serif;
	font-weight: 500;
	font-size: 12px;
	text-transform: uppercase;
}

.bonus-card__date {
	font-size: 11px;
	opacity: 0.7;
}

.bonus-card__switch-btn {
	transition: .15s;
	width: 38px;
	height: 22px;
	padding: 1px;
	border: 1px solid #00F59B;
	border-radius: 100px;
	cursor: pointer;
}

.switch-toggle {
	transition: .15s linear;
	width: 18px;
	height: 18px;
	border: 4px solid #151317;
	border-radius: 100px;
	background: #00F59B;
}

.active_switch {
	background: #00F59B;
}

.active_switch .switch-toggle {
	background: #000;
	transform: translateX(16px);
	border: none;
}

.coupon__make-bet {
	padding: 14px;
}

.coupon__main-btn {
	transition: .2s;
	width: 100%;
	padding: 16px 0 16px 0;
	outline: none;
	border: none;
	border-radius: 10px;
	background: #00F59B;
	color: #141414;
	font-size: 15px;
	font-family: Roboto-Medium, sans-serif;
}

.coupon__main-btn:disabled {
	background: #3F3C42;
	color: rgba(255, 255, 255, .5);
}

.coupon__notice {
	text-align: center;
	font-size: 12px;
}
</style>