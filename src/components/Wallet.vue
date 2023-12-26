<template>
	<div class="wallet"
		v-if="showWalletCondition"
	>
<!--		<div class="wallet__connect-info"-->
<!--			v-if="!connected"-->
<!--		>-->
<!--			<h1 class="wallet__app-name">Bets.coffee</h1>-->
<!--			<p class="wallet__description">Полностью децентрализованная биржа ставок. <br> Просто, анонимно и безопасно!</p>-->
<!--			<button class="wallet__connect-btn">Подключить кошелёк</button>-->
<!--		</div>-->
		<div class="wallet__connected"
			 v-if="connected"
		>
<!--			<div class="wallet__info"-->
<!--				v-if="getRouteName === 'Profile'"-->
<!--			>-->
<!--				<p class="wallet__address">Connected: {{ GET_WALLET_INFO?.userFriendlyAddress }}</p>-->
<!--				<button class="wallet__disconnect-btn"-->
<!--					@click="disconnect"-->
<!--				>-->
<!--					Disconnect Wallet-->
<!--				</button>-->
<!--			</div>-->
			<div class="wallet__balance">
				<div class="wallet__main-balance">
					<p class="wallet__text">Основной счёт:</p>
					<p class="wallet__value" v-show="!showSkeleton">{{ getBalance || 0 }} TON</p>
					<div class="skeleton anim-content" v-show="showSkeleton"></div>
				</div>
				<div class="wallet__fantasy-balance">
					<p class="wallet__text">Фентези счет:</p>
					<p class="wallet__value" v-show="!showSkeleton">{{ getFantasyBalance || 0 }} Ф</p>
					<div class="skeleton anim-content" v-show="showSkeleton"></div>
				</div>
			</div>
			<button class="wallet__gift-btn"
					:class="{ready_btn: getReadyReward}"
					v-if="getRouteName === 'Menu'"
					:disabled="getReadyReward === false"
					@click="grabReward"
			>
				{{ btnText }}
			</button>
		</div>
	</div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import UsersApi from "/src/api/src/api/UsersApi.js";

