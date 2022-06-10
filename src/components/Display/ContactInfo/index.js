import React from "react";
import PropTypes from "prop-types";

import { PhoneOutlined, MapOutlined, MailOutline } from "@material-ui/icons";

import ContactInfoItem from "./item";

const ContactInfo = ({ contact }) => {
  if (!contact) return null;

  return (
    <div className="flex flex-col gap-2">
      <ContactInfoItem
        icon={<MapOutlined />}
        text={(
          <div>
            <div>{contact.street}</div>
            <div>{contact.zipCode} - {contact.city}</div>
          </div>
        )}
      />
      <ContactInfoItem
        icon={<PhoneOutlined />}
        text={(
          <a href={`tel:${contact.phoneNumber}`}>
            {contact.phoneNumber}
          </a>
        )}
      />
      <ContactInfoItem
        icon={<MailOutline />}
        text={(
          <a href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
        )}
      />
    </div>
  );
};

ContactInfo.propTypes = {
  contact: PropTypes.shape({
    city: PropTypes.string,
    email: PropTypes.string,
    street: PropTypes.string,
    zipCode: PropTypes.string,
    phoneNumber: PropTypes.string
  })
};

ContactInfo.defaultProps = {
  contact: null
};

export default ContactInfo;
