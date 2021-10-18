export default {
  GET_BOOKS: function (state) {
    return state.books;
  },
  GET_BOOK: function (state) {
    return state.book;
  },
  GET_LOADING: function (state) {
    return state.isLoading;
  },
  GET_PAGE: function (state) {
    return state.page;
  },
  GET_SCTOP: function (state) {
    return state.scTop;
  },
};
