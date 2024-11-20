import React from "react";

interface HideEyeIconProps {
  className?: string;
  onClick: () => void;
}

const HideEyeIcon: React.FC<HideEyeIconProps> = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.99902 5L19.999 21M14.8275 18.5953C13.9755 18.8557 13.0549 19 12.0879 19C7.1579 19 3.08789 12 3.08789 12C3.08789 12 4.39477 9.87953 6.5 8.16081M9.87868 6.24902C10.5733 6.08742 11.3167 6 12.0879 6C17.0179 6 21.0879 13 21.0879 13C21.0879 13 20.3766 14.2279 19.2203 15.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default HideEyeIcon;
