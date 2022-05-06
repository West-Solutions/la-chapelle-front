import axios from "axios";

const { API_URL } = process.env;

class PageServices {
  getAll() {
    return new Promise((resolve, reject) => {
      const URL = `${API_URL}/pages/?populate=*`;
      axios.get(URL)
        .then(({ data }) => {
          if (data && Object.keys(data).length)
            resolve(data);
          else
            reject(new Error("No pages found"));
        })
        .catch(reject);
    });
  }

  get(id) {
    return new Promise((resolve, reject) => {
      const URL = `${API_URL}/pages/${id}/?populate=*`;
      axios.get(URL)
        .then(({ data }) => {
          if (data && Object.keys(data).length)
            resolve(data);
          else
            reject(new Error("No page found"));
        })
        .catch(reject);
    });
  }
}

export default new PageServices();
