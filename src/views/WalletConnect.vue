<template>
	<div class="wallet-container">
		<div class="wallet-connect">
			<swiper class="wallet-connect__slider"
					:loop="true"
					:simulateTouch="false"
					:speed="500"
					:loopedSlides="5"
					:modules="modules"
					:autoplay="{
						delay: 6000,
					}"
					:pagination="pagination"
			>
				<swiper-slide class="item"
					v-for="(item, index) in slides"
				>
					<div class="lottie-image" :id="'lottie_' + (index + 1) "></div>
					<p class="item__title">{{ item.title }}</p>
					<p class="item__text">{{ item.text }}</p>
					<p class="item__second-text">{{ item?.secondText }}</p>
				</swiper-slide>
			</swiper>
<!--			<button class="wallet-connect__btn"-->
<!--				@click="connectWallet"-->
<!--			>-->
<!--				Подключить кошелёк-->
<!--			</button>-->
				<button class="wallet-connect__btn"
					@click="setNewUser"
				>
					Начать
				</button>
		</div>
	</div>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import lottie from 'lottie-web'
import UsersApi from "/src/api/src/api/UsersApi.js";
export default {
	name: "WalletConnect",
	setup() {

		return {
			modules: [Autoplay, Pagination],
			pagination: {
				clickable: false,
				bulletClass: 'dot',
				bulletActiveClass: 'dot_active',
				renderBullet: function (index, className) {
					return '<div class="' + className + '"></div>';
				},
			},
		};
	},
	props: {
		tonConnectUi: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	data() {
		return {
			slides: [
				{
					link: 'https://raw.githubusercontent.com/divineempire/twa-image/master/lottie/first-lottie.json',
					title: 'Приветствуем тебя в Betty! ',
					text: 'Betty - децентрализованная биржа ставок, позволяющая делать ставки на лучшие события спорта и зарабатывать на этом.'
				},
				{
					link: 'https://raw.githubusercontent.com/divineempire/twa-image/master/lottie/second-lottie.json',
					title: 'Betty это безопасно ',
					text: 'Betty работает полностью на смарт-контрактах. Пополняете свой баланс и делайте ставки из удобного интерфейса, получая удовольствие.'
					// text: 'Betty работает полностью на смартконтрактах, поэтому вам не надо пополнять свой кошелек, просто привяжите свой кошелек и делайте ставки из удобного интерфейса, получая удовольствие.'
				},
				{
					link: 'https://raw.githubusercontent.com/divineempire/twa-image/master/lottie/third-lottie.json',
					title: 'Betty это бесплатно ',
					text: 'Если ты еще не уверен в своих силах,\n' +
						'ты всегда можешь попробовать свои силы\n' +
						'в нашей фентези лиге, где ставки - бесплатны.'
				},
				{
					link: 'https://raw.githubusercontent.com/divineempire/twa-image/master/lottie/fourth-lottie.json',
					title: 'Betty это выгодно',
					text: 'Делая даже бесплатные ставки на Betty,\n' +
						'вы получаете возможность выиграть ценные призы, исходя из вашего места в лиге.',
					secondText: 'В платной лиге - призы более ценные.'
				},
				{
					link: 'https://raw.githubusercontent.com/divineempire/twa-image/master/lottie/fifth-lottie.json',
					title: 'Удачи!',
					text: `Надеюсь ты все понял,\nосталось лишь нажать кнопку "Начать"\nи погрузится в мир Betty!`
				}
			]
		}
	},
	components: {
		Swiper,
		SwiperSlide
	},
	computed: {
		webApp() {
			return window.Telegram.WebApp
		},
		usersApi() {
			return new UsersApi()
		}
	},
	methods: {
		setNewUser() {
			let initData = null
			let userId = null
			if (this.webApp.initData) {
				initData = this.webApp.initData
			}
			if (this.webApp.initDataUnsafe.user) {
				userId = this.webApp.initDataUnsafe?.user?.id
			}
			let obj = {
				telegram_user_id: userId
			}
			this.usersApi.createUser(initData, obj)
				.then((res) => {
					this.getCurrentUser()
				})
				.catch((err) => {
					console.error(err)
					if (err.error.status === 409) {
						this.getCurrentUser()
					}
				})
		},
		getCurrentUser() {
			let initData = null
			if (this.webApp.initData) {
				initData = this.webApp.initData
			}
			console.log(initData, 'getCurrentUser App.vue')
			this.usersApi.getCurrentUser(initData)
				.then((res) => {
					this.SAVE_USER_INFO(res)
					localStorage.setItem('userAuth', JSON.stringify(true))
					this.$router.push({name: 'Main'})
				})
				.catch((err) => {
					console.error(err)
				})
		},
		// connectWallet() {
		// 	this.tonConnectUi.openModal()
		// 	if (!this.webApp.BackButton.isVisible) {
		// 		this.webApp.BackButton.show()
		// 		this.webApp.BackButton.onClick(this.closeModal)
		// 	}
		// },
		// closeModal() {
		// 	this.tonConnectUi.closeModal()
		// 	this.webApp.BackButton.offClick(this.closeModal)
		// 	this.webApp.BackButton.hide()
		// }
	},
	mounted() {
		lottie.loadAnimation({
			container: document.getElementById('lottie_1'), // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			name: 'first',
			path: 'https://raw.githubusercontent.com/divineempire/twa-image/master/lottie/first-lottie.json'
		});

		lottie.loadAnimation({
			container: document.getElementById('lottie_2'), // the dom element that will contain the firstation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			name: 'second',
			path: 'https://raw.githubusercontent.com/divineempire/twa-image/master/lottie/second-lottie.json'
		});

		lottie.loadAnimation({
			container: document.getElementById('lottie_3'), // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			name: 'third',
			path: 'https://raw.githubusercontent.com/divineempire/twa-image/master/lottie/third-lottie.json'
		});

		lottie.loadAnimation({
			container: document.getElementById('lottie_4'), // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			name: 'fourth',
			path: 'https://raw.githubusercontent.com/divineempire/twa-image/master/lottie/fourth-lottie.json'
		});

		lottie.loadAnimation({
			container: document.getElementById('lottie_5'), // the dom element that will contain the animation
			renderer: 'svg',
			loop: true,
			autoplay: true,
			name: 'fifth',
			path: 'https://raw.githubusercontent.com/divineempire/twa-image/master/lottie/fifth-lottie.json'
		});
	}
}
</script>

<style scoped>
	.wallet-container {
		position: relative;
		height: auto;
		max-width: 100%;
		width: 100%;
		margin: 0 auto;
		padding: 14px 14px 40px 14px;
	}

	.wallet-connect {
		//min-height: 600px;
		//height: 91vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.wallet-connect__slider {
		margin-bottom: 80px;
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.item {
		width: 100%;
	}

	.lottie-image {
		margin: 0 auto 0 auto;
		max-width: 320px;
		max-height: 320px;
		width: 100%;
		height: calc(100vw - 28px);
	}

	.item__title {
		margin-bottom: 16px;
		text-align: center;
		font-size: 24px;
		font-family: Roboto-Medium, sans-serif;
	}

	.item__text {
		//margin-bottom: 22px;
		text-align: center;
		font-size: 15px;
		line-height: 18px;
		height: 72px;
		white-space: pre-wrap;
	}

	.item__second-text {
		text-align: center;
		font-size: 15px;
		line-height: 18px;
		height: 22px;
	}

	.dot {
		width: 8px;
		height: 8px;
		background-color: #4C4C4C;
		border-radius: 100px;
	}

	.dot_active {
		width: 20px;
		background-color: #fff;
	}

	.wallet-connect__btn {
		position: fixed;
		z-index: 100;
		bottom: 20px;
		left: 10px;
		width: calc(100% - 20px);
		padding: 13px;
		outline: none;
		border: none;
		border-radius: 10px;
		background: #00F59B;
		color: #141414;
		font-size: 15px;
		font-family: Roboto-Medium, sans-serif;
	}
</style>