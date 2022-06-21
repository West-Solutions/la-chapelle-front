import React from "react";
import PropTypes from "prop-types";

import HomeNews from "@Display/News/Home/";

import { filterHomeNews, sortNews } from "@Utils/news";
const StrapiHome = ({
  newsNumber,
  quickAccessNumber,
  news,
  //quickAccesses,
  sectionColor
}) => {
  sortNews(news);
  const filteredNews = filterHomeNews(news, newsNumber);
  return (
    <div className={"w-full flex gap-8"}>
      <div className={"w-2/3"}>
        <h2 className={`text-4xl pb-4 text-${sectionColor}`}>Actualités</h2>
        <div className='grid grid-cols-2 gap-4'>
          {filteredNews.map(({ id, attributes }) => (
            <HomeNews key={id} news={attributes} />
          ))}
        </div>
      </div>
      <div className={"w-1/3"}>
        <h2 className={`text-4xl pb-4 text-${sectionColor}`}>Acces rapides</h2>
        <div className='grid grid-cols-2 gap-4'>
          {`nombre d'acces rapide : ${quickAccessNumber}`}
        </div>
      </div>
    </div>
  );
};

StrapiHome.propTypes = {
  news: PropTypes.arrayOf(),
  newsNumber: PropTypes.number,
  quickAccesses: PropTypes.arrayOf(),
  quickAccessNumber: PropTypes.number,
  sectionColor: PropTypes.string
};

export default StrapiHome;
