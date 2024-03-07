import React from "react";

const ProgressBar = ({ percentage }) => {
  const formattedPercentage = percentage ? Math.floor(percentage) : 0;

  return (
    <div className="progress-container">
      <div className="progress-text">{formattedPercentage}%</div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
