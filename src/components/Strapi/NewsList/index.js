import React from "react";
import PropTypes from "prop-types";

import NewsResultList from "@Display/News/ResultList";

const NewsList = ({ app }) => {
  const { news } = app;
  return <NewsResultList news={news} />;
};

NewsList.propTypes = {
  app: PropTypes.shape({
    news: PropTypes.arrayOf(PropTypes.shape({}))
  }).isRequired
};

export default NewsList;
