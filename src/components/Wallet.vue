<template>
	<div class="wallet">
		<div class="wallet__connect-info"
			v-if="!connected"
		>
			<h1 class="wallet__app-name">Bets.coffee</h1>
			<p class="wallet__description">Полностью децентрализованная биржа ставок. <br> Просто, анонимно и безопасно!</p>
			<button class="wallet__connect-btn">Подключить кошелёк</button>
		</div>
		<div class="wallet__balance"
			v-if="connected"
		>
			<div class="wallet__main-balance">
				<p class="wallet__text">Основной счёт:</p>
				<p class="wallet__value">150 000 TON</p>
			</div>
			<div class="wallet__fantasy-balance">
				<p class="wallet__text">Фентези счет:</p>
				<p class="wallet__value">1000 Ф</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Wallet",
	data() {
		return {
			connected: false,
		}
	}
}
</script>

<style scoped>
	.wallet {
		padding: 14px 0;
	}

	.wallet__connect-info {
		//margin-bottom: 12px;
	}

	.wallet__app-name {
		font-size: 26px;
		line-height: 30px;
	}

	.wallet__description {
		font-size: 14px;
		margin-bottom: 12px;
	}

	.wallet__connect-btn {
		width: 100%;
		padding: 13.5px;
		border: none;
		outline: none;
		border-radius: 10px;
		background: #00F59B;
		color: #141414;
		font-size: 15px;
	}

	.wallet__balance {
		display: flex;
		flex-direction: column;
		border-radius: 8px;
		background: #28272B;
	}

	.wallet__main-balance {
		padding: 10px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.10);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.wallet__fantasy-balance {
		padding: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.wallet__text {
		font-size: 13px;
	}

	.wallet__value {
		font-size: 13px;
		font-family: Roboto-Medium, sans-serif;
		font-weight: 500;
	}
</style>