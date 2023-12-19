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
import {mapActions} from "vuex";

export default {
	name: "Menu",
	components: {
		MenuNav
	},
	data() {
		return {
			testInitData: 'query_id=AAFDgKYkAAAAAEOApiSVumT0&user=%7B%22id%22%3A614891587%2C%22first_name%22%3A%22Andrey%22%2C%22last_name%22%3A%22Fedyaev%22%2C%22username%22%3A%22Rampagka%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1703019267&hash=73357e7877fa7a66c2a42d84d976d34d5c03accc753065abf5226a44fedeb21e',
		}
	},
	computed: {
		getRouteName() {
			return this.$route.name
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
			let opts = {
				fantasy: true,
				page: 1,
				size: 10
			}
			this.betsApi.getUserBets(this.testInitData, opts)
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
		// if (this.webApp.initData)  {
			this.getBetsHistory()
		// }
	},
}
</script>

<style scoped>

</style>