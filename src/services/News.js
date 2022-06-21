import axios from "axios";

const { API_URL } = process.env;

class NewsServices {
  getAll() {
    return new Promise((resolve, reject) => {
      axios.get(`${API_URL}/actualites`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    });
  }

  get(slug) {
    return new Promise((resolve, reject) => {
      axios.get(`${API_URL}/actualites?slug=${slug}&populate=*`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    });
  }
}

export default new NewsServices();
