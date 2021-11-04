import { createStore } from "vuex";
import escapes from './modules/escapes'
import reservation from './modules/reservation'
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    escapes,
    reservation
  },
});
