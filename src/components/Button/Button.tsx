import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
}) => {
  return (
      <button
        onClick={onClick}
        className={`px-4 py-2 font-semibold text-white rounded ${
          variant === "primary"
            ? "bg-blue-500 hover:bg-blue-600"
            : "bg-gray-500 hover:bg-gray-600"
        }`}
      >
        {label}
      </button>
  );
};

export default Button;
