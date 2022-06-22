import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import { pathAsAbsolute } from "@Utils/strapi/media";
import { fetchFromDataAttribute } from "@Utils/strapi/core";

const HomeNews = ({ news }) => {
  const { title, slug, illustration, description } = news;

  return (
    <Link href={`/actualites/${slug}`}>
      <a className='shadow-lg hover:shadow-normal rounded-lg overflow-hidden border border-zinc-500 aspect-auto'>
        <div className='h-full w-full'>
          <div className='h-3/4 overflow-hidden items-center'>
            <img
              className='h-full w-full object-cover object-center'
              src={pathAsAbsolute(fetchFromDataAttribute(illustration).url)}
            />
          </div>
          <div className='h-1/4 flex justify-center items-center'>
            <h3 className='text-xl md:text-2xl text-center font-medium'>{title}</h3>
            <p className='hidden'>{description}</p>
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
