import Vue from 'vue'
import 'babel-polyfill'
import Vuex from 'Vuex'
import main from  './main'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        main
    }
})
export default store
