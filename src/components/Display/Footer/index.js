import React  from "react";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";

import ContactInfo from "@Display/ContactInfo";
import OpeningDays from "@Display/OpeningDays";
const MapWithNoSSR = dynamic(() => import("@Display/Map"), {
  ssr: false,
});

const Footer = ({ app }) => {
  const { contact, config } = app;
  const { openingDays, mapFooter } = config || {};
  const { height, width, position } = mapFooter || {};

  return (
    <footer className="bg-pied-de-page text-white">
      <div className="container mx-auto flex flex-col align-middle md:flex-row gap-8 md:justify-between p-4 md:px-0 items-center overflow-hidden">
        <ContactInfo contact={contact} />
        <MapWithNoSSR style={{ height, width }} position={position} />
        <OpeningDays openingDays={openingDays} />
      </div>
    </footer>
  );
};

Footer.propTypes = {
  app: PropTypes.shape({
    contact: PropTypes.shape({}),
    config: PropTypes.shape({}),
  }).isRequired
};

export default Footer;
