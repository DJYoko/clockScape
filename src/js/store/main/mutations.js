import CONSTANTS from '@js/utils/constants'

const mutations =  {
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
  }
}
export default mutations
