import React from "react";
import PropTypes from "prop-types";

import { getPosition } from "@StrapiUtils/position";

const Title = ({ text, semantic, color, position }) => {
  const positionClass = getPosition(position);

  const findHtmlTag = (text, semantic, className) => {
    switch (semantic) {
    case "H1":
      return <h1 className={`${className} text-4xl my-6 lg:text-6xl font-semibold`}>{text}</h1>;
    case "H2":
      return <h2 className={`${className}  text-3xl my-4 lg:text-4xl font-semibold`}>{text}</h2>;
    case "H3":
      return <h3 className={`${className} text-2xl my-3 lg:text-3xl font-semibold`}>{text}</h3>;
    case "H4":
      return <h4 className={`${className} text-xl my-3 lg:text-2xl font-semibold`}>{text}</h4>;
    case "H5":
      return <h5 className={`${className} text-lg my-2 lg:text-xl font-semibold`}>{text}</h5>;
    case "H6":
      return <h6 className={`${className} text-md my-2 lg:text-lg font-bold`}>{text}</h6>;
    default:
      return <p className={className}>{text}</p>;
    }
  };

  return (
    <div className={`w-full text-${color}`}>
      {findHtmlTag(text, semantic, `text-${positionClass}`)}
    </div>
  );
};

Title.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  position: PropTypes.string,
  semantic: PropTypes.string
};

export default Title;
