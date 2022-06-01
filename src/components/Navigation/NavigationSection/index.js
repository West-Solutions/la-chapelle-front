import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const NavigationSection = ({ item, dropdown }) => {
  return (
    <div className={`dropdown ${dropdown ? "show" : "hidden"}`}>
      {
        item.type ==="WRAPPER" ? (
          <h3 className="text-white font-semibold  underline" >
            {item.title}
          </h3>
        ) : (
          <Link
            href={item.path}
          >
            <a className="text-white font-semibold  underline" >
              {item.title}
            </a>
          </Link>

        )
      }
      {
        item.items &&
        <ul>
          {
            item.items.map(item => {
              return <li className="text-white cursor-pointer " key={`${item.uiRouterKey}-${item.id}`}>
                <Link
                  href={item.path}
                >
                  <a>
                    {item.title}
                  </a>
                </Link>
              </li>;
            })
          }
        </ul>
      }
    </div>
  );
};


NavigationSection.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    items: PropTypes.arrayOf(
      PropTypes.object
    ),
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    uiRouterKey: PropTypes.string.isRequired,
  }).isRequired,
  dropdown: PropTypes.bool.isRequired
};


export default NavigationSection;
