<template>
	<div class="history">
		<BetStats/>
		<div class="history__main">
			<h3 class="history__caption">История ставок</h3>
			<div class="history__button-block">
				<button class="history__choose-btn"
						:class="{active_btn: historyMode === 'UNCALCULATED'}"
						@click="historyMode = 'UNCALCULATED'"
				>
					Нерассчитанные
				</button>
				<button class="history__choose-btn"
						:class="{active_btn: historyMode === 'CALCULATED'}"
						@click="historyMode = 'CALCULATED'"
				>
					Рассчитанные
				</button>
			</div>
			<ul class="history__list"
				v-if="historyMode === 'UNCALCULATED'"
			>
				<BetsHistoryCard
					v-for="(item, index) in filterUncalculated"
					:key="index"
					:card="item"
					@cancelBet="cancelBet"
				/>
				<li class="empty-card"
					v-if="filterUncalculated.length === 0 && loadedHistory"
				>
					<p class="empty-text">У вас нет нерассчитанных ставок</p>
				</li>
				<li class="event-list__item skeleton"
					v-if="filterUncalculated.length === 0 && !loadedHistory"
				>
					<SkeletonHistoryCard
						v-for="(item, index) in 3"
						:key="index"
					/>
				</li>
			</ul>
			<ul class="history__list"
				v-if="historyMode === 'CALCULATED'"
			>
				<BetsHistoryCard
					v-for="(item, index) in filterCalculated"
					:key="index"
					:card="item"
				/>
				<li class="empty-card"
					v-if="filterCalculated.length === 0 && loadedHistory"
				>
					<p class="empty-text">У вас нет рассчитанных ставок</p>
				</li>
				<li class="event-list__item skeleton"
					v-if="filterCalculated.length === 0 && !loadedHistory"
				>
					<SkeletonHistoryCard
						v-for="(item, index) in 3"
						:key="index"
					/>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import BetStats from "@/components/menu/BetStats.vue";
import BetsHistoryCard from "@/components/menu/BetsHistoryCard.vue";
import { mapActions, mapGetters } from "vuex";
import BetsApi from "../../api/src/api/BetsApi";
import UsersApi from "../../api/src/api/UsersApi";
import SkeletonHistoryCard from "@/components/menu/SkeletonHistoryCard.vue";

