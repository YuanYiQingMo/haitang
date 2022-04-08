import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'null',
    token0:'null',
  },
  mutations: {
    setToken(state,obj){
			this.state.token = obj;
		},
    setToken0(state,obj){
			this.state.token0 = obj;
		},
  },
  actions: {
  },
  modules: {
  }
})
