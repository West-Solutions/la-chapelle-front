export const fetchFromDataAttribute = (object = {}) => {
  const { data } = object;
  if (!data) return object;
  const { attributes = {} } = data;
  return attributes;
};

export const hasDataAndAttribute = (object = {}) => {
  const { data } = object;
  if (!data) return false;
  const { attributes } = data;
  return attributes;
};

export const cleanResults = (results = []) =>
  results.map(result => fetchFromDataAttribute(result));