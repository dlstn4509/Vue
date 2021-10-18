import axios from "axios";
const { VUE_APP_API_KEY, VUE_APP_URL_BOOKS } = process.env;

const apiBooks = (page, { listCnt, pagerCnt }) => {
  return axios.get(VUE_APP_URL_BOOKS + "/" + page, {
    params: { apikey: VUE_APP_API_KEY, listCnt, pagerCnt },
    withCredentials: true,
  });
};

export default apiBooks;

/* 
VUE_APP_API_KEY=62f45e12-ffcb-4af7-8705-af5c71db9193
VUE_APP_URL_BOOKS=http://127.0.0.1:3100/book
VUE_APP_URL_VIEW=http://127.0.0.1:3100/view
VUE_APP_EXPRESS=http://127.0.0.1:3000
*/