export default {
	name: "Wallet",
	data() {
		return {
			connected: true,
			timeToFantasy: null,
			showSkeleton: true
			// gift: {
			// 	ready: false,
			// 	time: '23:45:34'
			// },
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
	computed: {
		...mapGetters([
			'GET_WALLET_INFO',
			'GET_USER_INFO'
		]),
		webApp() {
			return window.Telegram.WebApp
		},
		usersApi() {
			return new UsersApi()
		},
		getRouteName() {
			return this.$route.name
		},
		showWalletCondition() {
			if (this.getRouteName === 'League' || this.getRouteName === 'History' || this.getRouteName === 'Notice' || this.getRouteName === 'Bonus') {
				return false
			} else {
				return true
			}
		},
		btnText() {
			if (this.getReadyReward) {
				return 'Забрать ежедневную награду'
			} else {
				return `Время до следующей награды ${this.timeToFantasy || 0}ч`
			}
		},
		getFantasyBalance() {
			if (this.GET_USER_INFO.balance) {
				return this.GET_USER_INFO?.balance
			} else {
				return 0
			}
		},
		getBalance() {
			if (this.GET_WALLET_INFO.balance) {
				return (this.GET_WALLET_INFO?.balance / Math.pow(10, 9)).toFixed(2)
			} else {
				return 0
			}
		},
		getReadyReward() {
			let toRewardTime = (this.GET_USER_INFO?.next_fantasy_reward || 0) * 1000
			let now = new Date(Date.now()).getTime()
			if (now >= toRewardTime) {
				return true
			} else {
				let time = toRewardTime - now
				if (time) {
					this.timeToFantasy = (time / 3600000).toFixed(0)
				}
				return false
			}
		},
		// getNextFantasyRewardTime() {
		// 	let nextFantasyReward = this.GET_USER_INFO?.next_fantasy_reward * 1000
		// 	let now = new Date(Date.now()).getTime()
		// 	if (now < nextFantasyReward) {
		// 		let time = nextFantasyReward - now
		// 		return time.getHours() + 'ч'
		// 	}
		// }
	},
	methods: {
		...mapActions([
			'SAVE_USER_INFO',
		]),
		// async disconnect() {
		// 	try {
		// 		await this.tonConnectUi.disconnect()
		// 	} catch(err) {
		// 		console.log(err)
		// 		localStorage.removeItem('walletConnected')
		// 		this.$router.push('/')
		// 	}
		// },
		grabReward() {
			let initData = null
			if (this.webApp.initData) {
				initData = this.webApp.initData
			}
			this.usersApi.grabReward(initData)
				.then((res) => {
					this.updateUserInfo()
				})
				.catch((err) => {
					console.log(err)
				})
		},
		updateUserInfo() {
			let initData = null
			if (this.webApp.initData) {
				initData = this.webApp.initData
			}
			this.usersApi.getCurrentUser(initData)
				.then((res) => {
					this.SAVE_USER_INFO(res)
				})
				.catch((err) => {
					console.error(err)
				})
		},
	},
	mounted() {
		setTimeout(() => {
			this.showSkeleton = false
		}, 700)
		// console.log(this.tonConnectUi)
	}
}
</script>

<style scoped>
	.wallet {
		padding: 14px 0;
	}

	.wallet__connect-info {
		//margin-bottom: 12px;
	}

	.wallet__app-name {
		font-size: 26px;
		line-height: 30px;
	}

	.wallet__description {
		font-size: 14px;
		margin-bottom: 12px;
	}

	.wallet__connect-btn {
		width: 100%;
		padding: 13.5px;
		border: none;
		outline: none;
		border-radius: 10px;
		background: #00F59B;
		color: #141414;
		font-size: 15px;
	}

	.wallet__balance {
		display: flex;
		flex-direction: column;
		border-radius: 8px;
		background: #28272B;
	}

	.wallet__info {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 12px;
	}

	.wallet__address {
		white-space: nowrap;
		max-width: 55%;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 13px;
	}

	.wallet__disconnect-btn {
		border: none;
		outline: none;
		background-color: transparent;
		color: #FF3B30;
		font-size: 13px;
	}

	.wallet__main-balance {
		padding: 10px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.10);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.wallet__fantasy-balance {
		padding: 10px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.wallet__text {
		font-size: 13px;
	}

	.wallet__value {
		font-size: 13px;
		font-family: Roboto-Medium, sans-serif;
		font-weight: 500;
	}

	.wallet__gift-btn {
		width: 100%;
		margin-top: 12px;
		margin-bottom: 14px;
		padding: 14.5px;
		border-radius: 10px;
		border: none;
		outline: none;
		background: #3F3C42;
		font-size: 14px;
		line-height: 16px;
	}

	.ready_btn {
		background: #00F59B;
		color: #000;
	}

	.skeleton {
		width: 40px;
		max-width: 40px;
		height: 15px;
		border-radius: 5px;
	}

	.anim-content::after {
		content: '';
		display: block;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(to top right, #58585a 0%, rgba(67, 67, 66, 0.1) 15%, #58585a 30%, rgba(67, 67, 66, 0.1) 45%, #58585a 60%, rgba(67, 67, 66, 0.1) 75%, #58585a 100%);
		background-repeat: no-repeat;
		background-size: 800px 398px;
		animation: Shimmer 8s linear infinite;
		border-radius: 5px;
	}

	@keyframes Shimmer {
		0% {
			background-position: -650px -150px;
		}
		25% {
			background-position: 0 0;
		}
		50% {
			background-position: -650px -150px;
		}
		75% {
			background-position: 0 0;
		}
		100%{
			background-position: -650px -150px;
		}
	}
</style>