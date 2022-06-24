import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

import { isRelativeLink } from "@Utils/core";
import { pathAsAbsolute } from "@Utils/strapi/media";
import { fetchFromDataAttribute } from "@Utils/strapi/core";

const QuickAccess = ({ quickAccesses }) => {
  const { titre, lien, logo } = quickAccesses;
  const internalLink = isRelativeLink(lien);
  return (
    <Link href={lien}>
      <a
        className="shadow-lg hover:shadow-normal rounded-md border border-zinc-500 bg-white p-2 aspect-square overflow-hidden"
        target={`${internalLink ? "" : "_blank"}`}
        rel={`${internalLink ? "" : "noopener noreferrer"}`}
      >
        <div className='h-full w-full'>
          <div className='h-2/3 overflow-hidden flex items-center'>
            <img
              className="h-full w-full text-xl object-contain rounded-t-md"
              src={pathAsAbsolute(fetchFromDataAttribute(logo).url)}
            />
          </div>
          <div className='h-1/3 flex justify-center items-center'>
            <h3 className="md:text-xl xl:text-2xl text-center font-medium">
              {titre}
            </h3>
          </div>
        </div>
      </a>
    </Link>
  );
};

QuickAccess.propTypes = {
  quickAccesses: PropTypes.arrayOf(
    PropTypes.shape({
      titre: PropTypes.string,
      lien: PropTypes.string,
      logo: PropTypes.shape({})
    })
  )
};

QuickAccess.defaultProps = {
  quickAccesses: []
};

export default QuickAccess;
