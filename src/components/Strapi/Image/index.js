import React from "react";
import PropTypes from "prop-types";

import Image from "next/image";

const StrapiImage = ({ legend, src, showLegend }) => {
  return (
    <div className="w-full justify-center">
      <div className="w-full rounded-md shadow-normal relative">
        <Image
          width="100%"
          height="100%"
          layout="responsive"
          style={{ "borderRadius": "6px" }}
          objectFit="cover"
          objectPosition="center"
          src={process.env.NEXT_PUBLIC_BACK_URL+src.data.attributes.url}
        />
      </div>
      {showLegend && <p className={"text-center text-gray-600 text-xs mt-2"}>{legend}</p>}
    </div>
  );
};

StrapiImage.propTypes = {
  legend: PropTypes.string,
  src: PropTypes.shape({
    data: PropTypes.shape({
      attributes: PropTypes.shape({
        url: PropTypes.string
      })
    })
  }),
  showLegend: PropTypes.bool
};

export default StrapiImage;
