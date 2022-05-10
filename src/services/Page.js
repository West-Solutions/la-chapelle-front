import axios from "axios";

const { API_URL } = process.env;

class PageServices {
  getAll() {
    return new Promise((resolve, reject) => {
      const URL = `${API_URL}/pages/?populate=*`;
      axios.get(URL)
        .then(({ data }) => {
          data
            ? resolve(data)
            : reject(new Error("No pages found"));
        })
        .catch(reject);
    });
  }

  get(id) {
    return new Promise((resolve, reject) => {
      const URL = `${API_URL}/pages/${id}/?populate=*`;
      axios.get(URL)
        .then(({ data }) => {
          data
            ? resolve(data)
            : reject(new Error("No pages found"));
        })
        .catch(reject);
    });
  }
}

export default new PageServices();
