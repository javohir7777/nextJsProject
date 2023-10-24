import { message } from "antd";
import axios from "axios";
const requist = axios.create({
  baseURL: "https://ap-vodiy-parfum-backend.up.railway.app/api/v1/",
  timeout: 10000,
});

requist.interceptors.response.use(
  (response) => response,
  (err) => {
    message.error(err.response.data.msg);
    return Promise.reject(err);
  }
);
export default requist;
