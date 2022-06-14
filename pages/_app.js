import React from "react";
import PropTypes from "prop-types";

import Head from "next/head";
import ConfigServices from "@Services/Config";
import ContactServices from "@Services/Contact";
import NavigationServices from "@Services/Navigation";
import { cleanResults } from "@Utils/strapi/core";

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
      <Component { ...{ page, app }} />
    </React.Fragment>
  );
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
    app: {
      config,
      contact,
      navigation
    }
  };
};

App.propTypes = {
  app: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.elementType.isRequired
};

export default App;
