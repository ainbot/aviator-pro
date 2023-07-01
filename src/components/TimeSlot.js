import React from "react";
import PropTypes from "prop-types";

const TimeSlot = ({ time }) => {
  return <div>{time}</div>;
};

TimeSlot.propTypes = {
  time: PropTypes.string.isRequired,
};

export default TimeSlot;
