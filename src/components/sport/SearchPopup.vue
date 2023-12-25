<template>
	<div class="search">
		<div class="search__input-container">
			<label for="" class="search__label">
				<input inputmode='text' type="search" class="search__input" placeholder="Поиск событий" v-model="searchValue" @input="searchInput" id="search-input">
			</label>
			<button class="search__cancel-btn"
					@click="searchValue = ''"
			></button>
		</div>
		<p class="search__empty"
		   v-if="events.length === 0"
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
import MatchesApi from "/src/api/src/api/MatchesApi.js";

export default {
	name: "SearchPopup",
	components: {
		Coupon,
		EventCard
	},
	data() {
		return {
			searchValue: '',
			activeBet: '',
			successSearch: false,
			events: [],
			showPopup: false,
			debounce: null,
		}
	},
	props: {
		league: {
			type: String,
			default() {
				return ''
			}
		},
		sportId: {
			type: Number,
			default() {
				return null
			}
		}
	},
	computed: {
		webApp() {
			return window.Telegram.WebApp
		},
		matchesApi() {
			return new MatchesApi()
		},
		sortEventsByTime() {
			return this.events.sort((a, b) => a.match_start_time - b.match_start_time)
		},
		filteredEvents() {
			return this.sortEventsByTime.filter((item) => item.finished === false)
		}
	},
	methods: {
		searchInput() {
			clearTimeout(this.debounce);
			this.debounce = setTimeout(() => {
				if (this.searchValue.length > 0) {
					this.getMatches()
				}
			}, 700)
			if (this.searchValue.length === 0) {
				this.events = []
			}
		},
		getMatches() {
			let opts = {
				page: 1,
				size: 20,
				search: this.searchValue,
				sport_id: this.sportId
			}
			this.matchesApi.getMatches(opts)
				.then((res) => {
					this.events = res.items
				})
				.catch((err) => {
					console.log(err)
				})
		},
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
	},
	mounted() {
		let input = document.getElementById('search-input')
		input.focus()
	},
	unmounted() {
		clearTimeout(this.debounce);
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

.search__list {
	max-height: 100%;
	overflow-y: scroll;
	padding-bottom: 24px;
}

.search__empty {
	font-size: 18px;
	font-family: Roboto-Medium, sans-serif;
	opacity: 0.5;
}

</style>