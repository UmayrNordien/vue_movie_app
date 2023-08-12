import { createStore } from 'vuex';

export default createStore({
  state: {
    sessionID: localStorage.getItem('sessionID') || null,
  },
  mutations: {
    updateSessionID(state, sessionID) {
      state.sessionID = sessionID;
      localStorage.setItem('sessionID', sessionID);
    },
  },
  actions: {
    updateSessionID({ commit }, sessionID) {
      commit('updateSessionID', sessionID);
    },
    clearSessionID({ commit }) {
      commit('updateSessionID', null);
      localStorage.removeItem('sessionID');
    },
  },
  getters: {
    isLoggedIn: state => !!state.sessionID,
    getSessionID: state => state.sessionID, 
  },
});
