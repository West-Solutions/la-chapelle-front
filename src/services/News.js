import axios from "axios";

const { API_URL } = process.env;

class NewsServices {
  getAll(params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(`${API_URL}/actualites`, { params })
        .then(({ data }) => resolve(data))
        .catch(reject);
    });
  }

  get(id, params = {}) {
    return new Promise((resolve, reject) => {
      if (!id) reject(new Error("NewsServices.get: id is required"));
      axios.get(`${API_URL}/actualites/${id}`, { params: { populate: "*", ...params } })
        .then(({ data }) => resolve(data))
        .catch(reject);
    });
  }

  getBySlug(slug, params = {}) {
    return new Promise((resolve, reject) => {
      if (!slug) reject(new Error("NewsServices.getBySlug: slug is required"));
      axios.get(`${API_URL}/actualites/?filters[slug][$eq]=${slug}`, { params })
        .then(({ data }) => resolve(data))
        .catch(reject);
    });
  }
}

export default new NewsServices();
