// Reducer : Store 데이터 상태 관리(History), 깃허브
// 상태(History)를 관리 함 => state의 값을 변화 시킨다.
export default {
  MUT_COORDS (state, v) { // v : 변화된 값
    state.coords = v
  },
  MUT_DAILY (state, v) {
    state.coords = v
  },
  MUT_DAYS (state, v) {
    state.coords = v
  }
}
