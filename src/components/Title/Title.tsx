import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  className?: string;
}

export const Title = ({ children, className = "" }: TitleProps) => {
  return (
    <h2
      className={`text-5xl md:text-6xl font-normal text-(--color-primary) ${className}`}
    >
      {children}
    </h2>
  );
};
