/* import apibooks from "./api-books";
import apibook from "./api-book";

export default { apibook, apibooks }; */

import axios from "axios";
const { VUE_APP_API_KEY, VUE_APP_URL_BOOKS, VUE_APP_URL_VIEW } = process.env;

const apiBooks = (page, { listCnt, pagerCnt }) => {
  // http://127.0.0.1:3100/book/10?apikey=c9e5c72a-01ab-4c6f-bf1e-dd85f9154e65&listCnt=10&pagerCnt=10
  return axios.get(VUE_APP_URL_BOOKS + "/" + page, {
    params: { apikey: VUE_APP_API_KEY, listCnt, pagerCnt },
    withCredentials: true,
  });
};

const apiBook = (idx) => {
  return axios.get(VUE_APP_URL_VIEW + "/" + idx, {
    params: { apikey: VUE_APP_API_KEY },
    withCredentials: true,
  });
};

export { apiBooks, apiBook };
