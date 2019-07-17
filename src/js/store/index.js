import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router/'
import CONSTANTS from '@js/utils/constants'

Vue.use(Vuex)

// data for pre-loading.
const defaultDate = new Date()
const defaultUnixtime = defaultDate.getTime()

export default new Vuex.Store({
  state: {
    region: CONSTANTS.DEFAULT_REGION,
    datetime: defaultUnixtime,
    currentUnixtime: defaultUnixtime,
    initServerUnixtime: defaultUnixtime,
    initDeviceUnixTime: defaultUnixtime
  },
  mutations: {
    loadServerTime: (state, payload) => {
      const promise = $.ajax({
        url: CONSTANTS.TIME_API_URL,
        method: 'GET'
      })

      promise.done(data => {
        state.initServerUnixtime = data.st * 1000
      })

      promise.fail(error => {
        const nd = new Date()
        state.initServerUnixtime = nd.getTime()
      })

      promise.then(() => {
        const nd = new Date()
        state.initDeviceUnixTime = nd.getTime()
        payload.callback()
      })
    },
    updateTime: state => {
      const _nd = new Date()
      state.currentUnixtime =
        _nd.getTime() - state.initDeviceUnixTime + state.initServerUnixtime
    },
    selectRegion: (state, payload) => {
      state.region = payload.region
      router.push(CONSTANTS.WEB_ROOT + payload.region)
    }
  },
  actions: {
    loadServerTime: (context, payload) => {
      context.commit('loadServerTime', payload)
    },
    updateTime: context => {
      context.commit('updateTime')
    },
    selectRegion: (context, payload) => {
      context.commit('selectRegion', payload)
    }
  }
})
