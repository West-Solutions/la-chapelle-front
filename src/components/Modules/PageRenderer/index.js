import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import ContentRenderer from "@Modules/ContentRenderer";

const PageRenderer = ({ appProps, pageProps }) => {
  const { data } = pageProps;

  if (!data.attributes) return <div>No data</div>;

  return (
    <React.Fragment>
      <Head>
        <title>{`${appProps.name} | ${data.attributes.title}`}</title>
      </Head>
      <main className="container mx-auto">
        {data.attributes.Content && data.attributes.Content.length > 0 && (
          data.attributes.Content.map(section => (
            <ContentRenderer key={section.id} components={section} />
          ))
        )}
      </main>
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
        Content: PropTypes.arrayOf(
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
