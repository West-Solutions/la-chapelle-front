import React  from "react";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";

import Link from "next/link";

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
      <div className="container mx-auto flex flex-col align-middle md:flex-row gap-8 md:justify-between p-4 py-6 lg:px-20 items-center overflow-hidden">
        <ContactInfo contact={contact} />
        <MapWithNoSSR style={{ height, width }} position={position} />
        <OpeningDays openingDays={openingDays} />
      </div>
      <div className="container mx-auto text-center pb-4">
        <Link href="/mentions-legales">
          <a className="text-white">Mentions légales</a>
        </Link>
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
