import axios from "axios";

const { API_URL } = process.env;

class ColorsServices {
  getAll() {
    return new Promise((resolve, reject) => {
      axios.get(`${API_URL}/colors/?populate=*`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    });
  }
}

export default new ColorsServices();
