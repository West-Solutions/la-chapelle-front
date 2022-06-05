import React from "react";
import PropTypes from "prop-types";

import NavigationSection from "../NavigationSection";

const MainNavigationButton = ({ item }) => {
  return (
    <div>
      <button className={`text-bold bg-${item.slug}`} >
        {item.title}
      </button>
      {
        item.items.map(item => {
          return <NavigationSection key={`${item.uiRouterKey}-${item.id}`} item={item} />;
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
