import axios from "axios";

class NavigationServices {
  getMain(type = "tree") {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.API_URL}/navigation/render/main-navigation/?type=${type}`)
        .then(({ data }) => resolve(data))
        .catch(error => reject(error));
    });
  }
}

export default new NavigationServices();
