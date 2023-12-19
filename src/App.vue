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
			testUserId: 614891587,
			testInitData: 'query_id=AAFDgKYkAAAAAEOApiSVumT0&user=%7B%22id%22%3A614891587%2C%22first_name%22%3A%22Andrey%22%2C%22last_name%22%3A%22Fedyaev%22%2C%22username%22%3A%22Rampagka%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1703019267&hash=73357e7877fa7a66c2a42d84d976d34d5c03accc753065abf5226a44fedeb21e',
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
		}
	},
	methods: {
		...mapActions([
			'SAVE_WALLET_INFO',
			'SAVE_TOURNAMENTS'
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
		saveWalletInfo(walletInfo) {
			walletInfo.userFriendlyAddress = toUserFriendlyAddress(walletInfo.account.address, true)
			localStorage.setItem('walletConnected', JSON.stringify(walletInfo.userFriendlyAddress))
			this.SAVE_WALLET_INFO(walletInfo)
		},
		async getTournaments() {
			// let opts = {
			// 	page: 1,
			// 	size: 20
			// }
			// this.tournamentsApi.getTournaments(opts)
			// 	.then((res) => {
			// 		this.SAVE_TOURNAMENTS(res)
			// 	})
			// 	.catch((err) => {
			// 		console.log(err)
			// 	})
			try {
				let opts = {
					page: 1,
					size: 20
				}
				let result = await this.tournamentsApi.getTournaments(opts)
				this.SAVE_TOURNAMENTS(result)
			} catch(err) {
				console.log(err)
			}
		},
		getCurrentUser() {
			this.usersApi.getCurrentUser(this.testInitData)
				.then((res) => {
					console.log(res)
				})
				.catch((err) => {
					if (err.error.status === 404) {
						this.setNewUser()
					}
					console.error(err)
				})
		},
		setNewUser() {
			// let userId = this.webApp.initDataUnsafe?.user?.id
			let obj = {
				telegram_user_id: this.testUserId
			}
			this.usersApi.createUser(this.testInitData, obj)
				.then((res) => {
					console.log(res)
				})
				.catch((err) => {
					console.error(err)
				})
		},
		setTwaOptions() {
			if (!this.webApp.isExpanded) {
				this.webApp.expand()
			}
			if (this.webApp.MainButton.isVisible) {
				this.webApp.MainButton.hide()
			}
			this.tonConnectUi.uiOptions = {
				twaReturnUrl: 'https://t.me/bettygames_bot'
			};
			this.webApp.ready()
		}
	},
	async created() {
		// if (this.webApp.initData) {
			this.getCurrentUser()
		// }
		await this.getTournaments()
		console.log('Турниры загружены')
		this.setTwaOptions()
		this.subscribeConnector()
	},
	mounted() {
	},
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
	max-width: 100%;
	width: 100%;
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
