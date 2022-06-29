import React from "react";
import PropTypes from "prop-types";

import { pathAsAbsolute } from "@Utils/strapi/media";
import { fetchFromDataAttribute } from "@Utils/strapi/core";

import { getPosition } from "@StrapiUtils/position";

const StrapiImage = ({ legend, src, showLegend, position }) => {

  const positionValue = getPosition(position);

  const imagePosition = positionValue === "left" ? "justify-start" : positionValue === "right" ? "justify-end" : "justify-center";
  return (
    <div className={`w-full flex ${imagePosition}`}>
      <img
        key={`${src}-${legend}`}
        className="w-auto rounded-md shadow-normal  max-h-[80vh]"
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
