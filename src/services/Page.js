import axios from "axios";

const { API_URL } = process.env;

class PageServices {
  getAll(params) {
    return axios.get(`${API_URL}/pages/`, { params });
  }

  get(id) {
    return axios.get(`${API_URL}/pages/${id}`);
  }
}

export default new PageServices();
