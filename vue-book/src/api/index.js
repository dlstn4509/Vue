/* import apibooks from "./api-books";
import apibook from "./api-book";

export default { apibook, apibooks }; */

import axios from "axios";
const { VUE_APP_API_KEY, VUE_APP_URL_BOOKS, VUE_APP_URL_VIEW } = process.env;

const apiBooks = (page, { listCnt, pagerCnt }) => {
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
