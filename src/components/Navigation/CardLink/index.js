import React from "react";
import PropTypes from "prop-types";

const CardLink = ( item ) => {
  return (
    <a href={item.path} className="w-10">
      <div className="bg-white shadow-md rounded-lg p-4 text-center">
        <image src={item.image.path} width="200px" height="200px" onError="this.onerror=null; this.src='/upload/fallbackImages';"  />
        <h3>
          CardLink
        </h3>
        <div>
          Ceci est une Carte
        </div>
      </div>
    </a>
  );
};

CardLink.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.shape({}),
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired
};

export default CardLink;