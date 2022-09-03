import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import NewsServices from "@Services/News";
import ColorsServices from "@Services/Colors";
import ConfigServices from "@Services/Config";
import ContactServices from "@Services/Contact";
import NavigationServices from "@Services/Navigation";

import { pathAsAbsolute } from "@Utils/strapi/media";
import { cleanResults, fetchFromDataAttribute } from "@Utils/strapi/core";

import Header from "@Display/Header";
import Footer from "@Display/Footer";
import ColorsContext from "@Contexts/ColorsContext";

import "../src/styles/index.scss";

import Breadcrumb from "@Display/Breadcrumb";

const App = ({ Component, pageProps: page, app }) => {
  const favicon = app.config.favicon;
  const faviconUrl = pathAsAbsolute(fetchFromDataAttribute(favicon).url);
  return (
    <React.Fragment>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          media="screen"
        />
        <link rel="icon" type="image/png" href={faviconUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:;"
        />
      </Head>
      <ColorsContext.Provider value={app.colors}>
        <div className="min-h-screen flex flex-col justify-between bg-zinc-100">
          <div>
            <Header app={app}/>
            <Breadcrumb app={app} />
            <Component { ...{ page, app }} />
          </div>
          <Footer app={app} />
        </div>
      </ColorsContext.Provider>
    </React.Fragment>
  );
};

App.getInitialProps = async () => {
  const promises = [
    ConfigServices.get(),
    ContactServices.get(),
    ColorsServices.getAll(),
    NavigationServices.getMain(),
    NewsServices.getAll({ populate: "illustration" })
  ];

  const [
    config,
    contact,
    colors,
    navigation,
    news,
  ] = cleanResults(await Promise.all(promises));

  return {
    app: {
      news,
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
