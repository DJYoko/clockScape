const mutations =  {
  loadServerTime: (state, payload) => {
    state.initServerUnixTime = payload.initServerUnixTime
    state.initDeviceUnixTime = payload.initDeviceUnixTime
  },
  updateTime: (state, payload) => {
    state.currentUnixTime = payload.currentUnixTime
  },
  selectRegion: (state, payload) => {
    state.region = payload.region
  }
}
export default mutations
