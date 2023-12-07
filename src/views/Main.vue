<template>
	<div class="container">
		<Header />
		<div class='main'>
			<Sport />
<!--			<router-view />-->
		</div>
	</div>
</template>

<script>
import Sport from "@/components/Sport.vue";
import Header from "@/components/Header.vue";
export default {
	name: 'Main',
	data() {
		return {

		}
	},
	components: {
		Sport,
		Header
	},
	computed: {
		webApp() {
			return window.Telegram.WebApp
		}
	}
}
</script>

<style scoped>

</style>
