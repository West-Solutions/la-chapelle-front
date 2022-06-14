import React from "react";
import PropTypes from "prop-types";

import Link from "next/link";
import Icon from "@mui/material/Icon";

import ContactInfoItem from "./item";

const ContactInfo = ({ contact }) => {
  if (!contact) return null;

  return (
    <div className="flex flex-col gap-2">
      <ContactInfoItem
        icon={<Icon>map</Icon>}
        text={(
          <div>
            <div>{contact.street}</div>
            <div>{contact.zipCode} - {contact.city}</div>
          </div>
        )}
      />
      <ContactInfoItem
        icon={<Icon>phone</Icon>}
        text={(
          <Link href={`tel:${contact.phoneNumber}`}>
            <a href={`tel:${contact.phoneNumber}`}>
              {contact.phoneNumber}
            </a>
          </Link>
        )}
      />
      <ContactInfoItem
        icon={<Icon>email</Icon>}
        text={(
          <Link href={`mailto:${contact.email}`}>
            <a>
              {contact.email}
            </a>
          </Link>
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
