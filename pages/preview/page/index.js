import React from "react";

import PageServices from "@Services/Page";
import PageRenderer from "@Modules/PageRenderer";

const PagePreview = page =>  <PageRenderer {...page} />;

export const getServerSideProps = async ({ query }, res) => {
  const { id } = query;
  const page = await PageServices.get(id);
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=31536000, stale-while-revalidate"
  );
  return {
    props: { ...page }
  };
};

export default PagePreview;
