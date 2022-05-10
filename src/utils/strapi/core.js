export const fetchFromDataAttribute = (object = {}) => {
  const { data = {} } = object;
  const { attributes = {} } = data;
  return attributes;
};

export const cleanResults = (results = []) =>
  results.map(result => fetchFromDataAttribute(result));