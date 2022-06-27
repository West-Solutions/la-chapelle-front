import React from "react";
import PropTypes from "prop-types";

import NewsCard from "@Display/News/Card";
import QuickAccess from "@Display/QuickAccess";

const StrapiHome = ({ app, page, sectionColor }) => {
  const { news } = app;
  const { quickAccesses } = page;

  return (
    <div className={"w-full flex flex-col-reverse lg:flex-row gap-4 md:gap-10 lg:gap-20"}>
      <div className={"w-full lg:w-2/3"}>
        <h2 className={`text-4xl pb-4 text-${sectionColor}`}>Actualités</h2>
        <div className='grid grid-cols-2 gap-4'>
          {news.map(({ id, attributes }) => (
            <NewsCard key={id} news={attributes} />
          ))}
        </div>
      </div>
      <div className={"w-full lg:w-1/3"}>
        <h2 className={`text-4xl pb-4 text-${sectionColor}`}>Acces rapides</h2>
        <div className='grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-2 gap-4 bg-quick-access rounded-md p-2 lg:p-4 border border-zinc-500'>
          {quickAccesses.map(({ id, attributes }) => (
            <QuickAccess key={id} quickAccesses={attributes} />
          ))}
        </div>
      </div>
    </div>
  );
};

StrapiHome.propTypes = {
  app: PropTypes.shape({
    news: PropTypes.arrayOf(PropTypes.shape({}))
  }),
  page: PropTypes.shape({
    quickAccesses: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  sectionColor: PropTypes.string
};

StrapiHome.defaultProps = {
  app: {},
  page: {},
  sectionColor: ""
};

export default StrapiHome;
