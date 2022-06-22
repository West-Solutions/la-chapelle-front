import React, { useContext } from "react";
import Head from "next/head";
import PropTypes from "prop-types";

import useColor from "@Hooks/useColor";
import ColorsContext from "@Contexts/ColorsContext";

import ComponentRenderer from "@Modules/ComponentRenderer";

import { hasDataAndAttribute } from "@Utils/strapi/core";

const PageRenderer = ({ app, page }) => {
  if (!hasDataAndAttribute(page)) return <div>No data</div>;

  const colors = useContext(ColorsContext);
  const sectionColor = useColor(colors);

  const { data, news, quickAccesses } = page;
  const { Contenu = [], title } = data.attributes;

  return (
    <React.Fragment>
      <Head>
        <title>{`${app.config.websiteName} | ${title}`}</title>
      </Head>
      <div>
        <main className="container mx-auto m-8">
          {Contenu &&
            Contenu.map(component =>
              component.__component === "grilles.home" ? (
                <ComponentRenderer
                  key={`${component.id}-${component.__component}`}
                  component={{
                    ...component,
                    sectionColor,
                    news,
                    quickAccesses
                  }}
                />
              ) : (
                <ComponentRenderer
                  key={`${component.id}-${component.__component}`}
                  component={{ ...component, sectionColor }}
                />
              )
            )}
        </main>
      </div>
    </React.Fragment>
  );
};

PageRenderer.propTypes = {
  app: PropTypes.shape({
    config: PropTypes.shape({
      websiteName: PropTypes.string
    }).isRequired,
    navigation: PropTypes.arrayOf(PropTypes.object).isRequired
  }).isRequired,
  page: PropTypes.shape({
    data: PropTypes.shape({
      attributes: PropTypes.shape({
        title: PropTypes.string,
        Contenu: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          })
        )
      })
    }),
    news: PropTypes.arrayOf(),
    quickAccesses: PropTypes.arrayOf()
  }).isRequired
};

export default PageRenderer;
