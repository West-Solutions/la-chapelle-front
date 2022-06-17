import axios from "axios";

const { NEXT_PUBLIC_API_URL } = process.env;

class DocumentsServices {
  getByType(type) {
    console.log(type);
    return new Promise((resolve, reject) => {
      const url =`${NEXT_PUBLIC_API_URL}/documents?filters[type][unifiedType][$eq]=${type}&populate=*`;
      console.log(url);
      axios.get(url)
        .then(({ data }) => resolve(data))
        .catch(reject);
    });
  }
}

export default new DocumentsServices();
