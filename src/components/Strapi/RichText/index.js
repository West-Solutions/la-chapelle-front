import React from "react";
import PropTypes from "prop-types";

const StrapiParagraph = ({ text }) => {
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
};

StrapiParagraph.propTypes = {
  text: PropTypes.string.isRequired
};

export default StrapiParagraph;
