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
  addEscapeToReservation({ commit }, escape) {
    commit("setCheckoutStatus", null);
    commit("pushEscapeToReservation", { id: escape.id });
  },
  checkout({ commit }) {
    commit("setReservationNull");
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
  setReservationNull(state) {
    state.reserve = [];
    alert("Message envoyé");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
