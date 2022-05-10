import axios from "axios";

const { API_URL } = process.env;

class ContactService {
  get() {
    return new Promise((resolve, reject) => {
      axios.get(`${API_URL}/contact`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    });
  }
}

export default new ContactService();
