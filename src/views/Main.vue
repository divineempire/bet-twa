<template>
	<div class="container">
<!--		<Header />-->
		<Wallet />
		<div class='main'>
			<router-view />
		</div>
		<NavBar />
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import NavBar from "@/components/NavBar.vue";
import Wallet from "@/components/Wallet.vue";
export default {
	name: 'Main',
	data() {
		return {

		}
	},
	components: {
		Wallet,
		NavBar,
		Header
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
