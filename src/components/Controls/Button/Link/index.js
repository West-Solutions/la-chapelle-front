import React from "react";
import PropTypes from "prop-types";

import Link from "next/link";

const ButtonLink = ({ text, src, color, position }) => {

  const isInternal = src.startsWith("/");

  return (
    <div className={`w-full flex justify-${position}`}>
      { isInternal ? (
        <Link href={src}>
          <a
            className={`w-full max-w-lg self-center text-center text-white bg-${color} p-2 rounded-md font-bold shadows-lg hover:shadow-normal hover:opacity-80 transition-all`}
          >
            {text}
          </a>
        </Link>
      ) : (
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full max-w-lg self-center text-center text-white bg-${color} p-2 rounded-md font-bold shadows-lg hover:shadow-normal hover:opacity-80 transition-all`}
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
  position: PropTypes.string
};

ButtonLink.defaultProps = {
  color: "",
  text: "",
  src: "",
  position: "start"
};

export default ButtonLink;
