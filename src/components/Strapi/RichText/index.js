import React from "react";
import PropTypes from "prop-types";

import { rewriteImageSrc } from "@Utils/strapi/image";

const StrapiParagraph = ({ text }) => {

  // Will rewrite the image tag src to the correct url
  const baseUrl = process.env.NEXT_PUBLIC_BACK_URL;
  const parsedText = rewriteImageSrc(text, baseUrl);

  return (
    <div
      className="ck-content w-full"
      dangerouslySetInnerHTML={{ __html: parsedText }}
    />
  );
};

StrapiParagraph.propTypes = {
  text: PropTypes.string.isRequired
};

export default StrapiParagraph;
