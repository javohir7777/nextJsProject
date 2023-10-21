import axios from "axios";
const requist = axios.create({
  baseURL: "https://ap-vodiy-parfum-backend.up.railway.app/api/v1/",
  timeout: 10000,
});
export default requist;
