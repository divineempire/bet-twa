<template>
	<div class="header">
		<button class="header__close-btn"
			@click="closeApp"
		>
			Close
		</button>
		<router-link :to="{name: 'Test'}">to Test</router-link>
	</div>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {

		}
	},
	computed: {
		webApp() {
			return window.Telegram.WebApp
		}
	},
	methods: {
		closeApp() {
			this.webApp.close()
		}
	}
}

</script>

<style scoped>

</style>