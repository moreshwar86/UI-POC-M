import React from "react";

const ArrowRight = ({
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
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    // <svg
    //   onClick={onclick}
    //   style={style}
    //   width="18"
    //   height="18"
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 0 348 512"
    // >
    //   <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
    // </svg>
  );
};
export default ArrowRight;
