import React from "react";
import PropTypes from "prop-types";

import Icon from "@mui/material/Icon";

const ButtonDocument = ({ color, text, src }) => {
  return (
    <div className={"w-full"}>
      <a
        href={src}
        target={"_blank"}
        className={`bg-${color} w-full flex items-center gap-2 justify-center text-center text-white text-lg p-2 font-bold rounded-lg hover:opacity-75 transition-all`}
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
  src: PropTypes.string
};

ButtonDocument.defaultProps = {
  color: "",
  text: "",
  src: ""
};

export default ButtonDocument;
