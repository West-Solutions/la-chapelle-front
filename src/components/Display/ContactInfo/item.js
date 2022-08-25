import React from "react";
import PropTypes from "prop-types";

const ContactInfoItem = ({ icon, text, className }) => (
  <div className="flex gap-2 items-start">
    <div>
      {icon && icon}
    </div>
    {text && (
      <div className={`${className} w-full`}>{text}</div>
    )}
  </div>
);

ContactInfoItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.element,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

ContactInfoItem.defaultProps = {
  className: "",
  icon: null,
  text: ""
};

export default ContactInfoItem;
