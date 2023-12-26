<template>
	<div class="skeleton">
		<div class="skeleton__block">
			<div class="skeleton__content anim-content"></div>
			<div class="skeleton__small-content anim-content"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SkeletonTournaments",
	data() {
		return {}
	}
}
</script>

<style scoped>
	.skeleton {
		width: 100%;
		padding: 8px 10px;
		border-radius: 8px;
		background: #2D2B32;
		margin-bottom: 6px;
	}

	.skeleton__block {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.skeleton__content {
		max-width: 70%;
		width: 70%;
		height: 24px;
		background-color: #8E8E93;
		border-radius: 5px;
	}

	.skeleton__small-content {
		width: 30px;
		height: 24px;
		border-radius: 5px;
	}

	.anim-content::after {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(to top right, #58585a 0%, rgba(67, 67, 66, 0.1) 15%, #58585a 30%, rgba(67, 67, 66, 0.1) 45%, #58585a 60%, rgba(67, 67, 66, 0.1) 75%, #58585a 100%);
		background-repeat: no-repeat;
		background-size: 1000px 398px;
		animation: Shimmer 4s linear infinite;
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