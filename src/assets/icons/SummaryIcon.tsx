import React from "react";

const SummaryIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 100 120"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    <rect
      x="10"
      y="10"
      width="80"
      height="100"
      rx="8"
      ry="8"
      fill="transparent"
    />

    <polygon points="60,10 90,10 60,40" fill="black" />

    <rect x="20" y="50" width="60" height="8" fill="black" />
    <rect x="20" y="70" width="40" height="8" fill="black" />
    <rect x="20" y="90" width="50" height="8" fill="black" />
  </svg>
);

export default SummaryIcon;
