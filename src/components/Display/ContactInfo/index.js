import React from "react";
import PropTypes from "prop-types";

import Link from "next/link";
import { Icon } from "@mui/material";

import ContactInfoItem from "./item";

const ContactInfo = ({ contact }) => {
  if (!contact) return null;

  return (
    <div className="flex flex-1 flex-col gap-2 items-center md:items-start">
      <ContactInfoItem
        icon={<span className="hidden md:inline"><Icon>map</Icon></span>}
        text={(
          <div className="flex flex-col items-center md:block">
            <div className="flex flex-row gap-2"><span className="md:hidden"><Icon>map</Icon></span>{contact.street}</div>
            <div>{contact.zipCode} - {contact.city}</div>
          </div>
        )}
      />
      <ContactInfoItem
        icon={<Icon>phone</Icon>}
        text={(
          <Link className="w-full" href={`tel:${contact.phoneNumber}`}>
            <a href={`tel:${contact.phoneNumber}`}>
              {contact.phoneNumber}
            </a>
          </Link>
        )}
      />
      <ContactInfoItem
        icon={<Icon>email</Icon>}
        text={(
          <Link className="w-full" href={`mailto:${contact.email}`}>
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
