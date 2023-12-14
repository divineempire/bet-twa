<template>
	<div class="menu">
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

		}
	},
	computed: {
		getRouteName() {
			return this.$route.name
		}
	},
}
</script>

<style scoped>

</style>