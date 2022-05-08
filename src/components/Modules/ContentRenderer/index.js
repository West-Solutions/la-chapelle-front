import React from "react";
import PropTypes from "prop-types";

import Title from "@StrapiComponents/Title";
import RichText from "@StrapiComponents/RichText";

const Components = {
  "textes.title": Title,
  "textes.rich-text": RichText,
};

const ContentRenderer = ({ component }) => {
  const { __component } = component;

  // Means it's not a valid component
  if (!__component) return null;
  const Component = Components[__component];

  if (Component) return <Component {...component} />;

  return null;
};

ContentRenderer.propTypes = {
  component: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    __component: PropTypes.string,
  }).isRequired
};

export default ContentRenderer;
