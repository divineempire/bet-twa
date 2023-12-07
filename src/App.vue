<template>
	<router-view/>
</template>

<script>
export default {
	data() {

	},
	computed: {
		webApp() {
			return window.Telegram.WebApp
		}
	},
	created() {
		this.webApp.ready()
		if (!this.webApp.isExpanded) {
			this.webApp.expand()
		}
	}
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	color: #fff;
	font-family: sans-serif;
}

ul {
	list-style: none;
}

a {
	text-decoration: none;
}

body {
	background-color: #090909;
}

.container {
	max-width: 480px;
	width: 480px;
	margin: 0 auto;
	border: 1px solid #fff;
}

@media screen and (max-width: 600px) {
	.container {
		max-width: 100%;
		width: 100%;
		margin: 0 auto;
		padding: 4px;
	}
}
</style>
