import React from "react";
import PropTypes from "prop-types";

import ButtonLink from "@Components/Controls/Button/Link";

const StrapiLinkList = ({ link, position, row, sectionColor }) => {
  let listLinkClass = "w-full grid grid-cols-1 gap-2";

  if (row) {
    listLinkClass = "w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-2";
  }

  return (
    <div className={listLinkClass}>
      {link.map(({ id, lien, description }) => (
        <ButtonLink
          key={`${id}-${description}`}
          text={description}
          src={lien}
          color={sectionColor}
          position={position}
        />
      ))}
    </div>
  );
};

StrapiLinkList.propTypes = {
  link: PropTypes.arrayOf(),
  position: PropTypes.shape({}),
  row: PropTypes.bool,
  sectionColor: PropTypes.string
};

export default StrapiLinkList;
