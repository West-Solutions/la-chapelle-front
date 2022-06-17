import React from "react";
import PropTypes from "prop-types";

import Image from "next/image";

import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";


const StrapiImageGallery = ( { images, Affichage, isColumn } ) => {

  let carrouselClass = "max-h-60 sm:max-h-80 md:max-h-96 lg:max-h-128 xl:max-h-144 shadow-normal rounded-md mx-2";
  let galleryClass = "justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 xl:gap-4 mx-2";

  if (isColumn) {
    carrouselClass= "max-h-160 shadow-normal rounded-md mx-2";
    galleryClass= "justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-2 mx-2 mb-2";
  }

  return Affichage==="Carrousel" ? (
    <Carousel
      infiniteLoop
      className="w-full px-2"
      centerMode
      centerSlidePercentage={85}
      statusFormatter={(current, total) => `${current} / ${total}`}
      transitionTime={300}
      thumbWidth={80}
      useKeyboardArrows={true}
      swipeScrollTolerance={25}
      showThumbs={false}
    >
      {images && images.data.map(image => {
        return (
          <div key={`slide-${image.attributes.url}`} className={`${carrouselClass}`}>
            <div className="rounded-md relative">
              <Image
                className="rounded-md"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                src={process.env.NEXT_PUBLIC_BACK_URL+image.attributes.url}
              />
            </div>
          </div>
        );
      })}
    </Carousel>
  ) : (
    <div className={galleryClass}>
      {images && images.data.map(image => {
        return (
          <div
            key={image.attributes.url}
            className={"object-center object-cover rounded-md shadow-normal w-full h-full aspect-square relative"}
          >
            <Image
              width="100%"
              height="100%"
              layout="responsive"
              sizes="100%"
              style={{ "borderRadius": "6px" }}
              objectFit="cover"
              objectPosition="center"
              src={process.env.NEXT_PUBLIC_BACK_URL+image.attributes.url}
            />
          </div>
        );
      }
      )}
    </div>
  );
};

StrapiImageGallery.propTypes = {
  Affichage: PropTypes.string,
  images: PropTypes.shape([]),
  isColumn: PropTypes.bool,
};

export default StrapiImageGallery;
