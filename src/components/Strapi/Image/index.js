import React from "react";
import PropTypes from "prop-types";

import { getPosition } from "@StrapiUtils/position";

import Image from "@Display/Image";

const StrapiImage = ({ legend, src, showLegend, position }) => {
  const positionValue = getPosition(position);

  const imagePosition = positionValue === "left" ? "justify-start" : positionValue === "right" ? "justify-end" : "justify-center";
  return (
    <div className="w-full">
      <Image
        src={src}
        containerClassName={`flex ${imagePosition}`}
        imageClassName="max-h-[80vh] shadow-normal"
        legend={legend}
        showLegend={showLegend} />
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
