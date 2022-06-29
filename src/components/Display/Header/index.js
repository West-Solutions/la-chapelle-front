import React from "react";
import PropTypes from "prop-types";

import Hero from "@Components/Display/Hero";
import Navigation from "@Components/Navigation";

const Header = ({ app }) => {
  const [top, setTop] = React.useState(0);
  const heroRef = React.useRef(null);

  React.useEffect(() => {
    if (window && heroRef.current) {
      const heroHeight = heroRef.current.offsetHeight;
      if (heroHeight) setTop(-heroHeight);
    }
  }, []);

  return (
    <header className="header sticky bg-primary md:bg-blue-400 z-[500]" style={{ top }}>
      <div ref={heroRef}><Hero config={app.config} contact={app.contact}/></div>
      <Navigation items={app.navigation} config={app.config} />
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  app: PropTypes.shape({
    config: PropTypes.shape({}),
    contact: PropTypes.shape({}),
    navigation: PropTypes.arrayOf(
      PropTypes.shape({})
    )
  }).isRequired
};

Header.defaultProps = {
  className: ""
};

export default Header;