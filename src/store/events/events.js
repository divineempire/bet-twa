export default {
    state: ()=>({
        footballTournaments: {},
        hockeyTournaments: {},
        basketballTournaments: {},
        tennisTournaments: {},
        volleyballTournaments: {}
    }),
    mutations: {
        ADD_FOOTBALL_TOURNAMENTS(state, item) {
            state.footballTournaments = item
        },
        ADD_HOCKEY_TOURNAMENTS(state, item) {
            state.hockeyTournaments = item
        },
        ADD_BASKETBALL_TOURNAMENTS(state, item) {
            state.basketballTournaments = item
        },
        ADD_TENNIS_TOURNAMENTS(state, item) {
            state.tennisTournaments = item
        },
        ADD_VOLLEYBALL_TOURNAMENTS(state, item) {
            state.volleyballTournaments = item
        },
    },
    actions: {
        SAVE_FOOTBALL_TOURNAMENTS({commit}, item) {
            commit('ADD_FOOTBALL_TOURNAMENTS', item)
        },
        SAVE_HOCKEY_TOURNAMENTS({commit}, item) {
            commit('ADD_HOCKEY_TOURNAMENTS', item)
        },
        SAVE_BASKETBALL_TOURNAMENTS({commit}, item) {
            commit('ADD_BASKETBALL_TOURNAMENTS', item)
        },
        SAVE_TENNIS_TOURNAMENTS({commit}, item) {
            commit('ADD_TENNIS_TOURNAMENTS', item)
        },
        SAVE_VOLLEYBALL_TOURNAMENTS({commit}, item) {
            commit('ADD_VOLLEYBALL_TOURNAMENTS', item)
        },
    },
    getters: {
        GET_FOOTBALL_TOURNAMENTS: state => {
            return state.footballTournaments
        },
        GET_HOCKEY_TOURNAMENTS: state => {
            return state.hockeyTournaments
        },
        GET_BASKETBALL_TOURNAMENTS: state => {
            return state.basketballTournaments
        },
        GET_TENNIS_TOURNAMENTS: state => {
            return state.tennisTournaments
        },
        GET_VOLLEYBALL_TOURNAMENTS: state => {
            return state.volleyballTournaments
        },
    }
}