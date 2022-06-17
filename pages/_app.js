import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import ColorsServices from "@Services/Colors";
import ConfigServices from "@Services/Config";
import ContactServices from "@Services/Contact";
import NavigationServices from "@Services/Navigation";

import { cleanResults } from "@Utils/strapi/core";

import ColorsContext from "@Contexts/ColorsContext";

import "../src/styles/index.scss";

const App = ({ Component, pageProps: page, app }) => {
  return (
    <React.Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <ColorsContext.Provider value={app.colors}>
        <Component { ...{ page, app }} />
      </ColorsContext.Provider>
    </React.Fragment>
  );
};

App.getInitialProps = async () => {
  const promises = [
    ConfigServices.get(),
    ContactServices.get(),
    ColorsServices.getAll(),
    NavigationServices.getMain()
  ];

  const [
    config,
    contact,
    colors,
    navigation
  ] = cleanResults(await Promise.all(promises));

  return {
    app: {
      colors,
      config,
      contact,
      navigation
    },
  };
};

App.propTypes = {
  app: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.elementType.isRequired
};

export default App;
