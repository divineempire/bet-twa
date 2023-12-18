<template>
	<div class="container">
		<Wallet :tonConnectUi="tonConnectUi"/>
		<div class='main'>
			<router-view />
		</div>
		<NavBar />
	</div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Wallet from "@/components/Wallet.vue";
export default {
	name: 'Main',
	data() {
		return {

		}
	},
	props: {
		tonConnectUi: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	components: {
		Wallet,
		NavBar,
	},
	computed: {
		webApp() {
			return window.Telegram.WebApp
		}
	},
	// created() {
	// 	this.webApp.ready()
	// 	if (!this.webApp.isExpanded) {
	// 		this.webApp.expand()
	// 	}
	// }
}
</script>

<style scoped>
	.main {
		margin-bottom: 115px;
	}
</style>
