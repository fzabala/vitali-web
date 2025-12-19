import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
}

export const SectionTitle = ({
  children,
  className = "",
}: SectionTitleProps) => {
  return (
    <h3
      className={`text-3xl md:text-4xl font-normal text-(--color-primary) ${className}`}
    >
      {children}
    </h3>
  );
};
