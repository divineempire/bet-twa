<template>
<!--	<button id="connect-btn">Подключить кошелёк</button>-->
	<router-view :tonConnectUi="tonConnectUi" />
</template>

<script>
import { TonConnectUI, THEME , toUserFriendlyAddress} from '@tonconnect/ui'
import {mapActions} from "vuex";
import TournamentsApi from '/src/api/src/api/TournamentsApi.js'
import MatchesApi from "/src/api/src/api/MatchesApi.js";
import UsersApi from "/src/api/src/api/UsersApi.js";
import RatingApi from "/src/api/src/api/RatingApi.js";
import TonAPIApi from "/src/api/src/api/TonAPIApi.js";

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
			unsubscribe: null,
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
		},
		tournamentsApi() {
			return new TournamentsApi()
		},
		matchesApi() {
			return new MatchesApi()
		},
		usersApi() {
			return new UsersApi()
		},
		ratingApi() {
			return new RatingApi()
		},
		tonApi() {
			return new TonAPIApi()
		}
	},
	methods: {
		...mapActions([
			'SAVE_WALLET_INFO',
			'SAVE_USER_INFO',
			'SAVE_FOOTBALL_TOURNAMENTS',
			'SAVE_LEAGUES',
			// 'SAVE_USER_FANTASY_INFO'
		]),
		callback(e) {
			window.history.back()
		},
		subscribeConnector: function () {
			this.unsubscribe = this.tonConnectUi.onStatusChange(walletInfo => {
				if (walletInfo === null) {
					// console.log('disconnected wallet')
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
		async saveWalletInfo(walletInfo) {
			try {
				walletInfo.userFriendlyAddress = toUserFriendlyAddress(walletInfo.account.address)
				localStorage.setItem('walletConnected', JSON.stringify(walletInfo.userFriendlyAddress))
				let info = await this.getWalletBalance(walletInfo?.account?.address)
				walletInfo.balance = info?.balance
				this.SAVE_WALLET_INFO(walletInfo)
			} catch(err) {
				console.error(err)
			}
		},
		async getWalletBalance(address) {
			try {
				return await this.tonApi.accountInfo(address)
			} catch(err) {
				throw(err)
			}
		},
		async getFootballTournaments() {
			try {
				let opts = {
					page: 1,
					size: 20,
					// top: true,
					sport_id: 18
				}
				let result = await this.tournamentsApi.getTournaments(opts)
				this.SAVE_FOOTBALL_TOURNAMENTS(result)
			} catch(err) {
				console.log(err)
			}
		},
		getCurrentUser() {
			let initData = null
			if (this.webApp.initData) {
				initData = this.webApp.initData
			}
			console.log(initData, 'getCurrentUser App.vue')
			this.usersApi.getCurrentUser(initData)
				.then((res) => {
					// console.log(res)
					this.SAVE_USER_INFO(res)
				})
				.catch((err) => {
					if (err.error.status === 404) {
						this.setNewUser()
					}
					console.error(err)
				})
		},
		setNewUser() {
			let initData = null
			let userId = null
			if (this.webApp.initData) {
				initData = this.webApp.initData
			}
			if (this.webApp.initDataUnsafe.user) {
				userId = this.webApp.initDataUnsafe?.user?.id
			}
			console.log(userId, initData, 'setNewUser App.vue')
			let obj = {
				telegram_user_id: userId
			}
			this.usersApi.createUser(initData, obj)
				.then((res) => {
					console.log(res)
				})
				.catch((err) => {
					console.error(err)
				})
		},
		async getAllLeagues() {
			try {
				let result = await this.ratingApi.getLeagues({page: 1, size: 10})
				this.SAVE_LEAGUES(result)
			} catch(err) {
				console.log(err)
			}
		},
		setTwaOptions() {
			if (!this.webApp.isExpanded) {
				this.webApp.expand()
				this.webApp.setHeaderColor('#151317')
				this.webApp.setBackgroundColor('#151317')
				this.webApp.enableClosingConfirmation()
			}
			if (this.webApp.MainButton.isVisible) {
				this.webApp.MainButton.hide()
			}
			this.tonConnectUi.uiOptions = {
				twaReturnUrl: 'https://t.me/bettygames_bot/betty'
			};
			this.webApp.ready()
		},
	},
	async created() {
		// console.log(this.webApp.initData)
		if (this.webApp.initData) {
			this.getCurrentUser()
		}
		this.subscribeConnector()
		await this.getFootballTournaments()
		await this.getAllLeagues()
		console.log('Турниры загружены')
		this.setTwaOptions()
	},
	// mounted() {
	// },
	unmounted() {
		if (this.unsubscribe !== null) {
			this.unsubscribe()
		}
		localStorage.removeItem('walletConnected')
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
	animation: 6.5s forwards linear Progress;
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
	max-width: 100%;
	width: 100%;
	margin: 0 auto;
	padding: 0 10px;
}

::selection {
	background: transparent;
}
::-moz-selection {
	background: transparent;
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
