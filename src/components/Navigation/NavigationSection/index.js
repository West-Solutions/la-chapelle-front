import React from "react";
import PropTypes from "prop-types";

const NavigationSection = ({ item }) => (
  <div>
    <button className="text-bold bg-orange-500" >
      {item.title}
    </button>
    {
      item.items &&
      <ul>
        {
          item.items.map(item => {
            return <li className="bg-purple-500" key={`${item.uiRouterKey}-${item.id}`}>{item.title}</li>;
          })
        }
      </ul>
    }
  </div>
);


NavigationSection.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    items: PropTypes.arrayOf(
      PropTypes.object
    ),
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    uiRouterKey: PropTypes.string.isRequired,
  }).isRequired
};


export default NavigationSection;
