<template>
<!--	<button id="connect-btn">Подключить кошелёк</button>-->
	<router-view :tonConnectUi="tonConnectUi" />
</template>

<script>
import { TonConnectUI, THEME , toUserFriendlyAddress} from '@tonconnect/ui'
import {mapActions} from "vuex";

export default {
	data() {
		return {
			tonConnectSettings: {
				manifestUrl: 'https://app.betty.games/tonconnect-manifest.json',
				uiPreferences: {
					// borderRadius: 'm',
					theme: THEME.DARK,
				}
			},
			unsubscribe: null
		}
	},
	computed: {
		webApp() {
			return window.Telegram.WebApp
		},
		getRouteName() {
			return this.$route.name
		},
		tonConnectUi() {
			return new TonConnectUI(this.tonConnectSettings)
		}
	},
	methods: {
		...mapActions([
			'SAVE_WALLET_INFO',
		]),
		callback(e) {
			window.history.back()
		},
		subscribeConnector: function () {
			this.unsubscribe = this.tonConnectUi.onStatusChange(walletInfo => {
				if (walletInfo === null) {
					console.log('disconnected wallet')
					localStorage.removeItem('walletConnected')
					this.$router.push({name: 'WalletConnect'})
					return
				}
				if (walletInfo) {
					console.log(walletInfo)
					this.$router.push({name: 'Main'})
					this.saveWalletInfo(walletInfo)
				}
			})
		},
		saveWalletInfo(walletInfo) {
			walletInfo.userFriendlyAddress = toUserFriendlyAddress(walletInfo.account.address, true)
			localStorage.setItem('walletConnected', JSON.stringify(walletInfo.userFriendlyAddress))
			this.SAVE_WALLET_INFO(walletInfo)
		}
	},
	created() {
		this.webApp.ready()
		if (!this.webApp.isExpanded) {
			this.webApp.expand()
		}
		console.log(this.webApp.MainButton.isVisible)
		if (this.webApp.MainButton.isVisible) {
			this.webApp.MainButton.hide()
		}
		this.subscribeConnector()
		this.tonConnectUi.uiOptions = {
			twaReturnUrl: 'https://t.me/bettygames_bot'
		};
	},
	unmounted() {
		if (this.unsubscribe !== null) {
			this.unsubscribe()
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

.swiper-pagination {
	display: flex;
	justify-content: center;
	gap: 0 6px;
	margin-top: 20px;
}

.dot {
	width: 8px;
	height: 8px;
	background-color: #4C4C4C;
	border-radius: 100px;
}

.dot_active {
	position: relative;
	width: 20px;
	overflow: hidden;
}

.dot_active::before {
	content: '';
	position: absolute;
	left: -20px;
	width: 20px;
	border-radius: 100px;
	bottom: 0;
	top: 0;
	background-color: #fff;
	animation: 3.5s forwards linear Progress;
}

@keyframes Progress {
	0% {
		left: -20px;
	}
	100% {
		left: 0;
	}
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
