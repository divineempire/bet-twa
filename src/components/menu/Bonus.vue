<template>
	<div class="bonus">
		<div class="bonus__button-block">
			<button class="bonus__btn promo-btn"
					:class="{active_btn: mode === 'PROMO'}"
					@click="mode = 'PROMO'"
			>
				Акции
			</button>
			<button class="bonus__btn bonus-btn"
					:class="{active_btn: mode === 'BONUS'}"
					@click="mode = 'BONUS'"
			>
				Бонусы
			</button>
		</div>
		<div class="promo">
			<label for="" class="promo__label">
				<input type="text" class="promo__input" placeholder="Введите промокод" v-model="newPromocode">
				<button class="promo__apply-btn"
					@click="applyPromocode"
				>
					Применить
				</button>
			</label>
		</div>
		<div class="empty-promo"
			v-if="mode === 'PROMO'"
		>
			<h3 class="empty-promo__caption">Доступных акций пока нет</h3>
			<p class="empty-promo__text">Введите промокод, чтобы получить бонусы</p>
		</div>
		<ul class="bonus__list"
			v-if="mode === 'BONUS'"
		>
			<li class="bonus__item bonus-card"
				v-for="(item, index) in bonuses"
			>
				<p class="bonus-card__amount">{{ item.amount }}</p>
				<p class="bonus-card__type">{{ item.type }}</p>
				<p class="bonus-card__date">{{ 'до ' + item.date }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "Bonus",
	data() {
		return {
			mode: 'PROMO',
			newPromocode: '',
			bonuses: [
				{
					amount: '0.5 TON',
					type: 'FREE',
					date: '24.02.2024'
				}
			]
		}
	},
	methods: {
		applyPromocode() {
			console.log(this.newPromocode)
		}
	}
}
</script>

<style scoped>
	.bonus {
		//position: relative;
		padding: 14px 0;
	}

	.bonus__button-block {
		margin-bottom: 12px;
	}

	.bonus__btn {
		transition: .2s;
		outline: none;
		border: none;
		background: transparent;
		font-size: 18px;
		opacity: 0.5
	}

	.active_btn {
		opacity: 1;
	}

	.promo-btn {
		margin-right: 16px;
	}

	.promo__label {
		margin-bottom: 28px;
		display: flex;
		align-items: center;
		width: 100%;
		padding:0 6px 0 0;
		border-radius: 8px;
		background: #2D2B32;
	}

	.promo__input {
		padding: 20px 0 21px 14px;
		background-color: transparent;
		border: none;
		outline: none;
		flex: 100%;
		font-size: 13px;
		color: #fff;
	}

	.promo__input::placeholder {
		color: #fff;
		font-size: 13px;
	}

	.promo__apply-btn {
		padding: 15px 22.5px  14px 22.5px;
		border: none;
		border-radius: 10px;
		background: #3F3C42;
		font-size: 14px;
		line-height: 16px;
		font-family: Roboto-Regular, sans-serif;
		font-weight: 400;
	}

	.empty-promo {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: calc(100vh - 270px);
	}

	.empty-promo__caption {
		margin-bottom: 4px;
		font-size: 18px;
	}

	.empty-promo__text {
		font-size: 14px;
		opacity: 0.8;
	}

	.bonus-card {
		display: flex;
		align-items: center;
		padding: 17px 14px;
		border-radius: 8px;
		border: 1px solid rgba(255, 255, 255, 0.30);
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
</style>