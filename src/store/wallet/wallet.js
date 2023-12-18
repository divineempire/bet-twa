export default {
    state: ()=>({
        walletInfo: {},
    }),
    mutations: {
        ADD_WALLET_INFO(state, item) {
            state.walletInfo = item
        },
    },
    actions: {
        SAVE_WALLET_INFO({commit}, item) {
            commit('ADD_WALLET_INFO', item)
        },
    },
    getters: {
        GET_WALLET_INFO: state => {
            return state.walletInfo
        },
    }
}