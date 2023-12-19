export default {
    state: ()=>({
        betsHistory: {},
    }),
    mutations: {
        ADD_BETS_HISTORY(state, item) {
            state.betsHistory = item
        },
    },
    actions: {
        SAVE_BETS_HISTORY({commit}, item) {
            commit('ADD_BETS_HISTORY', item)
        },
    },
    getters: {
        GET_BETS_HISTORY: state => {
            return state.betsHistory
        },
    }
}