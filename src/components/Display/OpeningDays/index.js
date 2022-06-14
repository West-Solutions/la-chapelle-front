import React  from "react";
import PropTypes from "prop-types";

const OpeningDays = ({ openingDays }) => {


  return (
    <div>
      {openingDays.map(({ id, weekDay, openingHours }) => (
        <p key={id}>{weekDay} : {openingHours}</p>
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
