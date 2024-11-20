import React from "react";

const ArrowUpWithCircle: React.FC<{
  className?: string;
  onClick?: () => void;
  fill?: string;
  style?: React.CSSProperties;
}> = ({ className, onClick, fill, style }) => (
  <svg
    onClick={onClick}
    className={className}
    style={style}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 17V7M12 7L7 12M12 7L17 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowUpWithCircle;
