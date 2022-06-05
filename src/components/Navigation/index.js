import React from "react";
import PropTypes from "prop-types";

import { cleanNavigationItems } from "@Utils/strapi/navigation";

import MainNavigationButton from "./MainNavigationButton";

const Navigation = ({ items }) => {
  const cleanItems = cleanNavigationItems(items);
  return (
    <div className="relative">
      <nav className={"header flex shadow-normal"}>
        {
          cleanItems.map((item, index) => {
            const openingSide = index > cleanItems.length/2 ? "right" : "left";
            return <MainNavigationButton key={`${item.uiRouterKey}-${item.id}`} item={item} openingSide={openingSide} />;
          })
        }
      </nav>
    </div>
  );
};

Navigation.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};


export default Navigation;
