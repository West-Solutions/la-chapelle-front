import React from "react";
import PropTypes from "prop-types";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

const Map = ({ style, position }) => {
  const [mapSize, setMapSize] = React.useState(null);

  // Make leaflet map responsive
  React.useEffect(() => {
    const handleResize = () => {
      const widthNumber = style.width ? Number(style.width.replace("px", "")) : 0;
      if (window.innerWidth <= widthNumber + 32) {
        const width = window.innerWidth - 32;
        const height = width * 0.6;
        setMapSize({ width, height });
      } else setMapSize(style);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mapSize) return null;

  return (
    <div style={mapSize}>
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
  position: PropTypes.arrayOf(PropTypes.number)
};

export default Map;