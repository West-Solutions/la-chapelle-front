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
      c => c.__component === "grilles.home"
    );

    news = await NewsServices.getAll({
      populate: "illustration",
      "filters[endDate][$gte]": new Date().toISOString(),
      "filters[startDate][$lte]": new Date().toISOString(),
      "filters[homePage][$eq]": true,
      sort: "startDate",
      "pagination[pageSize]": newsNumber
    });
    if (!news || !news.data.attributes || news.data.attributeslength < newsNumber) {
      // WIP
      const newsCompletion = await NewsServices.getAll({
        populate: "illustration",
        "filters[homePage][$eq]": true,
      });

    }
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
