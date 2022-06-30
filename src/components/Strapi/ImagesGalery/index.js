import React from "react";
import PropTypes from "prop-types";

import { Carousel } from "react-responsive-carousel";

import { pathAsAbsolute } from "@Utils/strapi/media";
import { fetchFromDataAttribute } from "@Utils/strapi/core";

import Image from "@Display/Image";

import "react-responsive-carousel/lib/styles/carousel.min.css";


const StrapiImageGallery = ( { images, Affichage, isColumn } ) => {

  const [selectedImage, setSelectedImage] = React.useState(null);

  let carrouselClass = "shadow-normal max-h-60 sm:max-h-80 md:max-h-96 lg:max-h-128 xl:max-h-144 rounded-md overflow-hidden mx-2 cursor-pointer";
  let galleryClass = "justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 xl:gap-4";

  if (isColumn) {
    carrouselClass= "max-h-60 sm:max-h-80 md:max-h-60 lg:max-h-80 xl:max-h-112 rounded-md overflow-hidden mx-2 cursor-pointer";
    galleryClass= "justify-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-2";
  }

  return Affichage === "Carrousel" ? (
    <>
      <Carousel
        infiniteLoop
        className="w-full rounded-md overflow-hidden"
        centerMode
        centerSlidePercentage={85}
        statusFormatter={(current, total) => `${current} / ${total}`}
        transitionTime={300}
        thumbWidth={80}
        useKeyboardArrows={true}
        swipeScrollTolerance={25}
        showThumbs={false}
        onClickItem={index => {
          setSelectedImage(images.data[index]);
        }}
      >
        {images && images.data.map(image => {
          return (
            <div key={`slide-${pathAsAbsolute(fetchFromDataAttribute(image).url)}`} className={carrouselClass}>
              <Image
                src={image}
                imageClassName="object-center object-cover max-h-144"/>
            </div>
          );
        })}
      </Carousel>
      {selectedImage && (
        <Image
          src={selectedImage}
          imageClassName="object-center object-cover max-h-144"
          isFullscreen
          onCloseFullscreen={() => setSelectedImage(null)}
        />
      )}
    </>
  ) : (
    <div className={galleryClass}>
      {images && images.data.map((image) => {
        return (
          <div key={image.attributes.url} className="relative h-full w-full">
            <Image
              src={image}
              containerClassName="rounded-md shadow-normal aspect-square"
              imageClassName="relative object-center object-cover aspect-square w-full h-full z-10"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 rounded-md bg-gray-300 animate-pulse z-0" />
          </div>
        );}
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
