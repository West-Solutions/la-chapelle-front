import React from "react";

import NewsServices from "@Services/News";
import PageRenderer from "@Modules/PageRenderer";

const NewsPreview = page => {
  return <PageRenderer {...page} />;
};

export const getServerSideProps = async ({ query }) => {
  const { id } = query;
  const page = await NewsServices.get(id);

  return {
    props: { ...page },
  };
};

export default NewsPreview;
