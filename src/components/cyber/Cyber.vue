<template>
	<div class="cybersport">
		<div class="cybersport__choose-league">
			<button class="cybersport__choose-btn regular-btn"
					:class="{active_btn: league === 'REGULAR'}"
					@click="chooseLeague('REGULAR')"
			>
				Обычная
			</button>
			<button class="cybersport__choose-btn fantasy-btn"
					:class="{active_btn: league === 'FANTASY'}"
					@click="chooseLeague('FANTASY')"
			>
				Фэнтези
			</button>
		</div>
		<div class="cybersport__content soon">
			<button type="button" class="cybersport__search-btn"
					@click="openSearch"
			>
				Введите название события или турнира
			</button>
			<CyberNavigation />
			<!--		<router-view-->
			<!--			:league="league"-->
			<!--		/>-->
			<SearchPopup
				v-show="showSearch"
			/>
			<transition name="fade">
				<div class="coming-soon">
					<div class="coming-soon__lottie" id="coming-soon"></div>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
import SearchPopup from "@/components/sport/SearchPopup.vue";
import CyberNavigation from "@/components/cyber/CyberNavigation.vue";
import lottie from "lottie-web";

export default {
	name: "Cyber",
	data() {
		return {
			league: 'FANTASY',
			showSearch: '',
		}
	},
	components: {
		CyberNavigation, SearchPopup
	},
	methods: {
		chooseLeague(value) {
			this.league = value
		},
		closeSearch() {
			this.showSearch = false
			this.webApp.BackButton.offClick(this.closeSearch)
			this.webApp.BackButton.hide()
		},
		openSearch() {
			this.showSearch = true
			if (!this.webApp.BackButton.isVisible) {
				this.webApp.BackButton.show()
				this.webApp.BackButton.onClick(this.closeSearch)
			}
		},
	},
	mounted() {
		lottie.loadAnimation({
			container: document.getElementById('coming-soon'), // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			name: 'soon',
			path: 'https://raw.githubusercontent.com/divineempire/twa-image/master/lottie/coming-soon.json'
		});
	}
}
</script>

<style scoped>
.fade-enter-active {
	transition: .5s linear;
//transform-origin: bottom;
}

.fade-leave-active {
	transition: 0s linear;
}

.fade-enter-from, .fade-leave-to {
	opacity: 0;
}

.cybersport__choose-league {
	padding: 14px 0;
}

.cybersport__choose-btn {
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

.cybersport__search-btn {
	display: flex;
	align-items: center;
	width: 100%;
	height: 44px;
	margin-bottom: 6px;
	padding: 10px 14px;
	border-radius: 12px;
	border: none;
	outline: none;
	background: #3F3C42;
	font-size: 13px;
	color: rgba(255,255,255, .8);
}

.cybersport__search-btn::before {
	content: '';
	display: block;
	margin-right: 10px;
	width: 22px;
	height: 22px;
	background: url('@/assets/sport/search-icon.svg') no-repeat;
}

.cybersport__championship-list {
//margin-bottom: ;
	display: flex;
	flex-direction: column;
	gap: 6px 0;
}

.soon {
	position: relative;
	padding-bottom: calc(100vh - (390px));
}

.coming-soon {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: -5px;
	left: -10px;
	right: -10px;
	bottom: -5px;
	background: rgba(21, 19, 23, 0.80);
	backdrop-filter: blur(5px);
}

.coming-soon__lottie {
	width: 274px;
	height: 180px;
}
</style>