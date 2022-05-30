import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";


const StrapiLink = ({ description, lien }) => {

  return (
    <div className={"w-full"}>
      <Link href={lien}>
        <a className="w-8 color-orange h-8 rounded">
          {description}
        </a>
      </Link>
    </div>
  );
};

StrapiLink.propTypes = {
  description: PropTypes.string,
  lien: PropTypes.string
};

export default StrapiLink;
