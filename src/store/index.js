import { createStore } from "vuex";
import escapes from "./modules/escapes";
import reservation from "./modules/reservation";
export default createStore({
  state: {
    isLoggedIn: false,
  },
  mutations: {},
  actions: {},
  modules: {
    escapes,
    reservation,
  },
});
