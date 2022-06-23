import React from "react";
import PropTypes from "prop-types";

import ButtonLink from "@Components/Controls/Button/Link";

const StrapiLink = ({ description, lien, sectionColor, position }) => {
  return (
    <ButtonLink
      text={description}
      src={lien}
      color={sectionColor}
      position={position}
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
