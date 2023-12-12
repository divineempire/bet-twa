<template>
	<div class="settings">
		<h3 class="settings__caption">Настройка уведомлений</h3>
		<h4 class="settings__title">Новости</h4>
		<ul class="settings__list">
			<li class="settings__item">
				<p class="settings__name">Анонсы событий</p>
				<div class="settings__switch-btn"
					@click="activeSwitch(1)"
					 :class="{active_switch: active.includes(1)}"
				>
					<div class="switch-toggle"></div>
				</div>
			</li>
			<li class="settings__item">
				<p class="settings__name">Анонсы акций и бонусных программ</p>
				<div class="settings__switch-btn"
					@click="activeSwitch(2)"
					 :class="{active_switch: active.includes(2)}"
				>
					<div class="switch-toggle"></div>
				</div>
			</li>
			<li class="settings__item">
				<p class="settings__name">Информация о новых лигах</p>
				<div class="settings__switch-btn"
					@click="activeSwitch(3)"
					 :class="{active_switch: active.includes(3)}"
				>
					<div class="switch-toggle"></div>
				</div>
			</li>
		</ul>
		<h4 class="settings__title">Ставки</h4>
		<ul class="settings__list">
			<li class="settings__item">
				<p class="settings__name">Информация о результатах ставки</p>
				<div class="settings__switch-btn"
					@click="activeSwitch(4)"
					 :class="{active_switch: active.includes(4)}"
				>
					<div class="switch-toggle"></div>
				</div>
			</li>
		</ul>
		<h4 class="settings__title">Анонс новых событий</h4>
		<ul class="settings__list">
			<li class="settings__item">
				<p class="settings__name">Спорт</p>
				<div class="settings__switch-btn"
					@click="activeSwitch(5)"
					 :class="{active_switch: active.includes(5)}"
				>
					<div class="switch-toggle"></div>
				</div>
			</li>
			<li class="settings__item">
				<p class="settings__name">Киберспорт</p>
				<div class="settings__switch-btn"
					@click="activeSwitch(6)"
					 :class="{active_switch: active.includes(6)}"
				>
					<div class="switch-toggle"></div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "NoticeSettings",
	data() {
		return {
			active: []
		}
	},
	methods: {
		activeSwitch(value) {
			if (this.active.includes(value)) {
				let index = this.active.indexOf(value)
				this.active.splice( index,1)
			} else {
				this.active.push(value)
			}
			console.log(this.active)
			// if (!this.active.includes(value)) {
			// 	this.active.push(value)
			// } else {
			// 	this.active.splice( index,1)
			// }
		}
	}
}
</script>

<style scoped>
	.settings {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 14px 0;
		background: #151317;
	}

	.settings__caption {
		margin-bottom: 12px;
		font-size: 26px;
	}

	.settings__title {
		padding: 5px 16px;
		font-size: 13px;
		font-family: Roboto-Regular, sans-serif;
		text-transform: uppercase;
		color: #8E8E93;
	}

	.settings__list {
		display: flex;
		flex-direction: column;
		gap: 4px 0;
		margin-bottom: 12px;
	}

	.settings__item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 14px;
		border-radius: 8px;
		background: #28272B;
	}

	.settings__name {
		font-size: 14px;
	}

	.settings__switch-btn {
		transition: .15s;
		width: 38px;
		height: 22px;
		padding: 1px;
		border: 1px solid #00F59B;
		border-radius: 100px;
		cursor: pointer;
	}

	.switch-toggle {
		transition: .15s linear;
		width: 18px;
		height: 18px;
		border: 4px solid #28272B;
		border-radius: 100px;
		background: #00F59B;
	}

	.active_switch {
		background: #00F59B;
	}

	.active_switch .switch-toggle {
		background: #000;
		transform: translateX(16px);
		border: none;
	}
</style>