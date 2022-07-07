import React from "react";
import PropTypes from "prop-types";

const ContactInfoItem = ({ icon, text }) => (
  <div className="flex gap-2 items-start">
    <div>
      {icon && icon}
    </div>
    {text && (
      <div className="font-light w-full">{text}</div>
    )}
  </div>
);

ContactInfoItem.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
};

ContactInfoItem.defaultProps = {
  icon: null,
  text: ""
};

export default ContactInfoItem;
