import React from "react";

const PageRenderer = props => {
  console.log(props);
  return (
    <main>
      <h1>{props.data.attributes.title}</h1>
    </main>
  );
};

export default PageRenderer;
