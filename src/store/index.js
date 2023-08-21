//* object with different properties
//? ref source: https://www.youtube.com/watch?v=nFh7-HfODYY (vuex store)
import { createStore } from 'vuex';

export default createStore({
  state: {                                                 // global onbject of data that is manageable throughtout the app
    sessionID: localStorage.getItem('sessionID') || null,  // the state here holds a single property, fetched from localStorage or set to null if there is no session
  },
  mutations: {
    updateSessionID(state, sessionID) {               // newly obtained session ID exchanged with the request token
      state.sessionID = sessionID;
      localStorage.setItem('sessionID', sessionID);   // stores the session ID in the browser's localStorage 
    },
  },
  actions: {
    updateSessionID({ commit }, sessionID) {          // updated authentication state within store
      commit('updateSessionID', sessionID);
    },
    clearSessionID({ commit }) {
      commit('updateSessionID', null);
      localStorage.removeItem('sessionID');
    },
  },
                                                // access the session ID from the store's state.
  getters: {                                    //? ref source: https://codingbeauty.medium.com/javascript-double-negation-e667b993e408#:~:text=Double%20negation%20converts%20truthy%20values,true%20for%20a%20falsy%20value.
    isLoggedIn: state => !!state.sessionID,     // !! (double negation) converts sessionID into a boolean which returns true and checks if the user is authenticated or not
    getSessionID: state => state.sessionID, 
  },
});
