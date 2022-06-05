import React, { useState } from "react";
import PropTypes from "prop-types";

import NavigationSection from "../NavigationSection";

const MainNavigationButton = ({ item, openingSide }) => {
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <div
      className={`flex flex-1 flex-col h-16 bg-${item.slug}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        className="font-bold text-white h-full text-lg p-2 uppercase"
        type="button"
        aria-haspopup="menu"
        aria-expanded={dropdown ? "true" : "false"}
        onClick={() => setDropdown((prev) => !prev)}
      >
        {item.title}
      </button>
      <div className="relative">
        <div className="absolute left-0 right-0 shadow-normal">
          {
            item.items.map(subItem => {
              return <NavigationSection key={`${subItem.uiRouterKey}-${subItem.id}`} item={subItem} dropdown={dropdown} color={item.slug} openingSide={openingSide}/>;
            })
          }
        </div>
      </div>
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
  }).isRequired,
  openingSide: PropTypes.string
};

MainNavigationButton.defaultProps = {
  item: {
    items: [],
    slug: "primary",
  }
};

export default MainNavigationButton;
