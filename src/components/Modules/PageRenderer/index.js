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

  const { data } = page;
  const { Contenu = [], title } = data.attributes;

  return (
    <React.Fragment>
      <Head>
        <title>{`${app.config.websiteName} | ${title}`}</title>
      </Head>
      <div>
        <main className="container mx-auto m-8">
          <h1 className={`w-full text-6xl font-bold text-center text-${sectionColor}`}>{title}</h1>
          {Contenu && Contenu.map(component =>
            <ComponentRenderer
              key={`${component.id}-${component.__component}`}
              component={{ ...component, sectionColor, app, page }}
            />
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
    }),
    news: PropTypes.arrayOf(PropTypes.shape({})),
    navigation: PropTypes.arrayOf(PropTypes.shape({}))
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
    quickAccesses: PropTypes.arrayOf(PropTypes.shape({}))
  }).isRequired
};

export default PageRenderer;
