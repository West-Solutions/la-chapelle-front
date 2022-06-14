import React from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const Map = ({ style, position }) => {

  return (
    <div style={style}>
      <MapContainer
        zoom={12}
        scrollWheelZoom
        center={position}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
        />
        <Marker
          position={position}
          animate={true}
        >
        </Marker>
      </MapContainer>
    </div>
  );
};

Map.propTypes = {
  style: PropTypes.shape({
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired
  }),
  position: PropTypes.arrayOf()
};

export default Map;