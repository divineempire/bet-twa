<template>
	<div class="notice">
		<div class="notice__settings-btn"
			@click="openSettings"
		>
			<p class="btn-text">Настроить уведомления</p>
			<div class="btn-icon"></div>
		</div>
		<h3 class="notice__caption">Уведомления</h3>
		<ul class="notice__list">
			<li class="notice__item"
				v-for="(item, index) in notices"
				:key="index"
			>
				<h4 class="notice__title">{{ item.title }}</h4>
				<p class="notice__text">{{ item.text }}</p>
				<p class="notice__date">{{ item.date }}</p>
			</li>
		</ul>
		<NoticeSettings
			v-if="showSettings"
		/>
	</div>
</template>

<script>
import NoticeSettings from "@/components/menu/NoticeSettings.vue";

export default {
	name: "Notice",
	components: {
		NoticeSettings
	},
	data() {
		return {
			showSettings: false,
			notices: [
				{
					title: '🔥⚽️ ПСЖ – Ньюкасл',
					text: '1.67 | 4.08 | 5.17 👈 Дома «Ньюкасл» обыграл парижан – 4:1! Сможет ли «ПСЖ» взять реванш? Заходи в линию и делай ставку 👍',
					date: 'Вчера / 21:02'
				},
				{
					title: '⚽️ Лацио – Селтик',
					text: '1.6 | 4.22 | 5.71 👈 «Лацио» борется за выход в плей-офф! Обыграют дома аутсайдера группы? Заходи в линию и ставь на матч 👌',
					date: 'Вчера / 19:27'
				},
				{
					title: '⚽️ Балтика – Локомотив',
					text: '2.69 | 3.09 | 2.87 👈 «Локо» в неплохой форме и проиграл лишь 1 матч из последних 10. Как сыграют в Калиниграде в плей-офф Кубка? Делай ставку в линии 👍',
					date: 'Вчера / 16:51'
				},
				{
					title: 'Ставка сыграла 👍',
					text: 'По ставке Сан Лоренцо - Сентраль Кордоба СдЕ ты выиграл 720 руб.',
					date: 'Вчера / 02:57'
				}
			]
		}
	},
	methods: {
		openSettings() {
			console.log('open settings')
			this.showSettings = true
		}
	}
}
</script>

<style scoped>
	.notice {
		padding: 14px 0;
		position: relative;
	}

	.notice__settings-btn {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin-bottom: 12px;
		padding: 11px 14px;
		border-radius: 8px;
		background: #3F3C42;
		cursor: pointer;
	}

	.btn-text {
		font-size: 14px;
		line-height: 16px;
	}

	.btn-icon {
		width: 22px;
		height: 22px;
		background: url('@/assets/menu/settings.svg');
	}

	.notice__caption {
		padding: 5px 16px;
		font-size: 13px;
		font-family: Roboto-Regular, sans-serif;
		text-transform: uppercase;
		color: #8E8E93;
	}

	.notice__list {
		display: flex;
		flex-direction: column;
		gap: 8px 0;
	}

	.notice__item {
		padding: 12px;
		border-radius: 8px;
		background: #28272B;
	}

	.notice__title {
		margin-bottom: 8px;
		font-size: 16px;
		line-height: 19px;
	}

	.notice__text {
		margin-bottom: 8px;
		font-size: 14px;
		line-height: 16px;
	}

	.notice__date {
		font-size: 10px;
		line-height: 12px;
		opacity: 0.8;
	}
</style>