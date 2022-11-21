import { createStore } from 'vuex';
// import createPersistedState from 'vuex-persistedstate';
import auth from './modules/auth';
// Create store

// Potentialy broken
let store = createStore(auth);

export default store;
// new Store({
//   modules: {
//     auth,
//   },
//   plugins: [createPersistedState()],
// });
