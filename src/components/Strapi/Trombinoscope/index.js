import React from "react";
import PropTypes from "prop-types";

import Person from "@Display/Person";

const StrapiTrombinoscope = ({ trombinoscopes }) => {
  const { data: persons } = trombinoscopes;
  const trombinoscopeClass = "w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 gap-y-4 lg:gap-y-8 lg:gap-4";

  return (
    <div className={trombinoscopeClass}>
      {persons.map(person => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  );
};

StrapiTrombinoscope.propTypes = {
  trombinoscopes: PropTypes.shape({
    data: PropTypes.arrayOf().isRequired,
  }).isRequired
};

export default StrapiTrombinoscope;