import React from "react";
import PropTypes from "prop-types";

import { pathAsAbsolute } from "@Utils/strapi/media";
import { fetchFromDataAttribute } from "@Utils/strapi/core";

import { getPosition } from "@StrapiUtils/position";

const StrapiImage = ({ legend, src, showLegend, position }) => {

  const [fullscreen, setFullscreen] = React.useState(false);

  const positionValue = getPosition(position);

  const imagePosition = positionValue === "left" ? "justify-start" : positionValue === "right" ? "justify-end" : "justify-center";
  return (
    <div className={`w-full flex ${imagePosition}`}>
      <img
        className="w-auto rounded-md shadow-normal cursor-pointer max-h-[80vh]"
        src={pathAsAbsolute(fetchFromDataAttribute(src).url)}
        onClick={() => setFullscreen(!fullscreen)}
      />
      {showLegend && <p className={"text-center text-gray-600 text-xs mt-2"}>{legend}</p>}
      <div
        className={`absolute ${fullscreen ? "block" : "hidden"} z-[9999] w-full left-0 right-0 cursor-pointer -translate-y-1/4`}
        onClick={() => setFullscreen(!fullscreen)}
      >
        <img
          className="rounded-md shadow-normal mx-auto w-2/3"
          src={pathAsAbsolute(fetchFromDataAttribute(src).url)}
        />
      </div>
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
  showLegend: PropTypes.bool,
  position: PropTypes.shape({})
};

export default StrapiImage;
