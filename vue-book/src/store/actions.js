import apiBooks from "../api/api-books";

const ACT_BOOKS = async ({ commit }, page = 1) => {
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

export default { ACT_BOOKS, ACT_BOOK };