export default {
	name: "BetsHistory",
	components: {
		SkeletonHistoryCard,
		BetsHistoryCard,
		BetStats
	},
	data() {
		return {
			historyMode: 'UNCALCULATED',
			loadedHistory: false,
			history: [
				{
					category: 'DOTA',
					status: 'WAIT',
					date: '28.12.2023',
					datetime: '12:15',
					betType: 'Исход матча: П2',
					coefficient: 2,
					betAmount: '200 TON',
					possibleWin: '380 TON',
					feeWithWin: '5 TON',
					smartContract: '0xbede493b71edca82b3b24de407aba5445341ce907',
					first: {
						name: 'Natus Vincere',
						result: 1
					},
					second: {
						name: 'Yellow Submarine',
						result: 2
					}
				},
				{
					category: 'DOTA',
					status: 'WAIT',
					date: '28.12.2023',
					datetime: '17:30',
					betType: 'Исход матча: П1',
					coefficient: 3,
					betAmount: '150 TON',
					possibleWin: '425 TON',
					feeWithWin: '5 TON',
					smartContract: '0xbede493b71edca82b3b24de407aba5445341ce907',
					first: {
						name: 'BetBoom Team',
						result: 1
					},
					second: {
						name: 'Team Spirit',
						result: 1
					}
				},
				{
					category: 'DOTA',
					status: 'WAIT',
					date: '28.12.2023',
					datetime: '17:30',
					betType: 'Исход матча: Ничья',
					coefficient: 2.1,
					betAmount: '55 TON',
					possibleWin: '100 TON',
					feeWithWin: '5 TON',
					smartContract: '0xbede493b71edca82b3b24de407aba5445341ce907',
					first: {
						name: 'Tundra',
						result: 1
					},
					second: {
						name: '9Pandas',
						result: 1
					}
				},
				{
					category: 'DOTA',
					status: 'WIN',
					date: '11.12.2023',
					datetime: '11:30',
					betType: 'Исход матча: П1',
					coefficient: 2.2,
					betAmount: '150 TON',
					possibleWin: '300 TON',
					feeWithWin: '5 TON',
					smartContract: '0xbede493b71edca82b3b24de407aba5445341ce907',
					first: {
						name: 'BetBoom Team',
						result: 2
					},
					second: {
						name: 'Team Spirit',
						result: 1
					}
				},
				{
					category: 'DOTA',
					status: 'LOSE',
					date: '10.12.2023',
					datetime: '17:30',
					betType: 'Исход матча: П2',
					coefficient: 3.5,
					betAmount: '60 TON',
					possibleWin: '180 TON',
					feeWithWin: '5 TON',
					smartContract: '0xbede493b71edca82b3b24de407aba5445341ce907',
					first: {
						name: 'Tundra',
						result: 2
					},
					second: {
						name: '9Pandas',
						result: 1
					}
				}
			]
		}
	},
	computed: {
		...mapGetters([
			'GET_BETS_HISTORY',
		]),
		webApp() {
			return window.Telegram.WebApp
		},
		betsApi() {
			return new BetsApi()
		},
		usersApi() {
			return new UsersApi()
		},
		filterUncalculated() {
			// return this.history.filter((item) => item.status === 'WAIT')
			if (this.GET_BETS_HISTORY?.items) {
				return this.GET_BETS_HISTORY.items.filter((item) => item.win_amount === null)
			} else {
				return []
			}
		},
		filterCalculated() {
			// return this.history.filter((item) => item.status !== 'WAIT')
			if (this.GET_BETS_HISTORY?.items) {
				return this.GET_BETS_HISTORY.items.filter((item) => item.win_amount !== null)
			} else {
				return []
			}
		}
	},
	methods: {
		...mapActions([
			'SAVE_BETS_HISTORY',
			'SAVE_USER_INFO'
		]),
		cancelBet(card) {
			let initData = null
			if (this.webApp.initData) {
				initData = this.webApp.initData
			}
			this.betsApi.cancelBet(card?.id, initData)
				.then((res) => {
					console.log(res)
					this.updateUserInfo()
					this.getBetsHistory()
				})
				.catch((err) => {
					console.log(err)
				})
			// console.log('cancel')
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
		getBetsHistory() {
			let initData = null
			if (this.webApp.initData) {
				initData = this.webApp.initData
			}
			let opts = {
				fantasy: true,
				page: 1,
				size: 15
			}
			this.betsApi.getUserBets(initData, opts)
				.then((res) => {
					this.SAVE_BETS_HISTORY(res)
					setTimeout(() => {
						if (this.loadedHistory === false) {
							this.loadedHistory = true
						}
					},1000)
				})
				.catch((err) => {
					console.error(err)
					setTimeout(() => {
						if (this.loadedHistory === false) {
							this.loadedHistory = true
						}
					},1000)
				})
		}
	},
	created() {
		if (this.webApp.initData)  {
			this.getBetsHistory()
		}
	}
}
</script>

<style scoped>
.history__main {
	padding: 14px 0;
}

.history__caption {
	font-size: 26px;
	margin-bottom: 12px;
}

.history__button-block {
	display: flex;
	align-items: center;
	margin-bottom: 12px;
	padding: 2px 3px;
	border-radius: 9px;
	background: #28272B;
}

.history__choose-btn {
	flex: 50%;
	padding: 6px 6px 7px 6px;
	border: none;
	border-radius: 7px;
	outline: none;
	background-color: transparent;
	font-size: 13px;
	line-height: 15px;
	font-family: Roboto-Medium, sans-serif;
	font-weight: 500;
}

.active_btn {
	background: rgba(255, 255, 255, 0.35);
	box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.04), 0 3px 8px 0 rgba(0, 0, 0, 0.12);
}

.history__list {
	display: flex;
	flex-direction: column;
	gap: 8px 0;
}

.empty-card {
	padding: 50px 0;
}

.empty-text {
	font-size: 20px;
	text-align: center;
}

</style>