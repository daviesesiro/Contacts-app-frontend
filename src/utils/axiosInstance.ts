import Axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:9000/api"
    : "https://localhost:9000/api";

const axios = Axios.create({ baseURL });

export default axios;
