import React from "react";
import PropTypes from "prop-types";


const StrapiImage = ({ legend, src, showLegend }) => {
  return (
    <div className={"w-full justify-center p-2"}>
      <img
        key={`${src}-${legend}`}
        className={"w-full rounded-md shadow-normal mb-2"}
        src={process.env.NEXT_PUBLIC_BACK_URL+src.data.attributes.url} />
      {showLegend && <p className={"text-center text-gray-600 text-xs"}>{legend}</p>}
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
