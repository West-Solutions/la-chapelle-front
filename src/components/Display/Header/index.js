import React from "react";
import PropTypes from "prop-types";
import Navigation from "@Components/Navigation";

const Header = ({ className, app }) => {
  return (
    <header className={`header bg-blue-400 ${className}`}>
      <div className="p-8">Header information to be updated</div>
      <Navigation items={app.navigation} />
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  app: PropTypes.shape({
    navigation: PropTypes.arrayOf()
  }).isRequired
};

Header.defaultProps = {
  className: ""
};

export default Header;