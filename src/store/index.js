import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
// import createPersistedState from "vuex-persistedstate";
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
  },
  plugins: [new VuexPersistence().plugin]

})
