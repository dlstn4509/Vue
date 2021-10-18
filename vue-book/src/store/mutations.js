// 상태(History)를 관리 함 => state의 값을 변화시킨다.
export default {
  MUT_BOOKS(state, v) {
    state.books = v;
  },
  MUT_BOOK(state, v) {
    state.book = v;
  },
  MUT_LOADING(state, v) {
    state.isLoading = v;
  },
  MUT_PAGE(state, v) {
    state.page = v;
  },
  MUT_SCTOP(state, v) {
    state.scTop = v;
  },
};
