import React from "react";
import axios from "axios";

const renderPage = (props) => {
  console.log(props);
  return (
    <main>
      <h1>{props.page.data.attributes.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.page.data.attributes.Content[0].Paragraph }} />
    </main>
  );
};

export async function getServerSideProps() {
  const { data } = await axios.get(`${process.env.API_URL}/pages/1/?populate=*`);
  return { props: { page: data } };
}

export default renderPage;
