import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";

import { cleanNavigationItems } from "@Utils/strapi/navigation";

import MainNavigationButton from "./MainNavigationButton";

import { pathAsAbsolute } from "@Utils/strapi/media";
import { fetchFromDataAttribute } from "@Utils/strapi/core";

const Navigation = ({ items, config }) => {
  const cleanItems = cleanNavigationItems(items);
  const { favicon, websiteName } = config;
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
      if (window.innerWidth >= 768) {
        setMobileDropdown(true);
      } else {
        setMobileDropdown(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  // Change the dropdown state when user click outside
  useEffect(() => {
    const handler = (event) => {
      if (
        mobileDropdown &&
        ref.current &&
        !ref.current.contains(event.target) &&
        window.innerWidth < 768
      ) {
        setMobileDropdown(false);
      }
    };
    document.addEventListener("click", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("click", handler);
    };
  }, [mobileDropdown]);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setMobileDropdown(false);
    }
  }, [router.asPath]);

  let ref = useRef();

  return (
    <div className="relative">
      <nav
        className={"header flex flex-col md:flex-row shadow-normal"}
        ref={ref}
      >
        <div className="w-full flex justify-between text-white md:hidden h-16">
          <Link href="/">
            <a className="flex items-center">
              <img
                className="p-2 h-16"
                src={faviconUrl}
                alt={pathAsAbsolute(
                  fetchFromDataAttribute(favicon).alternativeText
                )}
              />
              <span className="w-1/2 text-center">{websiteName}</span>
            </a>
          </Link>
          <button
            className="p-3"
            onClick={() => setMobileDropdown((prev) => !prev)}
            aria-label="Toggle navigation"
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
        </div>

        {mobileDropdown &&
          cleanItems.map((item, index) => {
            const openingSide =
              index > cleanItems.length / 2 ? "left" : "right";
            return (
              <MainNavigationButton
                key={`${item.uiRouterKey}-${item.id}`}
                item={item}
                openingSide={openingSide}
              />
            );
          })}
      </nav>
    </div>
  );
};

Navigation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  config: PropTypes.shape({
    favicon: PropTypes.shape({}),
    websiteName: PropTypes.string,
  }),
};

export default Navigation;
