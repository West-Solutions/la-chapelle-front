import React from "react";
import PropTypes from "prop-types";

import NewsServices from "@Services/News";
import NewsResultList from "@Display/News/ResultList";

const NewsIndexPage = ({ page }) => {
  const { news } = page || {};

  return (
    <main className="container mx-auto">
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
