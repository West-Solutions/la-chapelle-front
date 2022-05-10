import React from "react";
import PropTypes from "prop-types";

const Header = ({ className }) => {
  return (
    <header className={`header h-60 bg-blue-600 ${className}`}>
      This is the header
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string
};

Header.defaultProps = {
  className: ""
};

export default Header;