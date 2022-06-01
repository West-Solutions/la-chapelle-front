import React from "react";
import PropTypes from "prop-types";

import { cleanNavigationItems } from "@Utils/strapi/navigation";

import MainNavigationButton from "./MainNavigationButton";

const Navigation = ({ items }) => {
  const cleanItems = cleanNavigationItems(items);
  return (
    <nav className={"header flex justify-around"}>
      {
        cleanItems.map(item => {
          return <MainNavigationButton key={`${item.uiRouterKey}-${item.id}`} item={item} />;
        })
      }
    </nav>
  );
};

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};


export default Navigation;
