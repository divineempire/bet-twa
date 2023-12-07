<template>
	<div class="sport">
		<div class="sport__choose-league">
			<button class="sport__choose-btn regular-btn"
					:class="{active_btn: league === 'REGULAR'}"
					@click="chooseLeague('REGULAR')"
			>
				Обычная
			</button>
			<button class="sport__choose-btn fantasy-btn"
					:class="{active_btn: league === 'FANTASY'}"
					@click="chooseLeague('FANTASY')"
			>
				Фэнтези
			</button>
		</div>
		<div class="sport__search">
			<input type="search" class="sport__search-input" placeholder="Введите название события или турнира">
		</div>
		<SportNavigation />
	</div>
</template>

<script>
import SportNavigation from "@/components/SportNavigation.vue";
export default {
	name: 'Sport',
	data() {
		return {
			league: 'REGULAR',
		}
	},
	components: {
		SportNavigation,
	},
	methods: {
		chooseLeague(value) {
			this.league = value
		},
	}
}
</script>

<style scoped>

.sport__choose-league {
	padding: 14px 10px;
}

.sport__choose-btn {
	transition: .2s;
	border: none;
	outline: none;
	background: transparent;
	font-size: 18px;
	font-weight: 500;
	line-height: 21px;
	opacity: 0.5;
}

.active_btn {
	opacity: 1;
}

.regular-btn {
	margin-right: 16px;
}

.sport__search {
	padding: 0 10px;
}

.sport__search-input {
	width: 100%;
	height: 44px;
	margin-bottom: 6px;
	padding: 10px 14px;
	border-radius: 12px;
	border: none;
	outline: none;
	background: rgba(255, 255, 255, 0.15);
	font-size: 13px;
	color: #fff;
}

.sport__search-input::placeholder {
	color: #fff;
}

.sport__search-input::before {
	content: '';
	display: block;
	width: 22px;
	height: 22px;
	background: url('@/assets/sport/search-icon.svg') no-repeat;
}

input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
	display: none;
}

</style>