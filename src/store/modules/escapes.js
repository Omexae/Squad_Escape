import escapes from "../../api/Escape";

const state = () => ({
  all: [],
});

const getters = {};

const actions = {
  getAllEscape({ commit }) {
    escapes.getEscape((escapes) => {
      commit("setEscapes", escapes);
    });
  },
};

const mutations = {
  setEscapes(state, escapes) {
    state.all = escapes;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
