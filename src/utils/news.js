//@ts-check

/**
 * Will return a selection of news based on the given limit
 * @param {Number} limit The number of news to return
 * @param {Object} news The news to select from
 * @returns {Array} The selection of news
 * @throws {Error} If the limit is not a number
 * @throws {Error} If the limit is not a positive integer
 */
export const filterHomeNews = (news, limit) => {
  const filteredNews = news.filter(({ attributes }) => attributes.homePage);
  if (filteredNews.length > limit) return filteredNews.slice(0, limit);

  for (let i = 0; i < limit; i++) {
    //if news is not in filteredNews, add it
    if (!filteredNews.find(({ id }) => id === news[i].id)) {
      filteredNews.push(news[i]);
      if (filteredNews.length === limit) break;
    }
  }
  return filteredNews;
};

/**
 * will return the news sorted by startDate decreasing
 * @param {Array} news The news to sort
 * @returns {Array} The sorted news
 */
export const sortNews = (news) => {
  return news.sort((a, b) => {
    return (
      new Date(b.attributes.startDate).getTime() -
      new Date(a.attributes.startDate).getTime()
    );
  });
};
