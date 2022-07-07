import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@mui/material";
import PropTypes from "prop-types";
import Link from "next/link";

import { cleanPath } from "@Utils/strapi/navigation";

const NavigationSection = ({ item, dropdown, color, openingSide }) => {
  const [subDropDown, setSubDropdown] = useState(false);
  const onMouseEnter = () => {
    window.innerWidth >= 1280 && setSubDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth >= 1280 && setSubDropdown(false);
  };

  // Change the dropdown state when user click outside
  useEffect(() => {
    const handler = (event) => {
      if (subDropDown && ref.current && !ref.current.contains(event.target)) {
        setSubDropdown(false);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("click", handler);
    };
  }, [subDropDown]);

  const ref = useRef();

  return (
    <div
      className={`bg-${color} ${dropdown ? "show" : "hidden"} md:relative`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={ref}
    >
      {
        item.type ==="WRAPPER" ? (
          <button
            className={`text-white w-full text-xl text-center p-2 relative font-semibold ${openingSide === "left" ? "md:pl-4" : "md:pr-4"}`}
            type="button"
            onClick={() => setSubDropdown((prev) => !prev)}
          >
            {item.title}
            <div className={`absolute hidden md:block top-2.5  ${openingSide === "left" ? "md:left-1" : "md:right-1"}`}>
              <Icon>{`chevron_${openingSide}`}</Icon>
            </div>
            <div className="absolute block md:hidden top-2 right-2.5">
              <Icon className={`${subDropDown ? "origin-center rotate-90" : ""} transition-all`}>chevron_right</Icon>
            </div>
          </button>
        ) : (
          <Link
            href={cleanPath(item.path)}
            passHref
          >
            <a
              className="text-white text-xl text-center p-2 font-semibold block w-full"
              target={item.external ? "_blank" : ""}
              rel="noopener noreferrer"
            >
              {item.title}
            </a>
          </Link>
        )
      }
      {
        item.items &&
        <div className={`md:absolute ${
          openingSide === "left" ? "right-full shadow-normal-left" : " left-full shadow-normal"
        } flex flex-col top-0 bg-${color} ${subDropDown ? "show" : "hidden"}`}>
          {
            item.items.map(subItem => {
              return (
                <Link
                  key={`${subItem.uiRouterKey}-${subItem.id}`}
                  href={cleanPath(subItem.path)}
                >
                  <a
                    target={subItem.external ? "_blank" : ""}
                    rel={subItem.external ? "noopener noreferrer" : ""}
                    className="text-white text-xl text-center py-2 px-4 whitespace-nowrap"
                  >
                    {subItem.title}
                  </a>
                </Link>
              );
            })
          }
        </div>
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
