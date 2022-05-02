import React from "react";
import axios from "axios";

import PageRenderer from "@Modules/PageRenderer";

const IndexPage = props => {
  return <PageRenderer {...props} />;
};

export const getStaticProps = () =>
  new Promise((res, rej) => {
    const URL = process.env.API_URL + "/pages/1/?populate=*";
    axios.get(URL)
      .then(({ data }) => res({ props: {...data} }))
      .catch(rej);
  });

export default IndexPage;
