import { ReactNode } from "react";

interface SubtitleProps {
  children: ReactNode;
  className?: string;
}

export const Subtitle = ({ children, className = "" }: SubtitleProps) => {
  return (
    <h3
      className={`text-3xl md:text-4xl font-normal text-(--color-primary) ${className}`}
    >
      {children}
    </h3>
  );
};
