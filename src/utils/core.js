// @ts-check

/**
 * Determine if the given link is an internal link
 * @param {string} link
 * @returns {boolean} True if the link is an internal link
 */
export const isRelativeLink = (link = "") =>
  link.startsWith("/") || link.startsWith("#");


/**
 * Find recursively current route location inside navigation and return object with title and link information
 * @param {*} navigation Navigation object from strapi
 * @param {*} route Router object from next
 * @returns {object} True if the link is an internal link
 */
export const getRouteInformation= (navigation, route, slug="") => {
  const currentSlug = slug === "" ? route[0] : `${slug}-${route[0]}`;
  const currentItem = navigation.find(item => item.slug === currentSlug);

  //To be change when Actualities page is implemented
  if(route.length === 1 && route[0] === "actualites") {
    return { isLink: true, title: "Actualités" };
  }

  //To be updated with correct slug
  if (route[0] === "actualites") {
    return {
      isLink: true,
      title: route[1],
    };
  }

  if (route.length === 1) {
    if (currentItem && currentItem.type === "INTERNAL") {
      return {
        isLink: true,
        title: currentItem.title,
      };
    }
    return {
      isLink: false,
      title: currentItem.title,
    };
  }

  return getRouteInformation(currentItem.items, route.slice(1), currentSlug);
};