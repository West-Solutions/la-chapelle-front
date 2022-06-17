import React from "react";
import PropTypes from "prop-types";

import Link from "next/link";
import Image from "next/image";
import Icon from "@mui/material/Icon";

import ContactInfoItem from "@Display/ContactInfo/item";

import { pathAsAbsolute } from "@Utils/strapi/media";
import { fetchFromDataAttribute } from "@Utils/strapi/core";

const Hero = ({ config, contact }) => {

  const {
    logo,
    principalImage,
    shortOpeningHours,
    websiteName
  } = config;

  const {
    city,
    email,
    facebook,
    phoneNumber,
    street,
    zipCode
  } = contact;

  const backgroundUrl = pathAsAbsolute(fetchFromDataAttribute(principalImage).url);
  const logoUrl = pathAsAbsolute(fetchFromDataAttribute(logo).url);

  return(
    <div
      className="hidden md:flex flex-row h-auto w-full justify-between"
    >
      <div className="ml-10 mt-10 z-[1]">
        <Link href="/">
          <a className="block relative w-60 h-36 p-2 bg-white bg-opacity-80 rounded-md">
            <Image
              layout="fill"
              src={logoUrl}
            />
          </a>
        </Link>
      </div>
      <div className="text-xl flex flex-col bg-gray-100 bg-opacity-70 p-4 h-full 2xl:w-2/6 xl:w-2/5 lg:w-1/2 w-3/5 z-[1]">
        <div className="flex flex-col gap-2">
          <h2 className="text-center font-bold text-4xl mb-2">{websiteName}</h2>
          <ContactInfoItem
            icon={<Icon>map</Icon>}
            text={(
              <div>
                <p>{street}</p>
                <p>{zipCode} {city}</p>
              </div>
            )}
          />
          <ContactInfoItem
            icon={<Icon>schedule</Icon>}
            text={
              <div>
                {shortOpeningHours.split("\n").map(element => <p key={element}>{element}</p>)}
              </div>
            }
          />
          <ContactInfoItem
            icon={<Icon>phone</Icon>}
            text={(
              <Link href={`tel:${phoneNumber}`}>
                <a>
                  {phoneNumber}
                </a>
              </Link>
            )}
          />
          <ContactInfoItem
            icon={<Icon>email</Icon>}
            text={(
              <Link href={`mailto:${email}`}>
                <a>
                  Nous contacter
                </a>
              </Link>
            )}
          />
          <ContactInfoItem
            icon={<Icon>facebook</Icon>}
            text={(
              <Link href={facebook}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </Link>
            )}
          />
        </div>
      </div>
      <Image
        className="z-0"
        alt="background"
        src={backgroundUrl}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </div>
  );
};

Hero.propTypes = {
  config: PropTypes.shape({
    logo: PropTypes.shape({
      data: PropTypes.shape({
        attributes: PropTypes.shape({
          url: PropTypes.string
        })
      })
    }),
    principalImage: PropTypes.shape({
      data: PropTypes.shape(PropTypes.shape({
        attributes: PropTypes.shape({
          url: PropTypes.string
        })
      }))
    }),
    shortOpeningHours: PropTypes.string,
    websiteName: PropTypes.string,
  }),
  contact: PropTypes.shape({
    city: PropTypes.string,
    email: PropTypes.string,
    facebook: PropTypes.string,
    phoneNumber: PropTypes.string,
    street: PropTypes.string,
    zipCode: PropTypes.string,
  })
};

Hero.defaultProps = {
  config: {},
  contact: {}
};

export default Hero;
