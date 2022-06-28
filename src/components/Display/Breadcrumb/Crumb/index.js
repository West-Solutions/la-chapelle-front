import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";

const Crumb = ({ text, href, last=false, isLink }) => {
  // The last crumb is rendered as normal text since we are already on the page
  if (last) {
    return <span className="text-zinc-500">{text}</span>;
  }

  return (
    <div className="flex flex-row gap-2 text-center">
      {isLink ? (
        <Link href={href}>
          <a className="hover:underline">
            {text}
          </a>
        </Link>
      ) : (
        <span>{text}</span>
      )}
      <span>{">"}</span>
    </div>
  );
};

Crumb.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  last: PropTypes.bool,
  isLink: PropTypes.bool
};

export default Crumb;