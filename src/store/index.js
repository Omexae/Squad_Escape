import { createStore } from "vuex";
import escapes from "./modules/escapes";
import reservation from "./modules/reservation";
export default createStore({
  state: {
<<<<<<< HEAD
    isLoggedIn: false,
=======
    IsLoggedIn: false,
>>>>>>> 356a38e3293ef9ad636872b78535d0d9b97df723
  },
  mutations: {},
  actions: {},
  modules: {
    escapes,
    reservation,
  },
});
