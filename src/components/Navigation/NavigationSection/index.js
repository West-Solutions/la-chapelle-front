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
          <Link href={item.path} passHref >
            <a
              className="text-white font-semibold  underline"
              target="_blank"
              rel="noopener noreferrer"
            >
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
                {item.external ? (
                  <Link href={item.path} passHref >
                    <a target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  </Link>
                ) : (
                  <Link href={item.path} >
                    <a>
                      {item.title}
                    </a>
                  </Link>
                )}
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
    external: PropTypes.bool,
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
