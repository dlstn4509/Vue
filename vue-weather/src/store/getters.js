export default { // Store에 데이터 요청 (getters)
  GET_COORDS: function (state) {
    return state.coords
  },
  GET_DAILY: function (state) {
    return state.daily
  },
  GET_DAYS: function (state) {
    return state.days
  }
}
