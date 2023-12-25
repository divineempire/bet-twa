<template>
	<div class="skeleton">
		<div class="skeleton__title">
			<div class="skeleton__title-content anim-content"></div>
			<div class="skeleton__title-content_small anim-content"></div>
		</div>
		<div class="skeleton__block">
			<div class="skeleton__content anim-content"></div>
			<div class="skeleton__content little-content anim-content"></div>
		</div>
		<div class="skeleton__column">
			<div class="skeleton__row">
				<div class="skeleton__content anim-content"></div>
				<div class="skeleton__content little-content anim-content"></div>
			</div>
			<div class="skeleton__row">
				<div class="skeleton__content anim-content"></div>
				<div class="skeleton__content little-content anim-content"></div>
			</div>
		</div>
		<div class="skeleton__block">
			<div class="skeleton__content anim-content"></div>
			<div class="skeleton__content little-content anim-content"></div>
		</div>
		<div class="skeleton__block">
			<div class="skeleton__content anim-content"></div>
			<div class="skeleton__content little-content anim-content"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SkeletonHistoryCard",
	data() {
		return {}
	}
}
</script>

<style scoped>
	.skeleton {
		background: rgba(40, 39, 43, 0.50);
		border-radius: 8px;
		margin-bottom: 8px;
	}

	.skeleton__title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px;
		border-radius: 8px 8px 0 0;
		background: #3F3C42;
		cursor: pointer;
	}

	.skeleton__title-content {
		width: 70%;
		height: 23px;
		//background-color: #8E8E93;
		border-radius: 5px;
	}

	.skeleton__title-content_small {
		width: 23px;
		height: 23px;
		//background-color: #8E8E93;
		border-radius: 5px;
	}

	.skeleton__block {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 0 10px;
		padding: 10px;
	}

	.skeleton__column {
		display: flex;
		flex-direction: column;
		padding: 10px;
		gap: 8px 0;
	}

	.skeleton__row {
		display: flex;
		justify-content: space-between;
		width: 100%;
		gap: 10px;
	}

	.skeleton__content {
		width: 50%;
		height: 14px;
		//background-color: #8E8E93;
	}

	.little-content {
		max-width: 30px;
	}

	.anim-content {
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
		animation: Shimmer 6s linear infinite;
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