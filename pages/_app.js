import React from "react";
import PropTypes from "prop-types";

import ConfigServices from "@Services/Config";
import ContactServices from "@Services/Contact";
import NavigationServices from "@Services/Navigation";
import { cleanResults } from "@Utils/strapi/core";

import "../src/styles/index.scss";

const App = ({ Component, pageProps, appProps }) => {
  return <Component { ...{ pageProps, appProps }} />;
};


App.getInitialProps = async () => {
  const promises = [
    ConfigServices.get(),
    ContactServices.get(),
    NavigationServices.getMain()
  ];

  const [
    config,
    contact,
    navigation
  ] = cleanResults(await Promise.all(promises));

  return {
    appProps: {
      config,
      contact,
      navigation
    }
  };
};

App.propTypes = {
  appProps: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.elementType.isRequired
};

export default App;
