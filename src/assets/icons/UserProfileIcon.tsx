import React from "react";

interface UserProfileIconProps {
  className?: string;
}

const UserProfileIcon: React.FC<UserProfileIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="12" cy="12" r="11.5" stroke="currentColor" />
      <path
        d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
        fill="currentColor"
      />
      <path
        d="M16 15C16 13.3431 14.2091 12 12 12C9.79086 12 8 13.3431 8 15V17.5C8 17.7761 8.22386 18 8.5 18H15.5C15.7761 18 16 17.7761 16 17.5V15Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default UserProfileIcon;
