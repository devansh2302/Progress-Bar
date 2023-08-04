import React, { useState, useEffect } from "react";

const CircularProgressBar = ({ size, strokeWidth, percentage }) => {
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && progress < percentage) {
      interval = setInterval(() => {
        setProgress((prevProgress) => prevProgress + 10);
      }, 1000);
    } else if (!isActive && progress !== percentage) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, progress, percentage]);

  const toggleProgressOn = () => {
    setIsActive(true);
  };
  const toggleProgressOff = () => {
    setIsActive(false);
  };

  return (
    <div className="loading-bar">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="progress-circle"
      >
        <circle
          className="progress-circle-background"
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - strokeWidth / 2}
          strokeWidth={strokeWidth}
        />
        <circle
          className="progress-circle-indicator"
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - strokeWidth / 2}
          strokeWidth={strokeWidth}
          strokeDasharray={`${(progress / 100) * (size - strokeWidth * 3.14)} ${
            size - strokeWidth * 3.14
          }`}
        />
        <text
          className="progress-text"
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {progress}%
        </text>
      </svg>

      <div className="progress-buttons">
        <button onClick={toggleProgressOn}>Start</button>
        <button onClick={toggleProgressOff}>Pause</button>
      </div>
    </div>
  );
};

export default CircularProgressBar;
