import Vue from 'vue'
import Vuex from 'vuex'
import * as modules from './modules'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        isDarkModeEnabled: true
    },
    getters: {
        isDarkModeEnabled: (state) => state.isDarkModeEnabled
    }
    ,
    mutations: {
        increment (state) {
            state.count++
        },
        changeMode (state) {
          state.isDarkModeEnabled = !state.isDarkModeEnabled;
          console.log(state.isDarkModeEnabled)
        }
    },
    modules //same as modules:{ modules }
})

export default store