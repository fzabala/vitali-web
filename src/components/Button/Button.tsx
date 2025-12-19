import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  fullWidth?: boolean;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  fullWidth = false,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) => {
  const variantStyles =
    variant === "secondary"
      ? "bg-(--color-secondary) text-white"
      : "bg-(--color-primary) text-white";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center gap-3 px-6 py-3 rounded-lg transition-opacity hover:opacity-90 font-(--font-montserrat) ${variantStyles} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};
