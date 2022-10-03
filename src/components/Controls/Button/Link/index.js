import React from "react";
import PropTypes from "prop-types";

import Link from "next/link";

import { isRelativeLink } from "@Utils/core";
import { getPosition } from "@StrapiUtils/position";

const ButtonLink = ({ text, src, color, position }) => {

  const isInternal = isRelativeLink(src);
  const positionValue = getPosition(position);
  const linkPosition = positionValue === "left" ? "justify-start" : positionValue === "right" ? "justify-end" : "justify-center";

  return (
    <div className={`w-full flex ${linkPosition}`}>
      { isInternal ? (
        <Link href={src}>
          <a
            className={`w-full max-w-lg self-center text-center text-white bg-${color} p-2 rounded-md font-bold shadow-md hover:shadow-normal hover:opacity-80 transition-all`}
          >
            {text}
          </a>
        </Link>
      ) : (
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full max-w-lg self-center text-center text-white bg-${color} p-2 rounded-md font-bold shadow-md hover:shadow-normal hover:opacity-80 transition-all`}
        >
          {text}
        </a>
      )}
    </div>
  );
};

ButtonLink.propTypes = {
  text: PropTypes.string,
  src: PropTypes.string,
  color: PropTypes.string,
  position: PropTypes.shape({})
};

ButtonLink.defaultProps = {
  color: "",
  text: "",
  src: "",
  position: {
    data: {
      attributes: {
        value: "justify-center"
      }
    }
  }
};

export default ButtonLink;
