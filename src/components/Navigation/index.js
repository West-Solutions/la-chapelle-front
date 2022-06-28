import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { cleanNavigationItems } from "@Utils/strapi/navigation";

import MainNavigationButton from "./MainNavigationButton";

import { pathAsAbsolute } from "@Utils/strapi/media";
import { fetchFromDataAttribute } from "@Utils/strapi/core";

const Navigation = ({ items, config }) => {
  const cleanItems = cleanNavigationItems(items);
  const { favicon } = config;
  const faviconUrl = pathAsAbsolute(fetchFromDataAttribute(favicon).url);

  const [mobileDropdown, setMobileDropdown] = useState(false);

  const router = useRouter();

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
    document.addEventListener("click", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("click", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [mobileDropdown]);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobileDropdown(false);
    }
  },[router.asPath]);

  let ref = useRef();

  return (
    <div className="relative">
      <nav className={"header flex flex-col md:flex-row shadow-normal"}  ref={ref}>
        <div className="w-full flex justify-between text-white md:hidden h-16">
          <Link href="/">
            <a>
              <img
                className="p-2 h-16"
                src={faviconUrl}
              />
            </a>
          </Link>
          <button
            className="p-3"
            onClick= {() => setMobileDropdown((prev) => !prev)}
          >
            {mobileDropdown ? (
              <CloseIcon fontSize="large"/>
            ) : (
              <MenuIcon fontSize="large"/>
            )}
          </button>
        </div>

        { mobileDropdown && (
          cleanItems.map((item, index) => {
            const openingSide = index > cleanItems.length/2 ? "left" : "right";
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
  ).isRequired,
  config: PropTypes.shape({
    favicon: PropTypes.shape({})
  })
};


export default Navigation;
