import { Benefit } from "@/components/Benefit/Benefit";
import { Button } from "@/components/Button/Button";
import { Card } from "@/components/Card/Card";
import { Hero } from "@/components/Hero/Hero";
import { Section } from "@/components/Section/Section";
import { WhatsAppIcon } from "@/components/WhatsAppIcon/WhatsAppIcon";
import Image from "next/image";
import { FaHeart, FaLeaf, FaSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col bg-[--color-background-base] font-sans">
      <div className="flex items-center justify-center">
        <main className="flex w-full items-center justify-start py-8 md:py-16 px-4 md:px-16">
          <Hero />
        </main>
      </div>
      <Section title="Qué es Vitali?" alternative>
        <p className="text-base md:text-lg leading-relaxed text-(--color-text-main) font-(--font-montserrat) text-center max-w-3xl mb-6">
          <strong>Vitali</strong> es un lugar... lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris.
        </p>
        <p className="text-base md:text-lg leading-relaxed text-(--color-text-main) font-(--font-montserrat) text-center max-w-3xl">
          <strong>Vitali</strong> es un lugar... lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris.
        </p>
      </Section>
      <Section title="Disciplinas">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card
            image="/assets/pilates.png"
            imageAlt="Pilates"
            title="Pilates"
            body="El Pilates es un método de entrenamiento que se basa en el control mental y corporal para mejorar la postura, la flexibilidad y la fuerza. Es un ejercicio físico y mental que ayuda a mejorar la salud y la forma física."
            ctaText="Conocer más"
          />
          <Card
            image="/assets/limpieza-facial.png"
            imageAlt="Limpieza Facial"
            title="Limpieza Facial"
            body="La limpieza facial es un tratamiento que se realiza para limpiar la piel y remover el exceso de grasa, sudor y otros residuos que se acumulan en la piel. Es un tratamiento que se realiza para mejorar la salud y la belleza de la piel."
            ctaText="Conocer más"
          />
          <Card
            image="/assets/masajes.png"
            imageAlt="Masajes Descontracturantes"
            title="Masajes Descontracturantes"
            body="Los masajes descontracturantes son un tipo de masaje que se realiza para relajar los músculos y la musculatura. Es un masaje que se realiza para mejorar la salud y la belleza de la piel."
            ctaText="Conocer más"
          />
        </div>
      </Section>
      <Section alternative>
        <p className="text-lg md:text-xl leading-relaxed text-(--color-text-main) font-(--font-montserrat) text-center max-w-3xl mb-6">
          Quéres saber cual es el ideal para vos?
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-(--color-text-main) font-(--font-montserrat) text-center max-w-3xl mb-6">
          Hablá con nosotros por <strong>Whatsapp</strong>
        </p>
        <Button>
          <WhatsAppIcon />
          Consultar por Whatsapp
        </Button>
      </Section>
      <Section title="Beneficios">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <Benefit
            icon={<FaHeart />}
            text="Mejora tu bienestar físico y mental con nuestros tratamientos personalizados"
          />
          <Benefit
            icon={<FaLeaf />}
            text="Cuidado natural y consciente para tu cuerpo en todas las etapas de la vida"
          />
          <Benefit
            icon={<FaSmile />}
            text="Atención personalizada que se adapta a tus necesidades específicas"
          />
          <Benefit
            icon={<FaHeart />}
            text="Espacio de tranquilidad y relajación para tu bienestar integral"
          />
        </div>
      </Section>
      <Section title="Empezá a cuidar tu bienestar" alternative>
        <p className="text-lg md:text-xl leading-relaxed text-(--color-text-main) font-(--font-montserrat) text-center max-w-3xl mb-6">
          Empezá a cuidar tu bienestar con nuestros tratamientos personalizados
        </p>
        <Button variant="secondary">
          <WhatsAppIcon />
          Consultar por Whatsapp
        </Button>

        <p className="text-base md:text-lg leading-relaxed text-(--color-text-main) font-(--font-montserrat) text-center max-w-3xl mt-6">
          Lunes a Viernes: 9:00 - 18:00
        </p>
      </Section>
      <Section>
        <Image src="/assets/logo.png" alt="Vitali" width={200} height={422} />
      </Section>
    </div>
  );
}
