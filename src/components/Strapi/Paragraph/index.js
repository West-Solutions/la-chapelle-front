import React from "react";
import PropTypes from "prop-types";

const StrapiParagraph = ({ component }) => {
  return <div dangerouslySetInnerHTML={{ __html: component }} />;
};

StrapiParagraph.propTypes = {
  component: PropTypes.string.isRequired
};

export default StrapiParagraph;
