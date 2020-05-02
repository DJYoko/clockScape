import Vue from 'vue'
import 'babel-polyfill'
import vuex from 'vuex'
import main from  './main'

Vue.use(vuex)

const store = new vuex.Store({
    modules: {
        main
    }
})
export default store
