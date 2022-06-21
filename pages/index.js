import React from "react";

import PageServices from "@Services/Page";
import NewsServices from "@Services/News";
import QuickAccesses from "@Services/QuickAccesses";

import PageRenderer from "@Modules/PageRenderer";

const IndexPage = props => {
  return <PageRenderer {...props} />;
};

export const getStaticProps = async () => {
  let page = {};
  const { data: news } = await NewsServices.getAll({ populate: "illustration" });
  const { data: quickAccesses } = await QuickAccesses.getAll();

  try {
    page = await PageServices.get("1");
  } catch (error) {
    console.error(error.message);
  }

  return {
    props: {
      ...page,
      news,
      quickAccesses
    }
  };
};

export default IndexPage;
