const mutations =  {
  loadServerTime: (state, payload) => {
    state.initServerUnixTime = payload.initServerUnixTime
    state.initDeviceUnixTime = payload.initDeviceUnixTime
  },
  updateTime: state => {
    const _nd = new Date()
    state.currentUnixTime =
      _nd.getTime() - state.initDeviceUnixTime + state.initServerUnixTime
  },
  selectRegion: (state, payload) => {
    state.region = payload.region
  }
}
export default mutations
