import { createStore } from 'vuex'
import wallet from '@/store/wallet/wallet.js'
import events from "@/store/events/events.js";
import menu from "@/store/menu/menu.js";

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    wallet: wallet,
    events: events,
    menu: menu
  }
})
