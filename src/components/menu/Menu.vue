<template>
	<div class="menu">
		<button class="menu__gift-btn"
				:class="{ready_btn: gift.ready === true}"
		>
			{{ btnText }}
		</button>
		<MenuNav
			v-if="getRouteName === 'Menu'"
		/>
		<router-view/>
	</div>
</template>

<script>
import MenuNav from "@/components/menu/MenuNav.vue";

export default {
	name: "Menu",
	components: {
		MenuNav
	},
	data() {
		return {
			gift: {
				ready: false,
				time: '23:45:34'
			}
		}
	},
	computed: {
		getRouteName() {
			return this.$route.name
		},
		btnText() {
			if (this.gift.ready === true) {
				return 'Забрать ежедневную награду'
			} else {
				return `Время до следующей награды ${this.gift.time}`
			}
		}
	},
}
</script>

<style scoped>
	.menu__gift-btn {
		width: 100%;
		margin-bottom: 14px;
		padding: 14.5px;
		border-radius: 10px;
		border: none;
		outline: none;
		background: #3F3C42;
		font-size: 14px;
		line-height: 16px;
	}

	.ready_btn {
		background: #00F59B;
		color: #000;
	}
</style>