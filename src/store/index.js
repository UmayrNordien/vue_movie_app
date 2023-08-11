import { createStore } from 'vuex';

export default createStore({
  state: {
    sessionID: localStorage.getItem('sessionID') || null,
  },
  mutations: {
    updateSessionID(state, sessionID) {
      state.sessionID = sessionID;
    },
  },
  actions: {
    updateSessionID({ commit }, sessionID) {
      commit('updateSessionID', sessionID);         //store.dispatch('updateSessionID', sessionID);
    },
  },
  getters: {
    isLoggedIn: state => !!state.sessionID,
  },
});
