import React from "react";

import NewsServices from "@Services/News";
import PageRenderer from "@Modules/PageRenderer";

const NewsPreview = page => {
  return <PageRenderer {...page} />;
};

export const getServerSideProps = async ({ params }) => {
  const { newsId } = params;
  const page = await NewsServices.get(newsId);

  return {
    props: { ...page },
  };
};

export default NewsPreview;
