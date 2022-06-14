import React from "react";
import PropTypes from "prop-types";

import Hero from "@Components/Display/Hero";
import Navigation from "@Components/Navigation";

const Header = ({ className, app }) => {
  const [top, setTop] = React.useState(0);
  const heroRef = React.useRef(null);

  React.useEffect(() => {
    if (window && heroRef.current) {
      const heroHeight = heroRef.current.offsetHeight;
      if (heroHeight) setTop(-heroHeight);
    }
  }, []);

  return (
    <header className={`header sticky bg-primary md:bg-blue-400 z-50 ${className}`} style={{ top }}>
      <div ref={heroRef}><Hero /></div>
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