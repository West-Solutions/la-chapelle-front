import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import Header from "@Display/Header";
import ComponentRenderer from "@Modules/ComponentRenderer";

import { hasDataAndAttribute } from "@Utils/strapi/core";

const PageRenderer = ({ app, page }) => {
  if (!hasDataAndAttribute(page)) return <div>No data</div>;

  const { data } = page;
  const { Contenu = [], title } = data.attributes;

  return (
    <React.Fragment>
      <Head>
        <title>{`${app.config.websiteName} | ${title}`}</title>
      </Head>
      <div>
        <Header app={app}/>
        <div className="container mx-auto mt-8">
          <main>
            {Contenu && Contenu.map(component => (
              <ComponentRenderer
                key={`${component.id}-${component.__component}`}
                component={component}
              />
            ))
            }
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};

PageRenderer.propTypes = {
  app: PropTypes.shape({
    config: PropTypes.shape({
      websiteName: PropTypes.string
    }).isRequired,
    navigation: PropTypes.arrayOf(
      PropTypes.object
    ).isRequired
  }).isRequired,
  page: PropTypes.shape({
    data: PropTypes.shape({
      attributes: PropTypes.shape({
        title: PropTypes.string,
        Contenu: PropTypes.arrayOf(
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
