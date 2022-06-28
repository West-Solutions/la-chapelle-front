import React from "react";
import PropTypes from "prop-types";

import Title from "@Display/Title";

const StrapiTitle = ({ text, semantic, sectionColor, position }) => {
  return <Title text={text} semantic={semantic} color={sectionColor} position={position}/>;
};

StrapiTitle.propTypes = {
  text: PropTypes.string,
  sectionColor: PropTypes.string,
  position: PropTypes.object,
  semantic: PropTypes.string
};

export default StrapiTitle;
