import React, { useContext } from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import useColor from "@Hooks/useColor";
import ColorsContext from "@Contexts/ColorsContext";

import NewsServices from "@Services/News";
import Title from "@Display/Title";
import NewsResultList from "@Display/News/ResultList";

const NewsIndexPage = ({ page }) => {
  const { news } = page || {};

  const colors = useContext(ColorsContext);
  const sectionColor = useColor(colors);

  return (
    <React.Fragment>
      <Head>
        <title>{"La Chapelle Aux Filtzméens | Actualités"}</title>
      </Head>
      <main className="container mx-auto">
        <Title text="Actualités" semantic="H1" color={sectionColor} position="center" />
        <NewsResultList news={news} />
      </main>
    </React.Fragment>
  );
};

export const getStaticProps = async (_, res) => {
  const { data } = await NewsServices.getAll({ populate: "illustration" });
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=31536000, stale-while-revalidate"
  );

  return {
    props: { news: data },
    revalidate: 1,
  };
};

NewsIndexPage.propTypes = {
  page: PropTypes.shape({
    news: PropTypes.arrayOf(
      PropTypes.shape({})
    )
  }).isRequired
};

export default NewsIndexPage;
