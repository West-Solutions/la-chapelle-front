import React from "react";
import PropTypes from "prop-types";


const StrapiImageGallery = ({ images }) => {
  return images ?(
    <div className={"w-full flex flex-wrap justify-center "}>
      {images && images.data.map(image => {
        return <img
          key={image.attributes.url}
          className={"w-64 h-64 object-cover rounded-md shadow-normal m-2"}
          src={process.env.NEXT_PUBLIC_BACK_URL+image.attributes.url} />;
      }
      )}
    </div>
  ):(
    <div className={"w-full"}>
      no images
    </div>
  );
};

StrapiImageGallery.propTypes = {
  images: PropTypes.shape([])
};

export default StrapiImageGallery;
