import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { cleanNavigationItems } from "@Utils/strapi/navigation";

import MainNavigationButton from "./MainNavigationButton";

const Navigation = ({ items }) => {
  const cleanItems = cleanNavigationItems(items);
  const [mobileDropdown, setMobileDropdown] = useState(false);

  // initialize the dropdown state for mobile screen
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setMobileDropdown(true);
    }
  }, []);

  // Change the dropdown state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 ) {
        setMobileDropdown(true);
      } else {
        setMobileDropdown(false);
      }
    };
    window.addEventListener("resize", handleResize);
  });

  // Change the dropdown state when user click outside
  useEffect(() => {
    const handler = (event) => {
      if (mobileDropdown && ref.current && !ref.current.contains(event.target) && window.innerWidth < 768) {
        setMobileDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  }, [mobileDropdown]);

  let ref = useRef();

  return (
    <div className="relative">
      <nav className={"header flex flex-col md:flex-row shadow-normal"}  ref={ref}>
        <button
          className="outline-none md:hidden mobile-menu-button m-4 self-end"
          onClick= {() => setMobileDropdown((prev) => !prev)}
        >
          <svg
            className="w-8 h-8 text-white"
            strokeWidth="2"
            viewBox={mobileDropdown ? "2 -3 12 24" : "0 0 24 24"}
            stroke="currentColor"
          >
            {mobileDropdown ? (
              <path d="M 0,0 l 16,16 M 16,0 l -16,16" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        { mobileDropdown && (
          cleanItems.map((item, index) => {
            const openingSide = index > cleanItems.length/2 ? "right" : "left";
            return <MainNavigationButton key={`${item.uiRouterKey}-${item.id}`} item={item} openingSide={openingSide} />;
          })
        )}
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
