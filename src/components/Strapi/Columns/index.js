import React from "react";
import PropTypes from "prop-types";

import ComponentRenderer from "@Modules/ComponentRenderer";

const StrapiColumns = ({ left, right }) => {
  const renderCol = components => {
    if (!components || !components.length) return null;
    return  components.map(component => {
      return <ComponentRenderer key={component.id} component={component} />;
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      <div className="w-full bg-orange-400">
        {renderCol(left)}
      </div>
      <div className="w-full bg-green-300">
        {renderCol(right)}
      </div>
    </div>
  );
};

StrapiColumns.propTypes = {
  left: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    __component: PropTypes.string,
  })),
  right: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    __component: PropTypes.string,
  })),
};

export default StrapiColumns;
