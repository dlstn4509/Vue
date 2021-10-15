import apiBooks from "../api/api-books";

const ACT_BOOKS = async ({ commit }, page) => {
  try {
    const { data } = await apiBooks(page);
    commit("MUT_BOOKS", data);
  } catch (err) {
    commit("MUT_BOOKS", null);
  }
};

const ACT_BOOK = async ({ commit }, idx) => {
  console.log(commit, idx);
};

const ACT_LOADING = async ({ commit }, toggle) => {
  commit("MUT_LOADING", toggle);
};

export default { ACT_BOOKS, ACT_BOOK, ACT_LOADING };
