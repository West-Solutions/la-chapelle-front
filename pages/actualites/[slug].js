import React from "react";

import NewsServices from "@Services/News";
import PageRenderer from "@Modules/PageRenderer";

const newsPage = props => {
  return <PageRenderer {...props} />;
};

export async function getStaticPaths() {
  const { data: pages } = await NewsServices.getAll();

  return {
    paths: pages.map(({ attributes }) => ({
      params: {
        slug: attributes.slug
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await NewsServices.get(params.slug);
  const page = data[0];

  return {
    props: { data: page },
    revalidate: 1,
  };
}

export default newsPage;
