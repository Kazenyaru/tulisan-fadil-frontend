const namespaced = true;

const state = {
  alert: null,
  alertVisible: false,
  isLoading: false,
};

const getters = {
  alertVisible: (state) => state.alertVisible,
  getAlert: (state) => state.alert,
  getLoad: (state) => state.isLoading,
};

const actions = {

  toggleAlert({ commit }, data) {
    commit('toggle_alert', data);
  },

  flash({ commit }, data) {
    commit('set_alert', data);
    commit('toggle_alert', data);
  },

  load({ commit }, cond) {
    commit('set_load', cond);
  },
};

const mutations = {
  toggle_alert(state, data) {
    state.alertVisible = !state.alertVisible;
  },
  set_alert(state, data) {
    state.alert = data;
  },
  set_load(state, status) {
    state.isLoading = status;
  },
};

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
