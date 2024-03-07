import React, { useState } from "react";

const Toggle = ({ handleToggle }) => {
  const [moveDoneToEnd, setMoveDoneToEnd] = useState(false);

  const toggleMoveDoneToEnd = () => {
    setMoveDoneToEnd(!moveDoneToEnd);
    handleToggle(!moveDoneToEnd);
  };

  return (
    <label class="switch">
      <input
        type="checkbox"
        onChange={toggleMoveDoneToEnd}
        checked={moveDoneToEnd}
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
