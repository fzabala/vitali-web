import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  children: ReactNode;
  alternative?: boolean;
  className?: string;
}

export const Section = ({
  title,
  children,
  alternative = false,
  className = "",
}: SectionProps) => {
  return (
    <section
      className={`py-8 md:py-16 px-4 md:px-16 flex flex-col items-center ${
        alternative
          ? "bg-(--color-background-alt)"
          : "bg-(--color-background-base)"
      } ${className}`}
    >
      <div className="w-full max-w-6xl flex flex-col items-center gap-6">
        {title && <SectionTitle>{title}</SectionTitle>}
        <div className="w-full flex flex-col items-center">{children}</div>
      </div>
    </section>
  );
};
