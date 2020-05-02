const mutations =  {
  loadServerTime: (state, payload) => {
    state.initServerUnixtime = payload.initServerUnixtime
    state.initDeviceUnixTime = payload.initDeviceUnixTime
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
