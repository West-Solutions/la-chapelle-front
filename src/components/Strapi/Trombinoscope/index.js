import React from "react";
import PropTypes from "prop-types";

import Person from "@Display/Person";

const StrapiTrombinoscope = ({ trombinoscopes }) => {

  const persons = trombinoscopes.data;

  return (
    <div className=" grid grid-cols-5 gap-4 gap-y-8 pb-5">
      {persons.map(person => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  );
};

StrapiTrombinoscope.propTypes = {
  trombinoscopes: PropTypes.shape({
    data: PropTypes.shape({
      persons: PropTypes.arrayOf(
        PropTypes.shape({}),
      ),
    }).isRequired,
  }).isRequired,
};

export default StrapiTrombinoscope;