import React, { useState } from "react";

const Toggle = () => {
  const [sortList, setSortList] = useState(false);

  const toggleSort = () => {
    setSortList(!sortList);
  };

  return (
    <label class="switch">
      <input type="checkbox" onChange={toggleSort} />
      <div class="slider"></div>
      <div class="slider-card">
        <div class="slider-card-face slider-card-front"></div>
        <div class="slider-card-face slider-card-back"></div>
      </div>
    </label>
  );
};

export default Toggle;
