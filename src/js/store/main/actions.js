const actions = {
  loadServerTime ({ commit }, payload) {
    commit('loadServerTime', payload)
  },
  updateTime ({ commit }) {
    commit('updateTime')
  },
  selectRegion ({ commit }, payload) {
    commit('selectRegion', payload)
  }
}
export default actions