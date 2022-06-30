import React from "react";
import PropTypes from "prop-types";

import { pathAsAbsolute } from "@Utils/strapi/media";
import { fetchFromDataAttribute } from "@Utils/strapi/core";

import ButtonDocument from "@Components/Controls/Button/Document";

const StrapiDocument = ({ description, sectionColor, position, document }) => {

  return (
    <div className={"w-full"}>
      <ButtonDocument
        color={sectionColor}
        text={description}
        src={pathAsAbsolute(fetchFromDataAttribute(document).url)}
        position={position}
      />
    </div>
  );
};

StrapiDocument.propTypes = {
  description: PropTypes.string,
  sectionColor: PropTypes.string,
  position: PropTypes.shape({}),
  document: PropTypes.shape({
    data: PropTypes.shape({
      attributes: PropTypes.shape({
        url: PropTypes.string
      })
    })
  })
};

export default StrapiDocument;
