export default {
    state: ()=>({
        walletInfo: {},
    }),
    mutations: {
        ADD_WALLET_INFO(state, item) {
            state.walletInfo = item
            // if (state.creatorWallet.length > 0 && state.creatorWallet.length < 2) {
            //     state.creatorWallet.forEach(wallet => {
            //         if (wallet.account.address !== item.account.address) {
            //             state.creatorWallet.push(item)
            //         }
            //     })
            // } else {
            //     state.creatorWallet.push(item)
            // }
        }
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