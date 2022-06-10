import React from "react";
import PropTypes from "prop-types";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";


const StrapiImageGallery = ( { images, Affichage } ) => {

  return Affichage==="Carrousel" ? (
    <Carousel
      infiniteLoop
      className="w-full px-2"
      centerMode
      centerSlidePercentage={85}
      statusFormatter={(current, total) => `${current} / ${total}`}
      transitionTime={800}
      thumbWidth={80}
    >
      {images && images.data.map(image => {
        return (
          <div key={`slide-${image.attributes.url}`} className="max-h-160 shadow-normal rounded-md mx-2 mb-2">
            <img alt="" src={process.env.NEXT_PUBLIC_BACK_URL+image.attributes.url} className="rounded-md shadow-normal object-center object-cover max-h-60 sm:max-h-80 md:max-h-96 lg:max-h-128 xl:max-h-144"/>
          </div>
        );
      })}
    </Carousel>
  ) : (
    <div className={"justify-center grid grid-cols-5 gap-2 xl:gap-4 mx-2"}>
      {images && images.data.map(image => {
        return <img
          key={image.attributes.url}
          className={"object-center object-cover rounded-md shadow-normal w-full h-full aspect-square"}
          src={process.env.NEXT_PUBLIC_BACK_URL+image.attributes.url} />;
      }
      )}
    </div>
  );
};

StrapiImageGallery.propTypes = {
  Affichage: PropTypes.string,
  images: PropTypes.shape([])
};

export default StrapiImageGallery;
