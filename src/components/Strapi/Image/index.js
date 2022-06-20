import React from "react";
import PropTypes from "prop-types";

import { pathAsAbsolute } from "@Utils/strapi/media";
import { fetchFromDataAttribute } from "@Utils/strapi/core";

const StrapiImage = ({ legend, src, showLegend }) => {
  return (
    <div className={"w-full justify-center mt-10"}>
      <img
        key={`${src}-${legend}`}
        className={"w-full rounded-md shadow-normal"}
        src={pathAsAbsolute(fetchFromDataAttribute(src).url)}
      />
      {showLegend && <p className={"text-center text-gray-600 text-xs mt-2"}>{legend}</p>}
    </div>
  );
};

StrapiImage.propTypes = {
  legend: PropTypes.string,
  src: PropTypes.shape({
    data: PropTypes.shape({
      attributes: PropTypes.shape({
        url: PropTypes.string
      })
    })
  }),
  showLegend: PropTypes.bool
};

export default StrapiImage;
