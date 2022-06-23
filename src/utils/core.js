// @ts-check

/**
 * Determine if the given link is an internal link
 * @param {string} link
 * @returns {boolean} True if the link is an internal link
 */
export const isInternalLink = (link = "") =>
  link.startsWith("/") || link.startsWith("#");
