import React from "react";
import PropTypes from "prop-types";

import Paragraph from "@StrapiComponents/Paragraph";

const Components = {
  Paragraph
};

const ContentRenderer = ({ components }) => {
  const { id, __component, ...rest } = components;

  // Means it's not a valid component
  if (!id || !__component) return null;
  const desiredComponents = Object.keys(rest);

  // Means we have no components to render
  if (desiredComponents.length === 0) return null;

  return (
    <React.Fragment>
      {desiredComponents.map((component, index) => {
        const Component = Components[component];
        if (Component)
          return <Component key={`strapi-${component}-${index}`} component={rest[component]} />;
      })}
    </React.Fragment>
  );
};

ContentRenderer.propTypes = {
  components: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    __component: PropTypes.string,
  }).isRequired
};

export default ContentRenderer;
