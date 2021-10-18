import axios from "axios";
const { VUE_APP_API_KEY, VUE_APP_URL_VIEW } = process.env;

export default (idx) => {
  return axios.get(VUE_APP_URL_VIEW + "/" + idx, {
    params: { apikey: VUE_APP_API_KEY },
    withCredentials: true,
  });
};

/* 
VUE_APP_API_KEY=62f45e12-ffcb-4af7-8705-af5c71db9193
VUE_APP_URL_BOOKS=http://127.0.0.1:3100/book
VUE_APP_URL_VIEW=http://127.0.0.1:3100/view
VUE_APP_EXPRESS=http://127.0.0.1:3000
*/