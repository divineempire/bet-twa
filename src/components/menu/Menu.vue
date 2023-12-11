<template>
	<div class="menu">
		<MenuNav
			v-if="getRouteName === 'Menu'"
		/>
		<router-view />
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
		return {}
	},
	computed: {
		getRouteName() {
			console.log(this.$route.name)
			return this.$route.name
		},
	},
}
</script>

<style scoped>

</style>