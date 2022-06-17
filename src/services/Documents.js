import axios from "axios";

const { NEXT_PUBLIC_API_URL } = process.env;

class DocumentsServices {
  getByType(type) {
    return new Promise((resolve, reject) => {
      axios.get(`${NEXT_PUBLIC_API_URL}/documents?filters[type][unifiedType][$eq]=${type}&populate=*`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    });
  }
}

export default new DocumentsServices();
