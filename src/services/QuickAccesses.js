import axios from "axios";

const { API_URL } = process.env;

class QuickAccessesServices {
  getAll() {
    return new Promise((resolve, reject) => {
      axios.get(`${API_URL}/quick-accesses`, { params: { populate: "*" } })
        .then(({ data }) => resolve(data))
        .catch(reject);
    });
  }
}

export default new QuickAccessesServices();
