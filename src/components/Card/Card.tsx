import { Button } from "@/components/Button/Button";
import { ReactNode } from "react";

interface CardProps {
  image: string;
  imageAlt?: string;
  title: string;
  body: ReactNode;
  ctaText: string;
  ctaOnClick?: () => void;
  className?: string;
}

export const Card = ({
  image,
  imageAlt = "",
  title,
  body,
  ctaText,
  ctaOnClick,
  className = "",
}: CardProps) => {
  return (
    <div
      className={`flex flex-col h-full bg-white rounded-lg overflow-hidden shadow-md ${className}`}
    >
      <div className="w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={imageAlt || title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 flex-1">
        <h3 className="text-xl font-normal text-(--color-text-main)">
          {title}
        </h3>
        <div className="text-base leading-relaxed text-(--color-text-main) font-(--font-montserrat) flex-1">
          {body}
        </div>
        <Button variant="secondary" onClick={ctaOnClick} className="mt-auto">
          {ctaText}
        </Button>
      </div>
    </div>
  );
};
