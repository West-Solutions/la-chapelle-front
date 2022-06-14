import axios from "axios";

const { API_URL } = process.env;

class ConfigServices {
  get() {
    return new Promise((resolve, reject) => {
      axios.get(`${API_URL}/config?populate=*`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    });
  }
}

export default new ConfigServices();
