import React from "react";
import PropTypes from "prop-types";

import { getColor } from "@StrapiUtils/color";
import { getPosition } from "@StrapiUtils/position";

const StrapiTitle = ({ text, semantic, color, position }) => {

  const colorClass = getColor(color);
  const positionClass = getPosition(position);

  const findHtmlTag = (text, semantic, className) => {
    switch (semantic) {
    case "H1":
      return <h1 className={`${className} text-4xl`}>{text}</h1>;
    case "H2":
      return <h2 className={`${className} text-3xl`}>{text}</h2>;
    case "H3":
      return <h3 className={`${className} text-xl`}>{text}</h3>;
    case "H4":
      return <h4 className={`${className} text-lg`}>{text}</h4>;
    case "H5":
      return <h5 className={className}>{text}</h5>;
    case "H6":
      return <h6 className={className}>{text}</h6>;
    default:
      return <p className={className}>{text}</p>;
    }
  };

  return (
    <div className={`w-full py-2 text-${colorClass}`}>
      {findHtmlTag(text, semantic, `text-${positionClass}`)}
    </div>
  );
};

StrapiTitle.propTypes = {
  text: PropTypes.string,
  color: PropTypes.object,
  position: PropTypes.object,
  semantic: PropTypes.string
};

export default StrapiTitle;
