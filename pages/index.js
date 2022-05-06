import React from "react";

import PageServices from "@Services/Page";
import PageRenderer from "@Modules/PageRenderer";

const IndexPage = props => {
  return <PageRenderer {...props} />;
};

export const getStaticProps = async () => {
  let page = {};

  try {
    page = await PageServices.get("1");
  } catch (error) {
    console.error(error.message);
  }

  return {
    props: {
      ...page
    }
  };
};

export default IndexPage;
