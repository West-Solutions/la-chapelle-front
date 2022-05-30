import React from "react";
import PropTypes from "prop-types";


const StrapiImageGallery = ({ image }) => {

  return (
    <div className={"w-full"}>
      {image.forEach(image => {
        return <img src={image.src.data.attributes.url} width="200px" height="200px" onError="this.onerror=null; this.src='/upload/fallbackImages';"  />;
      }
      )}
    </div>
  );
};

StrapiImageGallery.propTypes = {
  image: PropTypes.shapeof([])
};

export default StrapiImageGallery;
