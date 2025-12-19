import { Button } from "@/components/Button/Button";
import { Subtitle } from "@/components/Subtitle/Subtitle";
import { Title } from "@/components/Title/Title";
import { WhatsAppIcon } from "@/components/WhatsAppIcon/WhatsAppIcon";

export const Hero = () => {
  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-2 px-4 md:px-8 items-start">
      <Title>Bienestar</Title>
      <Subtitle className="mb-3">que se adapta a vos</Subtitle>
      <p className="text-base md:text-lg leading-relaxed text-[--color-text-main] font-(--font-montserrat)">
        En Vitali trabajamos el cuerpo desde el cuidado, el movimiento
        consciente y la atención personalizada, en todas las etapas de la vida.
      </p>
      <Button>
        <WhatsAppIcon />
        Consultar por Whatsapp
      </Button>
      <p className="text-sm md:text-base text-(--color-text-main) font-(--font-montserrat)">
        +54 9 X X X X X X
      </p>
    </div>
  );
};
