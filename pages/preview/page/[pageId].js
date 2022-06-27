import React from "react";

import PageServices from "@Services/Page";
import PageRenderer from "@Modules/PageRenderer";

const PagePreview = page =>  <PageRenderer {...page} />;

export const getServerSideProps = async ({ params }) => {
  const { pageId } = params;
  const page = await PageServices.get(pageId);

  return {
    props: { ...page }
  };
};

export default PagePreview;
