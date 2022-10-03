import React from "react";
import PropTypes from "prop-types";

import Icon from "@mui/material/Icon";

import { getPosition } from "@StrapiUtils/position";

const ButtonDocument = ({ color, text, src, position }) => {
  const positionValue = getPosition(position);
  const linkPosition = positionValue === "left" ? "justify-start" : positionValue === "right" ? "justify-end" : "justify-center";
  return (
    <div className={`w-full flex ${linkPosition}`}>
      <a
        href={src}
        target={"_blank"}
        className={`bg-${color} w-full max-w-lg flex items-center gap-2 justify-center text-center text-white text-lg p-2 font-bold rounded-lg hover:opacity-90 hover:shadow-normal transition-all`}
        rel="noreferrer"
      >
        <Icon>picture_as_pdf_icon</Icon><span>{text}</span>
      </a>
    </div>
  );
};

ButtonDocument.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  src: PropTypes.string,
  position: PropTypes.shape({})
};

ButtonDocument.defaultProps = {
  color: "",
  text: "",
  src: "",
  position: {
    data: {
      attributes: {
        value: "center"
      }
    }
  }
};

export default ButtonDocument;
