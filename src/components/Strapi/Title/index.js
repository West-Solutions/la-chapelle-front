import React from "react";
import PropTypes from "prop-types";

import Title from "@Display/Title";

const StrapiTitle = ({ text, semantic, color, position }) => {
  return <Title text={text} semantic={semantic} color={color} position={position} />;
};

StrapiTitle.propTypes = {
  text: PropTypes.string,
  color: PropTypes.object,
  position: PropTypes.object,
  semantic: PropTypes.string
};

export default StrapiTitle;
