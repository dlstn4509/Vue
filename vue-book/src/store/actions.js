import { apiBooks, apiBook } from "../api";

const ACT_BOOKS = async ({ commit }, options) => {
  try {
    const { page = 1, listCnt = 5, pagerCnt = 3 } = options;
    const { data } = await apiBooks(page, { listCnt, pagerCnt });
    commit("MUT_BOOKS", data);
  } catch (err) {
    commit("MUT_BOOKS", null);
  }
};

const ACT_BOOK = async ({ commit }, idx) => {
  try {
    const { data } = await apiBook(idx);
    commit("MUT_BOOK", data);
  } catch (err) {
    commit("MUT_BOOK", null);
    console.log(err);
  }
};

const ACT_LOADING = async ({ commit }, toggle) => {
  commit("MUT_LOADING", toggle);
};

const ACT_PAGE = async ({ commit }, page = 1) => {
  commit("MUT_PAGE", page);
};

const ACT_SCTOP = async ({ commit }, scTop = 0) => {
  commit("MUT_SCTOP", scTop);
};

export default { ACT_BOOKS, ACT_BOOK, ACT_LOADING, ACT_PAGE, ACT_SCTOP };
