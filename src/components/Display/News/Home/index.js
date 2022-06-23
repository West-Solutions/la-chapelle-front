import React, { useState } from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import { pathAsAbsolute } from "@Utils/strapi/media";
import { fetchFromDataAttribute } from "@Utils/strapi/core";

const HomeNews = ({ news }) => {
  const { title, slug, illustration, description } = news;

  const [showDescription, setShowDescription] = useState(false);

  const onMouseEnter = () => {
    window.innerWidth >= 1280 && setShowDescription(true);
  };

  const onMouseLeave = () => {
    window.innerWidth >= 1280 && setShowDescription(false);
  };

  return (
    <Link href={`/actualites/${slug}`}>
      <a
        className="shadow-lg hover:shadow-normal rounded-md overflow-hidden border border-zinc-500 h-40 sm:h-64 md:h-80 lg:h-64 xl:h-80"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="h-full w-full">
          <div className={`${showDescription ? "h-0" : "h-3/4"} overflow-hidden items-center transition-all duration-500`}>
            <img
              className="h-full w-full object-cover object-center"
              src={pathAsAbsolute(fetchFromDataAttribute(illustration).url)}
            />
          </div>
          <div className="flex flex-col overflow-hidden items-center transition-all duration-500">
            <h3 className={`sm:text-2xl text-center font-medium transition-all duration-700 ${showDescription ? "my-4" : "my-2 md:my-6 lg:my-3 xl:my-6 mb-96"}`}>
              {title}
            </h3>
            <p className="p-4">{description}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

HomeNews.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      illustration: PropTypes.shape({}),
      slug: PropTypes.string,
      title: PropTypes.string
    })
  )
};

HomeNews.defaultProps = {
  news: []
};

export default HomeNews;
