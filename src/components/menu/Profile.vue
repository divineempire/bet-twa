<template>
	<div class="profile">
		<div class="league-placement">
			<h3 class="profile__caption">Ваше положение в лиге</h3>
			<div class="regular-league" :class="{active_league: regularPlacement !== null}">
				<p class="regular-league__text">{{ getYourPlacement }}</p>
				<div class="arrow-icon" v-if="regularPlacement !== null"></div>
			</div>
			<div class="fantasy-league" :class="{active_league: userInFantasy !== null}">
				<p class="fantasy-league__text">{{ getYourFantasyPlacement }}</p>
				<div class="arrow-icon" v-if="userInFantasy !== null"></div>
			</div>
		</div>
		<BetStats />
<!--		<div class="stats">-->
<!--			<h3 class="profile__caption">Статистика ставок</h3>-->
<!--			<div class="stats__info">-->
<!--				<div class="stats__row total-bet">-->
<!--					<p class="stats__text">Всего поставлено</p>-->
<!--					<p class="stats__value">1500 TON</p>-->
<!--				</div>-->
<!--				<div class="stats__row total-win">-->
<!--					<p class="stats__text">Всего выиграно</p>-->
<!--					<p class="stats__value">290 TON</p>-->
<!--				</div>-->
<!--				<div class="stats__row fee-lose">-->
<!--					<p class="stats__text">Потеряно на комиссии</p>-->
<!--					<p class="stats__value">10 TON</p>-->
<!--				</div>-->
<!--				<div class="stats__row you-fee">-->
<!--					<p class="stats__text">Ваша комиссия</p>-->
<!--					<p class="stats__value">10%</p>-->
<!--				</div>-->
<!--			</div>-->
<!--		</div>-->
	</div>
</template>

<script>
import BetStats from "@/components/menu/BetStats.vue";
import {mapGetters} from "vuex";

export default {
	name: "Profile",
	components: {BetStats},
	data() {
		return {
			regularPlacement: null,
			// fantasyPlacement: null
		}
	},
	computed: {
		...mapGetters([
			'GET_USER_INFO'
		]),
		getYourPlacement() {
			if (this.regularPlacement !== null) {
				return `Вы занимаете ${this.regularPlacement} место в зимней лиге`
			} else {
				return `Вы ещё не участвовали в зимней лиге`
			}
		},
		getYourFantasyPlacement() {
			if (this.userInFantasy !== null) {
				return `Вы занимаете ${this.userInFantasy} место в фентези лиге`
			} else {
				return `Вы ещё не участвовали в фентези лиге`
			}
		},
		userInFantasy() {
			if (this.GET_USER_INFO.rated_league_entries) {
				let meFantasy = this.GET_USER_INFO?.rated_league_entries.find((item) => item?.rated_league?.fantasy === true)
				if (meFantasy) {
					return meFantasy?.place
				} else {
					return null
				}
			} else {
				return null
			}
		},
	}
}
</script>

<style scoped>
	.league-placement {
		padding: 14px 0;
	}

	.profile__caption {
		font-size: 26px;
		margin-bottom: 12px;
	}

	.regular-league {
		display:  flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 8px;
		padding: 12px 16px;
		border-radius: 8px;
		background: rgba(63, 60, 66, 0.50);
	}

	.fantasy-league {
		display:  flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 16px;
		border-radius: 8px;
		background: rgba(63, 60, 66, 0.50);
	}

	.active_league {
		background: #3F3C42;
	}

	.regular-league__text,
	.fantasy-league__text {
		font-size: 14px;
		line-height: 20px;
	}

	.arrow-icon {
		width: 20px;
		height: 20px;
		background: url('~@/assets/menu/arrow.svg') no-repeat;
	}
</style>