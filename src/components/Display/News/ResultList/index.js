import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import { beautifyDate } from "@Utils/date";
import { pathAsAbsolute } from "@Utils/strapi/media";
import { fetchFromDataAttribute } from "@Utils/strapi/core";

const NewsResultList = ({ news }) => {
  return (
    <div className="flex flex-col max-w-3xl m-auto gap-4 md:gap-8">
      <h5 className="text-3xl w-full m-auto text-center">Les derniéres actualités</h5>
      {news.map(({ id, attributes }) => {
        const { title, updatedAt, illustration, slug, description } = attributes;
        return (
          <Link
            key={id}
            href={`/actualites/${slug}`}
          >
            <a>
              <div className="flex items-center h-[118px] md:h-[200px] rounded shadow hover:shadow-lg hover:cursor-pointer hover:scale-[1.01] transition-transform ">
                <div className="h-full aspect-square">
                  <img
                    className="w-full h-full object-cover rounded-l"
                    src={pathAsAbsolute(fetchFromDataAttribute(illustration).url)}
                  />
                </div>
                <div className=" flex flex-col justify-center gap-2 p-2 border border-l-0 border-slate-100 h-full">
                  <h2 className="text-xl font-medium text-actualite">{title}</h2>
                  <p className="h-[40px] md:h-[53px] text-sm md:text-base overflow-hidden">{description}</p>
                  <div className="text-sm"><span>Mis à jour le {beautifyDate(updatedAt)}</span></div>
                </div>
              </div>
            </a>
          </Link>
        );}
      )}
    </div>
  );
};

NewsResultList.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([
        PropTypes.string, PropTypes.number
      ]),
      attributes: PropTypes.shape({
        Titre: PropTypes.string,
        description: PropTypes.string,
      }),
    })
  )
};

NewsResultList.defaultProps = {
  news: []
};

export default NewsResultList;
