import React from "react";
import PropTypes from "prop-types";

import "../src/styles/index.css";

const App = ({ Component, pageProps, appProps }) => {
  return <Component { ...{ pageProps, appProps }} />;
};

App.getInitialProps = async () => {
  const navigation = {}; // Fetch navigation data from the server
  return {
    appProps: {
      name: "La Chapelle",
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
