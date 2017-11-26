import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    first: 0,
    ops: '',
    second: 0,
    result: 0
  },
  getters: {
    getFirst: state => state.first,
    getSecond: state => state.second,
    getOps: state => state.ops,
    getResult: state => state.result
  },
  mutations: {
    setFirst: (state, first) => state.first = first,
    setSecond: (state, second) => state.second = second,
    setOps: (state, ops) => state.ops = ops,
    setResult: (state, result) => state.result = result,
    clear: state => {
      for (var key in state) {
        console.log(`state[${key}]:${state[key]}`)
        if (key === 'ops') {
          state[key] = ''
        } else {
          state[key] = 0
        }
        console.log(`state[${key}]:${state[key]}`)
      }
    }
  }
})
