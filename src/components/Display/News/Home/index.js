import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import { pathAsAbsolute } from "@Utils/strapi/media";
import { fetchFromDataAttribute } from "@Utils/strapi/core";

const HomeNews = ({ news }) => {
  const { title, slug, illustration, description } = news;

  return (
    <Link href={`/actualites/${slug}`}>
      <a className='shadow-normal rounded-lg overflow-hidden'>
        <div className='h-80 items-center rounded shadow hover:shadow-lg hover:cursor-pointer transition-transform '>
          <div className='h-60 w-full overflow-hidden'>
            <img
              className='hover:hidden w-full object-cover object-center'
              src={pathAsAbsolute(fetchFromDataAttribute(illustration).url)}
            />
          </div>
          <div>
            <h3 className='text-2xl text-center font-medium text-actualite'>
              {title}
            </h3>
          </div>
        </div>
      </a>
    </Link>
  );
};

HomeNews.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      attributes: PropTypes.shape({
        Titre: PropTypes.string,
        description: PropTypes.string
      })
    })
  )
};

HomeNews.defaultProps = {
  news: []
};

export default HomeNews;
