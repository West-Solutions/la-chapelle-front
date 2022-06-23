import React from "react";

import PageServices from "@Services/Page";
import NewsServices from "@Services/News";
import QuickAccesses from "@Services/QuickAccesses";

import { fetchFromDataAttribute } from "@Utils/strapi/core";

import PageRenderer from "@Modules/PageRenderer";

const IndexPage = props => {
  return <PageRenderer {...props} />;
};

export const getStaticProps = async () => {
  let page = {};
  let news = {};
  let quickAccesses = {};

  try {
    page = await PageServices.get("1");

    const { newsNumber, quickAccessNumber } = fetchFromDataAttribute(page).Contenu.find(
      (c) => c.__component === "grilles.home"
    );
    news = await NewsServices.getAll({
      populate: "illustration",
      sort: ["homePage:desc", "startDate:desc"],
      "pagination[pageSize]": newsNumber
    });
    quickAccesses = await QuickAccesses.getAll({
      "pagination[pageSize]": quickAccessNumber
    });
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
