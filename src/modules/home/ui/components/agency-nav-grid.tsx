import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import VectorTopLeftAnimation from "./vector-top-left-animation";
import { BookOpen, Bus, MapPin, Route, Ticket, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const navigationCards: {
  title: string;
  icon: LucideIcon;
  className: string;
}[] = [
  {
    title: "Compre sua passagem aqui",
    icon: Ticket,
    className: "bg-gradient-to-br from-sky-500 to-blue-800",
  },
  {
    title: "Nossos roteiros",
    icon: Route,
    className: "bg-gradient-to-br from-emerald-500 to-teal-800",
  },
  {
    title: "Catálogo",
    icon: BookOpen,
    className: "bg-gradient-to-br from-amber-400 to-orange-700",
  },
  {
    title: "Sobre nós",
    icon: Users,
    className: "bg-gradient-to-br from-violet-500 to-indigo-800",
  },
  {
    title: "Nossa frota",
    icon: Bus,
    className: "bg-gradient-to-br from-slate-500 to-zinc-800",
  },
  {
    title: "Nossa localização",
    icon: MapPin,
    className: "bg-gradient-to-br from-rose-500 to-red-800",
  },
];

const AgencyNavGrid = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-3">
      {navigationCards.map((card) => {
        const Icon = card.icon;

        return (
          <Link
            key={card.title}
            href="#"
            className="w-full relative group cursor-pointer"
          >
            <AspectRatio
              ratio={0.75 / 1}
              className="overflow-hidden rounded-lg relative"
            >
              <div className={`absolute inset-0 ${card.className}`} />
              <div className="absolute inset-0 flex items-center justify-center text-white/90 transition-transform duration-300 ease-out lg:group-hover:scale-105">
                <Icon className="size-16" strokeWidth={1.25} />
              </div>
            </AspectRatio>

            <div className="absolute top-0 left-0 z-20 max-w-[92%]">
              <VectorTopLeftAnimation title={card.title} />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default AgencyNavGrid;
