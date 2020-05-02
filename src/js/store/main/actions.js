import constants from '@js/utils/constants'

const actions = {
  loadServerTime ({ commit }, payload) {

    const nd = new Date()
    const initDeviceUnixTime = nd.getTime()

    const promise = $.ajax({
      url: constants.TIME_API_URL,
      method: 'GET'
    })

    // conection success
    promise.done(data => {
      const initServerUnixtime = data.st * 1000
      const payload = {
        initDeviceUnixTime,
        initServerUnixtime
      }
      commit('loadServerTime', payload)
    })

    // connection failed
    promise.fail(error => {
      const nd = new Date()
      const initServerUnixtime = nd.getTime()
      const payload = {
        initDeviceUnixTime,
        initServerUnixtime
      }
      commit('loadServerTime', payload)
    })

    // both of success & fail
    promise.then(() => {
      payload.callback()
    })

  },
  updateTime ({ commit }) {
    commit('updateTime')
  },
  selectRegion ({ commit }, payload) {
    commit('selectRegion', payload)
  }
}
export default actions