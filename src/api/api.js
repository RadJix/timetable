import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "",
  headers: {
    "API-KEY": "",
  },
});

export const informationAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
};

