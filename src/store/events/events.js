export default {
    state: ()=>({
        tournaments: {},
    }),
    mutations: {
        ADD_TOURNAMENTS(state, item) {
            state.tournaments = item
        },
    },
    actions: {
        SAVE_TOURNAMENTS({commit}, item) {
            commit('ADD_TOURNAMENTS', item)
        },
    },
    getters: {
        GET_TOURNAMENTS: state => {
            return state.tournaments
        },
    }
}