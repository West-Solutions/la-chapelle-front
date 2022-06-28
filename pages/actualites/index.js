import React, { useContext } from "react";
import PropTypes from "prop-types";

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
    <main className="container mx-auto">
      <Title text="Actualités" semantic="H1" color={sectionColor} position="center" />
      <NewsResultList news={news} />
    </main>
  );
};

export const getStaticProps = async () => {
  const { data } = await NewsServices.getAll({ populate: "illustration" });

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
