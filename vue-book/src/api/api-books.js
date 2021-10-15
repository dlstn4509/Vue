import axios from "axios";
const { VUE_APP_API_KEY, VUE_APP_URL_BOOKS } = process.env;

const apiBooks = (page) => {
  return axios.get(VUE_APP_URL_BOOKS + "/" + page, {
    params: { apikey: VUE_APP_API_KEY },
    withCredentials: true,
  });

  // return axios.get("http://127.0.0.1:3100/book?page=1&apikey=62f45e12-ffcb-4af7-8705-af5c71db9193");
};

export default apiBooks;
