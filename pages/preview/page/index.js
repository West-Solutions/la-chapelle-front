import React from "react";

import PageServices from "@Services/Page";
import PageRenderer from "@Modules/PageRenderer";

const PagePreview = page =>  <PageRenderer {...page} />;

export const getServerSideProps = async ({ query }) => {
  const { id } = query;
  const page = await PageServices.get(id);
  return {
    props: { ...page }
  };
};

export default PagePreview;
