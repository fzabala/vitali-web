import { ReactNode } from "react";

interface BenefitProps {
  icon: ReactNode;
  text: string;
  className?: string;
}

export const Benefit = ({ icon, text, className = "" }: BenefitProps) => {
  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <div className="text-5xl md:text-6xl text-(--color-secondary)">
        {icon}
      </div>
      <p className="text-lg md:text-xl leading-relaxed text-(--color-text-main) font-(--font-montserrat) text-center">
        {text}
      </p>
    </div>
  );
};
