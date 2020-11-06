import axios from "axios"; //서버의 내용은 여기서 받아오는 것.

const client = axios.create();

// client.defaults.baseURL = "";

// client.defaults.headers.common["Authorization"] = "Bearer a1b2c3d4";

// axios.intercepter.response.use(
//   (resposne) => {
//     return resposne;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

export default client;
