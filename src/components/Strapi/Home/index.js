import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";


const StrapiHome = ({ newsNumber, quickAccessNumber, news, quickAccesses }) => {
  console.log("news", news);
  console.log("quickAccesses", quickAccesses);
  return (
    <div className={"w-full flex"}>
      <div className={"flex-2 w-2/3 text-center"}>
        {`nombre d'actualité : ${newsNumber}`}
      </div>
      <div className={"flex-1 w-1/3 text-center"}>
        {`nombre d'acces rapide : ${quickAccessNumber}`}
      </div>
    </div>
  );
};

StrapiHome.propTypes = {
  news: PropTypes.arrayOf(),
  newsNumber: PropTypes.number,
  quickAccesses: PropTypes.arrayOf(),
  quickAccessNumber: PropTypes.number
};

export default StrapiHome;
