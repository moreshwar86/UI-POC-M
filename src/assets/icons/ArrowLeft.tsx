import React from "react";

const ArrowLeft = ({
  onclick,
  style,
}: {
  onclick?: () => void;
  style?: React.CSSProperties;
}) => {
  return (
    <svg
      onClick={onclick}
      style={style}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowLeft;
