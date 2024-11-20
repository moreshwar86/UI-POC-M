import React from "react";

interface DateIconProps {
  className?: string;
}

export const DateIcon: React.FC<DateIconProps> = ({ className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 1C4.77614 1 5 1.22386 5 1.5V2H11V1.5C11 1.22386 11.2239 1 11.5 1C11.7761 1 12 1.22386 12 1.5V2H13C14.1046 2 15 2.89543 15 4V13C15 14.1046 14.1046 15 13 15H3C1.89543 15 1 14.1046 1 13V4C1 2.89543 1.89543 2 3 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM4 3H3C2.44772 3 2 3.44772 2 4V6H14V4C14 3.44772 13.5523 3 13 3H12V3.5C12 3.77614 11.7761 4 11.5 4C11.2239 4 11 3.77614 11 3.5V3H5V3.5C5 3.77614 4.77614 4 4.5 4C4.22386 4 4 3.77614 4 3.5V3ZM14 7H2V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V7Z"
        fill="currentColor"
      />
    </svg>
  );
};
