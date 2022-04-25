import axios from "axios";

const { API_URL } = process.env.API_URL;

class NavigationServices {
  getMain(type = "tree") {
    return new Promise((resolve, reject) => {
      axios.get(`${API_URL}/navigation/render/main-navigation/?type=${type}`)
        .then(({ data }) => resolve(data))
        .catch(error => reject(error));
    });
  }
}

export default new NavigationServices();
