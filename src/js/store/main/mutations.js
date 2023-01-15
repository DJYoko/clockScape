const mutations = {
  updateTime: (state, payload) => {
    state.currentUnixTime = payload.currentUnixTime;
  },
  selectRegion: (state, payload) => {
    state.region = payload.region;
  },
};
export default mutations;
