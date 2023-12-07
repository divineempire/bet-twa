<template>
	<div class="wallet">
		<p class="wallet__address">Connected: 0QA0Ef_bu2TIG-mct1N4FeWYr4VCQdc1yQPtjkoQw71z34m</p>
		<div class="wallet__info">
			<div class="wallet__balance">
				<p class="wallet__text">Баланс: 150.00 TON</p>
			</div>
			<button class="wallet__logout-btn">
				<svg class="btn__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<path d="M5.3077 20.5C4.80257 20.5 4.375 20.325 4.025 19.975C3.675 19.625 3.5 19.1974 3.5 18.6923V5.30773C3.5 4.8026 3.675 4.37503 4.025 4.02503C4.375 3.67503 4.80257 3.50003 5.3077 3.50003H12.0096V5.00001H5.3077C5.23077 5.00001 5.16024 5.03206 5.09612 5.09616C5.03202 5.16027 4.99997 5.2308 4.99997 5.30773V18.6923C4.99997 18.7692 5.03202 18.8397 5.09612 18.9039C5.16024 18.968 5.23077 19 5.3077 19H12.0096V20.5H5.3077ZM16.2308 16.2692L15.1923 15.1846L17.6269 12.75H9.09613V11.25H17.6269L15.1923 8.81541L16.2308 7.73083L20.5 12L16.2308 16.2692Z" fill="white"/>
				</svg>
				Logout
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "Wallet",
}
</script>

<style scoped>
	.wallet {
		padding: 14px 10px;
	}

	.wallet__address {
		margin: 0 auto 6px auto;
		max-width: 190px;
		font-size: 13px;
		opacity: 0.8;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.wallet__info {
		display: flex;
		flex-direction: row;
		gap: 0 6px;
	}

	.wallet__balance {
		flex: 66%;
		padding: 14px;
		border-radius: 12px;
		border: 1px solid rgba(255, 255, 255, 0.15);
	}

	.wallet__text {
		text-align: center;
		font-size: 14px;
	}

	.wallet__logout-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 33%;
		border-radius: 12px;
		border: none;
		background: rgba(255, 255, 255, 0.15);
		font-size: 14px;
	}

	.btn__icon {
		margin-right: 6px;
	}
</style>