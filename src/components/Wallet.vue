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
			<div class="wallet__info"
				v-if="getRouteName === 'Profile'"
			>
				<p class="wallet__address">Connected: {{ GET_WALLET_INFO?.userFriendlyAddress }}</p>
				<button class="wallet__disconnect-btn"
					@click="disconnect"
				>
					Disconnect Wallet
				</button>
			</div>
			<div class="wallet__balance">
				<div class="wallet__main-balance">
					<p class="wallet__text">Основной счёт:</p>
					<p class="wallet__value">{{ getBalance || 0 }} TON</p>
				</div>
				<div class="wallet__fantasy-balance">
					<p class="wallet__text">Фентези счет:</p>
					<p class="wallet__value">{{ fantasyBalance || 0 }} Ф</p>
				</div>
			</div>
			<button class="wallet__gift-btn"
					:class="{ready_btn: getReadyReward}"
					v-if="getRouteName === 'Menu'"
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
			timeToFantasy: '',
			gift: {
				ready: false,
				time: '23:45:34'
			},
			testInitData: 'query_id=AAFDgKYkAAAAAEOApiSVumT0&user=%7B%22id%22%3A614891587%2C%22first_name%22%3A%22Andrey%22%2C%22last_name%22%3A%22Fedyaev%22%2C%22username%22%3A%22Rampagka%22%2C%22language_code%22%3A%22ru%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1703019267&hash=73357e7877fa7a66c2a42d84d976d34d5c03accc753065abf5226a44fedeb21e',
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
				return `Время до следующей награды ${this.timeToFantasy}`
			}
		},
		fantasyBalance() {
			return this.GET_USER_INFO?.balance
		},
		getBalance() {
			return this.GET_WALLET_INFO?.balance
		},
		getReadyReward() {
			let toRewardTime = this.GET_USER_INFO?.next_fantasy_reward * 1000
			let now = new Date(Date.now()).getTime()
			if (now >= toRewardTime) {
				return true
			} else {
				let time = toRewardTime - now
				this.timeToFantasy = (time / 3600000).toFixed(0) + 'ч'
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
		async disconnect() {
			try {
				await this.tonConnectUi.disconnect()
			} catch(err) {
				console.log(err)
				localStorage.removeItem('walletConnected')
				this.$router.push('/')
			}
		},
		grabReward() {
			// let initData = this.webApp.initData
			this.usersApi.grabReward(this.testInitData)
				.then((res) => {
					console.log(res)
					this.updateUserInfo()
				})
				.catch((err) => {
					console.log(err)
				})
		},
		updateUserInfo() {
			// let initData = this.webApp.initData
			this.usersApi.getCurrentUser(this.testInitData)
				.then((res) => {
					console.log(res)
					this.SAVE_USER_INFO(res)
				})
				.catch((err) => {
					console.error(err)
				})
		},
	},
	mounted() {
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
</style>