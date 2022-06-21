import React from "react";

import PageServices from "@Services/Page";
import NewsServices from "@Services/News";
import QuickAccesses from "@Services/QuickAccesses";

import PageRenderer from "@Modules/PageRenderer";

const IndexPage = (props) => {
  return <PageRenderer {...props} />;
};

export const getStaticProps = async () => {
  let page = {};
  let news = {};
  let quickAccesses = {};

  try {
    page = await PageServices.get("1");
    news = await NewsServices.getAll({ populate: "illustration" });
    quickAccesses = await QuickAccesses.getAll();
  } catch (error) {
    console.error(error.message);
  }

  return {
    props: {
      ...page,
      news: news.data,
      quickAccesses: quickAccesses.data
    }
  };
};

export default IndexPage;
