import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

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
    document.addEventListener("mousedown", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  }, [subDropDown]);

  const ref = useRef();

  return (
    <div
      className={`bg-${color} ${dropdown ? "show" : "hidden"}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => setSubDropdown((prev) => !prev)}
      ref={ref}
    >
      {
        item.type ==="WRAPPER" ? (
          <button
            className="text-white w-full text-xl text-center p-2 font-semibold"
            type="button"
          >
            {item.title}
          </button>
        ) : (
          <Link
            href={item.path}
            passHref
            className="text-white text-xl text-center p-2 font-semibold"
          >
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
        <div className={`md:absolute ${openingSide}-full flex flex-col shadow-normal top-0 bg-${color} ${subDropDown ? "show" : "hidden"}`}>
          {
            item.items.map(subItem => {
              return (
                <Link
                  key={`${subItem.uiRouterKey}-${subItem.id}`}
                  href={subItem.path}
                >
                  <a
                    target={subItem.external ? "_blank" : ""}
                    rel={subItem.external ? "noopener noreferrer" : ""}
                    className="text-white text-xl text-center py-2 px-4"
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
