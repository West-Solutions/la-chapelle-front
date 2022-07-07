// @ts-check

/**
 * Will get the content from the data.attributes property. In case data is an array will return the array
 * @param {object} object The source to parse
 * @returns {any} The parse property or an array
 */
export const fetchFromDataAttribute = (object = {}) => {
  const { data } = object;
  let { attributes } = object;
  if (!data && !attributes) return object;
  if (Array.isArray(data)) return data;
  if (!attributes) return data.attributes || {};
  return attributes;
};

/**
 *
 * @param {*} object
 * @returns
 */
export const hasDataAndAttribute = (object = {}) => {
  const { data } = object;
  if (!data) return false;
  const { attributes } = data;
  return attributes;
};

export const cleanResults = (results = []) =>
  results.map(result => fetchFromDataAttribute(result));