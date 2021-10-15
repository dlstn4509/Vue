import axios from "axios";
import { API_KEY, URL_BOOKS } from "../modules/common";

const apiBooks = (page) => {
  return axios.get(URL_BOOKS, {
    params: { page, API_KEY },
    withCredentials: true,
  });
};

export default apiBooks;
