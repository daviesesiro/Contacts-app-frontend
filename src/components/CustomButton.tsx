import React from "react";

export const PrimaryButton: React.FC<{ className?: string }> = ({
  className = "",
  children,
}) => (
  <button
    className={`bg-blue-700 rounded-md text-white p-2 hover:bg-blue-600 transition shadow-lg hover:shadow-sm ${className}`}
  >
    {children}
  </button>
);

export const RounedButton: React.FC<{
  className: string;
  onClick: () => void;
}> = ({ children, className, ...otherProps }) => (
  <button
    className={`hover:bg-gray-600 bg-gray-700 text-lg transistion duration-100 w-10 h-10 items-center flex justify-center rounded-full ${className}`}
    {...otherProps}
  >
    {children}
  </button>
);
