import React from "react";
import PropTypes from "prop-types";

import ButtonLink from "@Components/Controls/Button/Link";

import { fetchFromDataAttribute } from "@Utils/strapi/core";


const StrapiLink = ({ description, lien, sectionColor, position }) => {
  const listPosition = fetchFromDataAttribute(position).value === "left" ? "start" :
    fetchFromDataAttribute(position).value === "right" ? "end" : "center";
  return (
    <ButtonLink
      text={description}
      src={lien}
      color={sectionColor}
      position={listPosition}
    />
  );
};

StrapiLink.propTypes = {
  description: PropTypes.string,
  lien: PropTypes.string,
  sectionColor: PropTypes.string,
  position: PropTypes.shape({}),
};

export default StrapiLink;
