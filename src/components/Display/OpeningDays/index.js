import React  from "react";
import PropTypes from "prop-types";

const OpeningDays = ({ openingDays }) => {


  return (
    <div className="flex flex-col items-center md:items-start">
      {openingDays.map(({ id, weekDay, openingHours }) => (
        <p className="font-light" key={id}><span className="font-normal">{weekDay}</span> : {openingHours}</p>
      )
      )}
    </div>
  );
};

OpeningDays.propTypes = {
  openingDays: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      openingHours: PropTypes.string,
      weekDay: PropTypes.string,
    })
  ),
};

export default OpeningDays;
