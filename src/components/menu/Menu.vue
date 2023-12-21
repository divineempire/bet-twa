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
import BetsApi from "/src/api/src/api/BetsApi.js";
import { mapActions } from "vuex";
import UsersApi from "/src/api/src/api/UsersApi";

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
		},
		usersApi() {
			return new UsersApi()
		},
		betsApi() {
			return new BetsApi()
		},
		webApp() {
			return window.Telegram.WebApp
		}
	},
	methods: {
		...mapActions([
			'SAVE_BETS_HISTORY',
		]),
		getBetsHistory() {
			let initData = null
			if (this.webApp.initData) {
				initData = this.webApp.initData
			}
			let opts = {
				fantasy: true,
				page: 1,
				size: 10
			}
			this.betsApi.getUserBets(initData, opts)
				.then((res) => {
					console.log(res)
					this.SAVE_BETS_HISTORY(res)
				})
				.catch((err) => {
					console.log(err)
				})
		},
	},
	created() {
		if (this.webApp.initData)  {
			this.getBetsHistory()
		}
	},
}
</script>

<style scoped>

</style>