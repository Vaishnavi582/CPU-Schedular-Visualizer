import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-lg shadow-md font-semibold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
