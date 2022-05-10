import React from "react";
import PropTypes from "prop-types";

import style from "./index.module.scss";
import { rewriteImageSrc } from "@Utils/strapi/image";

const StrapiParagraph = ({ text }) => {

  const baseUrl = process.env.NEXT_PUBLIC_BACK_URL;
  const parsedText = rewriteImageSrc(text, baseUrl);

  return <div
    className={style.global}
    dangerouslySetInnerHTML={{ __html: parsedText }}
  />;
};

StrapiParagraph.propTypes = {
  text: PropTypes.string.isRequired
};

export default StrapiParagraph;
