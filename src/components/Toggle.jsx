import React, { useState } from "react";

const Toggle = ({ handleToggle }) => {
  const [moveDoneToEnd, setMoveDoneToEnd] = useState(false);

  // toggle the moveDoneToEnd state
  const toggleMoveDoneToEnd = () => {
    setMoveDoneToEnd(!moveDoneToEnd);
    handleToggle(!moveDoneToEnd);
  };

  return (
    <label class="switch">
      <input
        type="checkbox"
        // if checked is true, trigger the toggleMoveDoneToEnd function
        checked={moveDoneToEnd}
        onChange={toggleMoveDoneToEnd}
      />
      <div class="slider"></div>
      <div class="slider-card">
        <div class="slider-card-face slider-card-front"></div>
        <div class="slider-card-face slider-card-back"></div>
      </div>
    </label>
  );
};

export default Toggle;
