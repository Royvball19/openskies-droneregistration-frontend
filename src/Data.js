import axios from "axios";

const endpoint = "http://127.0.0.1:8000/api/v1/";

export default {
  async getAllOperators() {
    return await axios.get(endpoint + "operators");
  },
  async getAllPilots() {
    return await axios.get(endpoint + "pilots");
  },
};
