import axios from "axios";

const { API_URL } = process.env;

class NewsServices {
  getAll(params) {
    return new Promise((resolve, reject) => {
      axios.get(`${API_URL}/actualites`, { params })
        .then(({ data }) => resolve(data))
        .catch(reject);
    });
  }

  get(slug) {
    return new Promise((resolve, reject) => {
      axios.get(`${API_URL}/actualites`, { params: { slug, populate: "*" } })
        .then(({ data }) => resolve(data))
        .catch(reject);
    });
  }
}

export default new NewsServices();
