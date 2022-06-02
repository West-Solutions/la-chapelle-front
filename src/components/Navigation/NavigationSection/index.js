import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const NavigationSection = ({ item, dropdown, color, openingSide }) => {

  const [subDropDown, setSubDropdown] = useState(false);
  const onMouseEnter = () => {
    setSubDropdown(true);
  };

  const onMouseLeave = () => {
    setSubDropdown(false);
  };
  return (
    <div
      className={`bg-${color} ${dropdown ? "show" : "hidden"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => setSubDropdown((prev) => !prev)}
    >
      {
        item.type ==="WRAPPER" ? (
          <button
            className="text-white w-full text-xl text-center p-2 font-semibold"
            type="button"
            aria-haspopup="menu"
            aria-expanded={subDropDown ? "true" : "false"} >
            {item.title}
          </button>
        ) : (
          <Link href={item.path} passHref >
            <a
              className="text-white text-xl text-center p-2 font-semibold"
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
        <ul className={`absolute ${openingSide}-full shadow-normal top-0 p-2 px-4 bg-${color} ${subDropDown ? "show" : "hidden"}`}>
          {
            item.items.map(subItem => {
              return <li className="text-white cursor-pointer text-center whitespace-nowrap py-4" key={`${subItem.uiRouterKey}-${subItem.id}`}>
                {subItem.external ? (
                  <Link href={subItem.path} passHref >
                    <a target="_blank" rel="noopener noreferrer">
                      {subItem.title}
                    </a>
                  </Link>
                ) : (
                  <Link href={subItem.path} >
                    <a>
                      {subItem.title}
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
  color: PropTypes.string,
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
  dropdown: PropTypes.bool.isRequired,
  openingSide: PropTypes.string
};


export default NavigationSection;
