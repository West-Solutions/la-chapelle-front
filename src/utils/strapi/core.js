export const fetchFromDataAttribute = (object = {}) => {
  const { data } = object;
  let { attributes } = object;
  if (!data && !attributes) return object;
  if (Array.isArray(data)) return data;
  if (!attributes) attributes=data.attributes||{};
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