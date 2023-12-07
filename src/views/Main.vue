<template>
	<div class='main'>
		<div class="container">
			<Sport />
<!--			<router-view />-->
		</div>
	</div>
</template>

<script>
import Sport from "@/components/Sport.vue";
export default {
	name: 'Main',
	data() {
		return {

		}
	},
	components: {
		Sport
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
