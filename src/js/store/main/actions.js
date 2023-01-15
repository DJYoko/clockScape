const actions = {
  updateTime({ commit }, payload) {
    commit('updateTime', payload);
  },
  selectRegion({ commit }, payload) {
    commit('selectRegion', payload);
  },
};
export default actions;
