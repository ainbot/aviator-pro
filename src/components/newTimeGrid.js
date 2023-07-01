import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTimeGrid = ({ numColumns }) => {
  const [visibleSlots, setVisibleSlots] = useState(0);
  const [generatedSlots, setGeneratedSlots] = useState([]);

  const handleGenerateSlot = () => {
    if (visibleSlots < numColumns) {
      setVisibleSlots(visibleSlots + 1);
      setGeneratedSlots((prevSlots) => [...prevSlots, generateSlot()]);
    }
  };

  const generateSlot = () => {
    const currentTime = new Date().toLocaleTimeString();
    return currentTime;
  };

  return (
    <div>
      {generatedSlots.map((timeSlot, index) => (
        <div key={index}>{timeSlot}</div>
      ))}
      <button onClick={handleGenerateSlot}>Gerar Horário</button>
    </div>
  );
};

NewTimeGrid.propTypes = {
  numColumns: PropTypes.number.isRequired,
};

export default NewTimeGrid;
