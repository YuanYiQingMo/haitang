import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'null',
  },
  mutations: {
    setToken(state,obj){
			this.state.token = obj;
		},
  },
  actions: {
  },
  modules: {
  }
})
