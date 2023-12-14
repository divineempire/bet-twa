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
		},
		getRouteName() {
			return this.$route.name
		}
	},
	methods: {
		callback(e) {
			window.history.back()
		}
	},
	created() {
		this.webApp.ready()
		if (!this.webApp.isExpanded) {
			this.webApp.expand()
		}
		if (this.webApp.MainButton.isVisible) {
			this.webApp.MainButton.hide()
		}
	},
	watch: {
		getRouteName: {
			handler() {
				let route = this.$route
				if (route.name === 'Profile' || route.name === 'History' || route.name === 'Bonus' || route.name === 'Notice') {
					if (!this.webApp.BackButton.isVisible) {
						this.webApp.BackButton.show()
						this.webApp.BackButton.onClick(this.callback)
					}
				} else {
					this.webApp.BackButton.offClick(this.callback)
					this.webApp.BackButton.hide()
				}
			}
		}
	}
}
</script>

<style>
@font-face {
	font-family: Roboto-Regular;
	src: url("~@/fonts/Roboto/Roboto-Regular.woff2") format("woff2"),
	url("~@/fonts/Roboto/Roboto-Regular.woff") format("woff");
	font-style: normal;
	font-weight: normal;
	font-display: fallback;
}

@font-face {
	font-family: Roboto-Medium;
	src: url("~@/fonts/Roboto/Roboto-Medium.woff2") format("woff2"),
	url("~@/fonts/Roboto/Roboto-Medium.woff") format("woff");
	font-style: normal;
	font-weight: normal;
	font-display: fallback;
}

@font-face {
	font-family: Roboto-Bold;
	src: url("~@/fonts/Roboto/Roboto-Bold.woff2") format("woff2"),
	url("~@/fonts/Roboto/Roboto-Bold.woff") format("woff");
	font-style: normal;
	font-weight: normal;
	font-display: fallback;
}

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

h1, h2, h3, h4 {
	font-family: Roboto-Medium, sans-serif;
	font-weight: 500;
}

li {
	font-family: Roboto-Regular, sans-serif;
}

a {
	text-decoration: none;
	font-family: Roboto-Regular, sans-serif;
	cursor: pointer;
}

p {
	font-family: Roboto-Regular, sans-serif;
}

button {
	font-family: Roboto-Regular, sans-serif;
	cursor: pointer;
}

body {
	background-color: #151317;
}

.container {
	max-width: 390px;
	width: 390px;
	margin: 0 auto;
	//border: 1px solid #fff;
	padding: 0 10px;
}

@media screen and (max-width: 600px) {
	.container {
		max-width: 100%;
		width: 100%;
		margin: 0 auto;
		padding: 0 10px;
	}
}
</style>
