<template>
	<div class="skeleton">
		<div class="skeleton__flex">
			<div class="skeleton__block">
				<p class="top-item skeleton__anim-content"></p>
				<p class="bottom-item skeleton__anim-content"></p>
			</div>
			<div class="skeleton__center">
				<p class="top-item skeleton__anim-content"></p>
				<p class="bottom-item skeleton__anim-content"></p>
			</div>
			<div class="skeleton__block">
				<p class="top-item skeleton__anim-content"></p>
				<p class="bottom-item skeleton__anim-content"></p>
			</div>
		</div>
		<div class="skeleton__flex">
			<div class="skeleton__button skeleton__anim-content"></div>
			<div class="skeleton__button skeleton__anim-content"></div>
			<div class="skeleton__button skeleton__anim-content"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SkeletonItem",
	data() {
		return {}
	}
}
</script>

<style scoped>
	.skeleton {
		display: flex;
		flex-direction: column;
		gap: 12px 0;
		margin-top: 4px;
		padding: 6px;
		border-radius: 8px;
		background-color: #28272B;
	}

	.skeleton__flex {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 0 12px;
	}

	.skeleton__center {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		flex: 25%;
		height: 44px;
		gap: 6px 0;
		margin-top: 10px;
	}

	.skeleton__block {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 8px 0;
		flex: 33%;
		height: 60px;
		margin: 0 5px;
	}

	.skeleton__button {
		flex: 33%;
		height: 45px;
	}

	.skeleton__anim-content {
		//background-color: #3F3C42;
		border-radius: 5px;
	}

	.skeleton__anim-content::after {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(to right, #4e4e53 0%, rgba(14, 14, 14, 0.1) 15%, #4e4e53 30% , rgba(14, 14, 14, 0.1) 50%, #4e4e53 60%, rgba(14, 14, 14, 0.1) 80%, #4e4e53 100%);
		background-repeat: no-repeat;
		background-size: 600px 398px;
		animation: Shimmer 10s linear infinite;
		border-radius: 5px;
	}

	@keyframes Shimmer {
		0% {
			background-position: -450px 0;
		}
		25% {
			background-position: 0 0;
		}
		50% {
			background-position: -450px 0;
		}
		75% {
			background-position: 0 0;
		}
		100%{
			background-position: -450px 0;
		}
	}

	.top-item {
		height: 30px;
	}

	.skeleton__block .top-item {
		width: 50%;
		margin: 0 auto;
	}

	.bottom-item {
		margin: 0 auto;
		width: 80%;
		height: 25px;
	}
</style>