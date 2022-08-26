import React from "react";
import PropTypes from "prop-types";

import { pathAsAbsolute } from "@Utils/strapi/media";
import { fetchFromDataAttribute } from "@Utils/strapi/core";


const Image = ({ src, imageClassName, containerClassName, isFullscreen, onCloseFullscreen }) => {

  const [fullscreen, setFullscreen] = React.useState(isFullscreen);

  const handleFullscreen = () => {
    if (fullscreen){
      onCloseFullscreen();
    }

    setFullscreen(!fullscreen);
  };

  return (
    <div className={`w-full h-full ${containerClassName}`}>
      {!isFullscreen && (
        <img
          className={`rounded-md cursor-pointer ${imageClassName}`}
          src={pathAsAbsolute(fetchFromDataAttribute(src).url)}
          onClick={handleFullscreen}
          alt={fetchFromDataAttribute(src).alternativeText}
        />
      )}
      <div
        className={`fixed ${fullscreen ? "block" : "hidden"} flex items-center z-[9999] h-screen top-0 right-0 left-0 cursor-pointer bg-zinc-500 bg-opacity-70`}
        onClick={handleFullscreen}
      >
        <img
          className="rounded-md object-contain mx-auto max-h-[95%] max-w-[95%]"
          src={pathAsAbsolute(fetchFromDataAttribute(src).url)}
          alt={fetchFromDataAttribute(src).alternativeText}
        />
      </div>
    </div>
  );
};

Image.propTypes = {
  containerClassName: PropTypes.string,
  imageClassName: PropTypes.string,
  src: PropTypes.shape({
    data: PropTypes.shape({
      attributes: PropTypes.shape({
        url: PropTypes.string
      })
    })
  }),
  isFullscreen: PropTypes.bool,
  onCloseFullscreen: PropTypes.func
};

Image.defaultProps = {
  containerClassName: "",
  imageClassName: "",
  src: {},
  isFullscreen: false,
  onCloseFullscreen: () => {}
};

export default Image;
