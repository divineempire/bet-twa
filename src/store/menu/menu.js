export default {
    state: ()=>({
        betsHistory: {},
        userInfo: {},
        leagues: {},
        userLeagueInfo: []
    }),
    mutations: {
        ADD_BETS_HISTORY(state, item) {
            state.betsHistory = item
        },
        ADD_USER_INFO(state, item) {
            state.userInfo = item
        },
        ADD_LEAGUES(state, item) {
            state.leagues = item
        },
        // ADD_USER_FANTASY_INFO(state, item) {
        //     state.userFantasyInfo = item
        // },
    },
    actions: {
        SAVE_BETS_HISTORY({commit}, item) {
            commit('ADD_BETS_HISTORY', item)
        },
        SAVE_USER_INFO({commit}, item) {
            commit('ADD_USER_INFO', item)
        },
        SAVE_LEAGUES({commit}, item) {
            commit('ADD_LEAGUES', item)
        },
        // SAVE_USER_FANTASY_INFO({commit}, item) {
        //     commit('ADD_USER_FANTASY_INFO', item)
        // },
    },
    getters: {
        GET_BETS_HISTORY: state => {
            return state.betsHistory
        },
        GET_USER_INFO: state => {
            return state.userInfo
        },
        GET_LEAGUES: state => {
            return state.leagues
        },
        // GET_USER_FANTASY_INFO: state => {
        //     return state.userFantasyInfo
        // },
    }
}