import React from "react";
import PropTypes from "prop-types";

import { getColor } from "@StrapiUtils/color";
import { getPosition } from "@StrapiUtils/position";

const StrapiTitle = ({ text, semantic, color, position }) => {

  const colorClass = getColor(color);
  const positionClass = getPosition(position);

  const findHtmlTag = (text, semantic, className) => {
    switch (semantic) {
    case "h1":
      return <h1 className={className}>{text}</h1>;
    case "h2":
      return <h2 className={className}>{text}</h2>;
    case "h3":
      return <h3 className={className}>{text}</h3>;
    case "h4":
      return <h4 className={className}>{text}</h4>;
    case "h5":
      return <h5 className={className}>{text}</h5>;
    case "h6":
      return <h6 className={className}>{text}</h6>;
    default:
      return <p className={className}>{text}</p>;
    }
  };

  return (
    <div className={`w-full text-${colorClass}`}>
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
