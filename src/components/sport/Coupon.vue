<template>
	<div class="popup">
		<transition name="slide">
			<div class="coupon"
				v-show="showPopup"
			>
				<div class="line-icon" @click="$emit('closePopup')"></div>
				<div class="coupon__balance balance">
					<p class="balance__name">Баланс:</p>
					<p class="balance__value">150 TON</p>
				</div>
				<div class="coupon__info">
					<div class="bet-info">
						<p class="bet-info__name">{{ betType }}</p>
						<p class="bet-info__teams">{{ getTeamNames }}</p>
						<p class="bet-info__category">{{ category }}</p>
					</div>
					<p class="coupon__coefficient">x2.01</p>
				</div>
				<label for="" class="coupon__label">
					<input type="number" class="coupon__input" placeholder="Сумма ставки">
				</label>
				<div class="coupon__button-block">
					<button class="coupon__choose-btn">15 TON</button>
					<button class="coupon__choose-btn">25 TON</button>
					<button class="coupon__choose-btn">50 TON</button>
					<button class="coupon__choose-btn">100 TON</button>
					<button class="coupon__choose-btn">200 TON</button>
				</div>
				<ul class="coupon__bonus-list">
					<li class="bonus-card"
						v-for="(item, index) in bonuses"
						:key="index"
						:class="{active_card: active.includes(index)}"
					>
						<div class="bonus-card__main">
							<p class="bonus-card__amount">{{ item?.amount }}</p>
							<p class="bonus-card__type">{{ item?.type }}</p>
							<p class="bonus-card__date">{{ 'до ' + item?.date }}</p>
						</div>
						<div class="bonus-card__switch-btn"
							 @click="activeSwitch(index)"
							 :class="{active_switch: active.includes(index)}"
						>
							<div class="switch-toggle"></div>
						</div>
					</li>
				</ul>
				<div class="coupon__make-bet">
					<button class="coupon__main-btn">Сделать ставку</button>
				</div>
				<p class="coupon__notice">Коэффициент может измениться до начала матча, <br> в зависимости от ставок других игроков</p>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: "Coupon",
	data() {
		return {
			bonuses: [
				{
					amount: '0.5 TON',
					type: 'FREE',
					date: '24.02.2024'
				}
			],
			active: [],
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
		activeBet: {
			type: String,
			default() {
				return ''
			}
		}
	},
	computed: {
		betType() {
			if (this.activeBet === 'FIRST_WIN') {
				return 'Исход: П1'
			} else if (this.activeBet === 'DRAW') {
				return 'Исход: Ничья'
			} else if (this.activeBet === 'SECOND_WIN') {
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
		getTeamNames() {
			return this.event.firstTeam.name + ' - ' + this.event.secondTeam.name
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
		}
	},
	methods: {
		activeSwitch(value) {
			if (this.active.includes(value)) {
				let index = this.active.indexOf(value)
				this.active.splice( index,1)
			} else {
				this.active.push(value)
			}
		}
	}
}
</script>
<style scoped>
	.slide-enter-active, .slide-leave-active {
		transition: .2s linear;
		transform-origin: right;
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
		background: rgba(0, 0, 0, 0.2);
	}

	.popup-container {
		position: relative;
		max-width: 390px;
		width: 390px;
		margin: 0 auto;
		padding: 0 10px;
	}

	.coupon {
		//position: fixed;
		//left: 0;
		//right: 0;
		//bottom: 0;
		width: 100%;
		padding: 10px 14px 28px 14px;
		border-radius: 14px 14px 0px 0px;
		background: #151317;
	}

	.line-icon {
		margin: 0 auto 14px auto;
		width: 34px;
		height: 4px;
		border-radius: 3px;
		background: rgba(255, 255, 255, 0.50);
	}

	.balance {
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

	.balance__value {
		font-size: 16px;
		font-family: Roboto-Medium, sans-serif;
		line-height: 19px;
	}

	.coupon__info {
		display: flex;
		justify-content: space-between;
		margin-bottom: 8px;
		padding: 12px;
		border-radius: 8px;
		background: #28272B;
	}

	.bet-info__name {
		margin-bottom: 4px;
		font-size: 15px;
		font-family: Roboto-Medium, sans-serif;
	}

	.bet-info__teams {
		margin-bottom: 4px;
		font-size: 13px;
	}

	.bet-info__category {
		font-size: 11px;
		opacity: 0.8;
	}

	.coupon__coefficient {
		font-size: 15px;
		font-family: Roboto-Medium, sans-serif;
	}

	.coupon__label {
		display: block;
		margin-bottom: 8px;
	}

	.coupon__input {
		width: 100%;
		padding: 19px 14px;
		outline: none;
		border: none;
		border-radius: 8px;
		background: #000;
		font-size: 15px;
		line-height: 18px;
		font-family: Roboto-Regular, sans-serif;
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

	.coupon__button-block {
		display: flex;
		align-items: center;
		gap: 0 6px;
		padding-bottom: 8px;
		overflow-x: scroll;
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
		padding: 14px 0;
	}

	.coupon__main-btn {
		width: 100%;
		padding: 13px 0 14px 0;
		outline: none;
		border: none;
		border-radius: 10px;
		background: #00F59B;
		color: #141414;
		font-size: 15px;
		font-family: Roboto-Medium, sans-serif;
	}

	.coupon__notice {
		text-align: center;
		font-size: 12px;
	}
</style>