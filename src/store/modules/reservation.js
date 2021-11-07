import escapes from "../../api/Escape";

const state = () => ({
  reserve: [],
  done: null,
});

const getters = {
  reservations: (state, getters, rootState) => {
    return state.reserve.map(({ id }) => {
      const escape = rootState.escapes.all.find((escape) => escape.id === id);
      return {
        id: escape.id,
        title: escape.title,
      };
    });
  },
};

const actions = {
  checkout({ commit, state }, products) {
    const savedCartItems = [...state.reserve];
    commit("setCheckoutStatus", null);
    commit("setCartItems", { items: [] });
    escapes.buyProducts(
      products,
      () => commit("setCheckoutStatus", "successful"),
      () => {
        commit("setCheckoutStatus", "failed");
        // rollback to the cart saved before sending the request
        commit("setCartItems", { items: savedCartItems });
      }
    );
  },
  addEscapeToReservation({ commit }, escape) {
    commit("setCheckoutStatus", null);
    commit("pushEscapeToReservation", { id: escape.id });
  },
};

const mutations = {
  pushEscapeToReservation(state, { id }) {
    const ids = state.reserve.map((el) => el.id);
    if (!ids.includes(id)) {
      state.reserve.push({ id });
    }
    console.log(state.reserve);
  },
  setCheckoutStatus(state, status) {
    state.done = status;
  },
  setReservationEscape(state, { reserve }) {
    state.reserve = reserve;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
