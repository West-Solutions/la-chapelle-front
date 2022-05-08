import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import Header from "@Display/Header";
import Navigation from "@Display/Navigation";
import ContentRenderer from "@Modules/ContentRenderer";

const PageRenderer = ({ appProps, pageProps }) => {
  const { data } = pageProps;

  // TODO: enhance this
  if (!data || !data.attributes) return <div>No data</div>;

  return (
    <React.Fragment>
      <Head>
        <title>{`${appProps.name} | ${data.attributes.title}`}</title>
      </Head>
      <div>
        <Header />
        <div className="container mx-auto relative -top-10">
          <Navigation />
          <main className="bg-red-500">
            {data.attributes.pageContent && data.attributes.pageContent.length > 0 && (
              data.attributes.pageContent.map(component => (
                <ContentRenderer key={`${component.id}-${component.__component}`} component={component} />
              ))
            )}
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

PageRenderer.propTypes = {
  appProps: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
  pageProps: PropTypes.shape({
    data: PropTypes.shape({
      attributes: PropTypes.shape({
        title: PropTypes.string,
        pageContent: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.oneOfType([
              PropTypes.string, PropTypes.number
            ])
          })
        )
      })
    })
  }).isRequired
};

export default PageRenderer;
