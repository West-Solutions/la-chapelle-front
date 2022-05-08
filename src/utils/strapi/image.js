/**
 * Will rewrite the img tags by prefixing the src with the correct host
 * @param {String} html
 * @param {String} baseUrl
 * @returns {String}
 */
export const rewriteImageSrc = (html, baseUrl) => {
  // Build an array of all the img tags
  const images = html.match(/<img[^>]*src="([^"]+)"/g);

  // If there are no images, return the html
  if (!images) return html;

  // Loop through the images and rewrite the src
  images.forEach((image) => {
    const src = image.match(/src="([^"]+)"/)[1];
    const newSrc = `${baseUrl}${src}`;
    html = html.replace(src, newSrc);
  });

  return html;
};