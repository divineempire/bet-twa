<template>
	<div class="search">
		<div class="search__input-container">
			<label for="" class="search__label">
				<input type="search" class="search__input" placeholder="Поиск событий" v-model="searchValue">
			</label>
			<button class="search__cancel-btn"
					@click="searchValue = ''"
			></button>
		</div>
		<p class="search__empty"
		   v-if="filteredEvents.length === 0"
		>
			Поиск не дал результатов
		</p>
		<ul class="search__list">
			<EventCard
				v-for="(event, index) in filteredEvents"
				:key="index"
				:event="event"
				:league="league"
				:call="'SEARCH'"
			/>
		</ul>
	</div>
</template>

<script>
import EventCard from "@/components/sport/EventCard.vue";
import Coupon from "@/components/sport/Coupon.vue";

export default {
	name: "SearchPopup",
	components: {Coupon, EventCard},
	data() {
		return {
			searchValue: '',
			activeBet: '',
			successSearch: false,
			events: [
				{
					firstTeam: {
						name: 'Реал Мадрид',
						logo: 'https://raw.githubusercontent.com/divineempire/twa-image/master/team-logos/san-lorenzo-logo.png'
					},
					secondTeam: {
						name: 'Барселона',
						logo: 'https://raw.githubusercontent.com/divineempire/twa-image/master/team-logos/sentral-cordoba-logo.png'
					},
					date: 'Завтра',
					dateTime: '02:25',
					started: false,
					p1: {
						sum: 1500,
						coefficient: 1.34,
						percent: 43,
					},
					draw: {
						sum: 500,
						coefficient: 8.2,
						percent: 7,
					},
					p2: {
						sum: 2000,
						coefficient: 1.28,
						percent: 50
					}
				},
				{
					firstTeam: {
						name: 'Сан Лоренцо',
						logo: 'https://raw.githubusercontent.com/divineempire/twa-image/master/team-logos/san-lorenzo-logo.png'
					},
					secondTeam: {
						name: 'Сентраль Кордоба СдЕ',
						logo: 'https://raw.githubusercontent.com/divineempire/twa-image/master/team-logos/sentral-cordoba-logo.png'
					},
					date: 'Завтра',
					dateTime: '04:45',
					started: false,
					p1: {
						sum: 240,
						coefficient: 3.6,
						percent: 17,
					},
					draw: {
						sum: 1000,
						coefficient: 1.2,
						percent: 70,
					},
					p2: {
						sum: 190,
						coefficient: 4.7,
						percent: 13
					}
				}
			],
			showPopup: false,
		}
	},
	props: {
		league: {
			type: String,
			default() {
				return ''
			}
		}
	},
	computed: {
		webApp() {
			return window.Telegram.WebApp
		},
		filteredEvents() {
			if (this.searchValue.length === 0) {
				return []
			} else {
				return this.events.filter((item) => item.firstTeam.name.toUpperCase().includes(this.searchValue.toUpperCase()) || item.secondTeam.name.toUpperCase().includes(this.searchValue.toUpperCase()))
			}
		}
	},
	methods: {
		// closePopup() {
		// 	this.showPopup = false
		// 	this.activeBet = ''
		// 	this.webApp.BackButton.offClick(this.closePopup)
		// 	this.webApp.BackButton.hide()
		// },
		// chooseBet(value, index) {
		// 	this.activeBet = value + '_' + index
		// 	this.showPopup = true
		// 	if (!this.webApp.BackButton.isVisible) {
		// 		this.webApp.BackButton.show()
		// 		this.webApp.BackButton.onClick(this.closePopup)
		// 	}
		// },
	}
}
</script>

<style scoped>
.search {
	z-index: 999;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	padding: 10px 10px 80px 10px;
	background: #151317;
}

.search__input-container {
	width: 100%;
	position: relative;
}

.search__input {
	width: 100%;
	padding: 19px 14px;
	outline: none;
	margin-bottom: 24px;
	border: none;
	border-radius: 8px;
	background: #2D2B32;
	font-size: 15px;
	line-height: 18px;
}

.search__input::placeholder {
	color: #fff;
	opacity: 0.8;
}

.search__cancel-btn {
	z-index: 900;
	position: absolute;
	top: 19px;
	right: 14px;
	width: 18px;
	height: 18px;
	border: none;
	background: transparent url('~@/assets/sport/cancel.svg') no-repeat;
}

.search__empty {
	font-size: 18px;
	font-family: Roboto-Medium, sans-serif;
	opacity: 0.5;
}
</style>