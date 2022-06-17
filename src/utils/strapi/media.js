// @ts-check

const { NEXT_PUBLIC_BACK_URL } = process.env;

/**
 * Retrieve the media from the strapi API
 * @param {string} url The url to the media
 * @returns {string} The media url prefixed with the correct host
 */
export const pathAsAbsolute = url => {
  if (!url) return url;

  return url.startsWith("/uploads")
    ? `${NEXT_PUBLIC_BACK_URL}${url}`
    : url;
};