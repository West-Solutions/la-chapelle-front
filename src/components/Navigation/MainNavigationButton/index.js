import React, { useState } from "react";
import PropTypes from "prop-types";

import NavigationSection from "../NavigationSection";

const MainNavigationButton = ({ item }) => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <div
      className={`flex flex-col bg-${item.slug}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        className="font-bold text-white"
        type="button"
        aria-haspopup="menu"
        aria-expanded={dropdown ? "true" : "false"}
        onClick={() => setDropdown((prev) => !prev)}
      >
        {item.title}
      </button>
      {
        item.items.map(item => {
          return <NavigationSection key={`${item.uiRouterKey}-${item.id}`} item={item} dropdown={dropdown} />;
        })
      }
    </div>
  );
};


MainNavigationButton.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    items: PropTypes.arrayOf(
      PropTypes.object
    ),
    path: PropTypes.string.isRequired,
    slug: PropTypes.string,
    title: PropTypes.string.isRequired,
    uiRouterKey: PropTypes.string.isRequired,
  }).isRequired
};

MainNavigationButton.defaultProps = {
  item: {
    items: [],
    slug: "primary",
  }
};

export default MainNavigationButton;
