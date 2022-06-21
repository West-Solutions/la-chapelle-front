import React from "react";
import PropTypes from "prop-types";

import { pathAsAbsolute } from "@Utils/strapi/media";
import { fetchFromDataAttribute } from "@Utils/strapi/core";

const Person = ({ person }) => {
  const { denomination, fonction, photo } = person.attributes;

  return (
    <div className="border rounded-md shadow-normal">
      <img
        className="object-center object-cover rounded-t-md aspect-square w-full"
        src={pathAsAbsolute(fetchFromDataAttribute(photo).url)} alt={denomination}
      />
      <div className="px-2 text-center">
        <p>{denomination}</p>
        <p>{fonction}</p>
      </div>
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.shape({
    attributes: PropTypes.shape({
      denomination: PropTypes.string,
      fonction: PropTypes.string,
      photo: PropTypes.shape({
        data: PropTypes.shape({
          attributes: PropTypes.shape({
            url: PropTypes.string,
          }),
        }),
      }),
    }),
  }),
};

export default Person;

