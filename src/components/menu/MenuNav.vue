<template>
	<nav class="menu__nav">
		<ul class="menu__list">
			<li class="menu__item">
				<router-link class="menu__link" active-class="active_link" :to="{name: 'Profile'}">Мой профиль</router-link>
			</li>
			<li class="menu__item">
				<router-link class="menu__link" active-class="active_link" :to="{name: 'History'}">Мои ставки</router-link>
			</li>
			<li class="menu__item">
				<router-link class="menu__link" active-class="active_link" :to="{name: 'Bonus'}">Акции и бонусы</router-link>
			</li>
<!--			<li class="menu__item">-->
<!--				<router-link class="menu__link" active-class="active_link" :to="{name: 'Referal'}">Реферальная система</router-link>-->
<!--			</li>-->
			<li class="menu__item">
				<router-link class="menu__link" active-class="active_link" :to="{name: 'Notice'}">Уведомления</router-link>
			</li>
			<li class="menu__item">
				<router-link class="menu__link" active-class="active_link" :to="{name: 'Support'}">Поддержка</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: "MenuNav",
	data() {
		return {

		}
	}
}
</script>


<style scoped>

	.menu__nav {
		margin-top: 28px;
		padding: 10px 0;
	}

	.menu__list {
		display: flex;
		flex-direction: column;
		gap: 16px 0;
	}

	.menu__link {
		font-size: 32px;
		font-family: Roboto-Medium, sans-serif;
		font-weight: 500;
		line-height: 37.5px;
	}

	.active_link {
		opacity: 0.3;
	}
</style>