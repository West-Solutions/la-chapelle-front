import React from "react";
import PropTypes from "prop-types";

const Navigation = ({ className }) => {
  return (
    <nav className={`header h-16 bg-green-600 ${className}`}>
      This is the navigation
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string
};

Navigation.defaultProps = {
  className: ""
};

export default Navigation;