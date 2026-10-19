import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  PiArrowUpRight,
  PiFacebookLogo,
  PiInstagramLogo,
  PiWhatsappLogo,
  PiYoutubeLogo,
} from "react-icons/pi";

import Carousel from "@/components/photo-carousel";
import Footer from "@/components/footer";
import NavigationCard from "@/components/navigation-card";
import { getExternalLinkProps } from "@/lib/utils";

const agency = {
  name: "Aramas Tur",
  role: "Agência de turismo",
  description:
    "Com mais de 30 anos de tradição, a Aramas Tur proporciona as melhores experiências de viagem. Oferecemos viagens rodoviárias e aéreas, cruzeiros, fretamento de ônibus e roteiros completos. Tudo isso com um atendimento humanizado para você explorar cada destino com segurança e tranquilidade, do planejamento ao retorno.",
};

const promotions = [
  {
    id: "promocao-1",
    image: "/imagens/promocao-1.jpg",
    alt: "Promoção Aramas 1",
  },
  {
    id: "promocao-2",
    image: "/imagens/promocao-2.jpg",
    alt: "Promoção Aramas 2",
  },
  {
    id: "promocao-3",
    image: "/imagens/promocao-3.jpg",
    alt: "Promoção Aramas 3",
  },
  {
    id: "promocao-4",
    image: "/imagens/promocao-4.jpg",
    alt: "Promoção Aramas 4",
  },
];

const socialLinks: { title: string; href: string; icon: ReactNode }[] = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/aramasturismo?exln=MXQ5Z2tranA5ejY4bA==",
    icon: <PiInstagramLogo size={18} />,
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/share/1asCQ9Dx32/",
    icon: <PiFacebookLogo size={18} />,
  },
  {
    title: "YouTube",
    href: "https://youtube.com/@aramasturismo?si=ivPVaUvIGmt8aSYi",
    icon: <PiYoutubeLogo size={18} />,
  },
];

const contactLink = {
  title: "WhatsApp",
  href: "https://wa.me/554491366418",
  icon: <PiWhatsappLogo size={18} />,
};

const navigationCards = [
  {
    title: "Compre sua passagem aqui",
    image: "/imagens/compre-aqui.jpg",
    href: "https://www.aramastur.com.br/",
  },
  {
    title: "Nossos roteiros",
    image: "/imagens/nossos-roteiros.jpg",
    href: "/roteiros",
  },
  {
    title: "Catálogo",
    image: "/imagens/catalogo.jpg",
    href: "https://drive.google.com/file/d/1kLU2qKT8XbVZvWKaEF10kTMXLEAU2DZT/view?usp=share_link",
  },
  { title: "Sobre nós", image: "/imagens/sobre-nos.jpg", href: "#" },
  {
    title: "Nossa frota",
    image: "/imagens/nossa-frota.jpg",
    href: "https://nossafrota.aramastur.com/",
  },
  {
    title: "Nossa localização",
    image: "/imagens/localizacao.jpg",
    href: "https://maps.app.goo.gl/gsAqKk18fg6fZNoJ6?g_st=aw",
  },
];
const PromotionsCarousel = () => {
  return (
    <Carousel
      className="absolute top-0 left-0 w-full h-full rounded-xl"
      containerClassName="h-full"
    >
      {promotions.map((slide, index) => (
        <div key={slide.id} className="flex-[0_0_100%] h-full relative">
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}
    </Carousel>
  );
};

const LinkButton = ({
  title,
  href,
  icon,
  primary = false,
}: {
  title: string;
  href: string;
  icon: ReactNode;
  primary?: boolean;
}) => {
  return (
    <Link
      href={href}
      {...getExternalLinkProps(href)}
      aria-label={title}
      className={`w-full h-full p-3 lg:p-5 rounded-xl flex justify-between items-center cursor-pointer group transition-all duration-150 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        primary
          ? "bg-white text-black hover:bg-white/90"
          : "bg-muted hover:bg-muted-foreground/10"
      }`}
    >
      <p className="text-sm">{title}</p>

      <div className="relative inline-block overflow-hidden size-[18px]">
        <span className="block transition-transform duration-200 ease-in-out group-hover:-translate-y-full">
          {icon}
        </span>
        <span className="absolute inset-0 translate-y-full transition-transform duration-200 ease-in-out group-hover:translate-y-0">
          <PiArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  );
};

const AgencyProfile = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4 items-stretch">
      <div className="col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-2 flex flex-col justify-between gap-6 p-6 lg:p-10 bg-muted rounded-xl font-light">
        <div className="flex gap-4 items-center">
          <div className="relative size-[60px] shrink-0 overflow-hidden rounded-full bg-background">
            <Image
              src="/imagens/logo-aramas.jpeg"
              alt="Logo Aramas Tur"
              fill
              sizes="60px"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-[2px]">
            <h1 className="text-lg">{agency.name}</h1>
            <p className="text-sm text-text-muted">{agency.role}</p>
          </div>
        </div>

        <p className="text-text-muted text-[15px]">{agency.description}</p>
      </div>

      <div className="col-span-1 flex flex-col justify-between gap-3">
        {socialLinks.map((link) => (
          <LinkButton key={link.title} {...link} />
        ))}
        <LinkButton {...contactLink} primary />
      </div>
    </div>
  );
};

const NavigationGrid = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3">
      {navigationCards.map((card) => (
        <NavigationCard
          key={card.title}
          {...card}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 25vw, 17vw"
        />
      ))}
    </div>
  );
};

const page = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full">
      {/* LEFT CONTENT - Fixed */}
      <div className="relative w-full lg:w-1/2 h-[70vh] lg:fixed lg:top-0 lg:left-0 lg:h-screen p-0 lg:p-3 rounded-xl">
        <PromotionsCarousel />
      </div>
      {/* Spacer for fixed left content */}
      <div className="hidden lg:block lg:w-1/2" />
      {/* RIGHT CONTENT - Scrollable */}
      <div className="w-full mt-3 lg:mt-0 lg:w-1/2 space-y-3 pb-3">
        <AgencyProfile />
        <NavigationGrid />
        <Footer />
      </div>
    </div>
  );
};

export default page;
