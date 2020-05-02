import constants from '@js/utils/constants'

const actions = {
  loadServerTime ({ commit }, payload) {

    const nd = new Date()
    const initDeviceUnixTime = nd.getTime()

    const promise = $.ajax({
      url: constants.TIME_API_URL,
      method: 'GET'
    })

    // connection success
    promise.done(data => {
      const initServerUnixTime = data.st * 1000
      const payload = {
        initDeviceUnixTime,
        initServerUnixTime
      }
      commit('loadServerTime', payload)
    })

    // connection failed
    promise.fail(error => {
      const nd = new Date()
      const initServerUnixTime = nd.getTime()
      const payload = {
        initDeviceUnixTime,
        initServerUnixTime
      }
      commit('loadServerTime', payload)
    })

    // both of success & fail
    promise.then(() => {
      payload.callback()
    })

  },
  updateTime ({ commit }, payload) {
    commit('updateTime', payload)
  },
  selectRegion ({ commit }, payload) {
    commit('selectRegion', payload)
  }
}
export default actions