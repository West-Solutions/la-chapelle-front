import React from "react";
import PropTypes from "prop-types";

const Person = ({ person }) => {

  const { denomination, fonction, photo } = person.attributes;

  return (
    <div className="border rounded-md shadow-normal">
      <img className="object-center object-cover rounded-t-md aspect-square w-full" src={process.env.NEXT_PUBLIC_BACK_URL+photo.data.attributes.url} alt={denomination} />
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

