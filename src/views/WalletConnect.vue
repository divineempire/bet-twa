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
						delay: 3000,
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
			<button class="wallet-connect__btn">Подключить кошелёк</button>
		</div>
	</div>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import lottie from 'lottie-web'
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
					text: 'Betty работает полностью на смартконтрактах, поэтому вам не надо пополнять свой кошелек, просто привяжите свой кошелек и делайте ставки из удобного интерфейса, получая удовольствие.'
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
					text: 'Надеюсь ты всё понял, тебе осталось привязать свой кошелек и начать зарабатывать\n' +
						'на любимом спорте с Betty!'
				}
			]
		}
	},
	components: {
		Swiper,
		SwiperSlide
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
		height: 100vh;
		max-width: 390px;
		width: 390px;
		margin: 0 auto;
		padding: 14px 14px 40px 14px;
	}

	.wallet-connect {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.wallet-connect__slider {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.item {
		width: 100%;
	}

	.lottie-image {
		margin-bottom: 14px;
		width: 362px;
		height: 362px;
	}

	.item__title {
		margin-bottom: 18px;
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
		width: 100%;
		padding: 16px;
		outline: none;
		border: none;
		border-radius: 10px;
		background: #00F59B;
		color: #141414;
		font-size: 15px;
		font-family: Roboto-Medium, sans-serif;
	}
</style>