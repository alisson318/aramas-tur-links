import Carousel from "@/components/photo-carousel";
import { Skeleton } from "@/components/ui/skeleton";

const promotions = [
  {
    id: "ofertas",
    kicker: "Promoções Ativas",
    title: "Ofertas para a sua próxima viagem",
    description:
      "Condições especiais em pacotes selecionados. Fale com a Aramas e garanta a sua vaga.",
    className: "bg-gradient-to-br from-sky-700 via-cyan-600 to-teal-500",
  },
  {
    id: "horarios",
    kicker: "Aviso importante",
    title: "Confira horários antes de reservar",
    description:
      "Saídas, disponibilidade e documentos podem mudar. Consulte a equipe antes de confirmar.",
    className: "bg-gradient-to-br from-slate-900 via-slate-700 to-sky-800",
  },
  {
    id: "roteiros",
    kicker: "Promoções Ativas",
    title: "Roteiros com desconto nesta temporada",
    description:
      "Experiências em grupo e destinos escolhidos pela agência, com atendimento do início ao fim.",
    className: "bg-gradient-to-br from-amber-700 via-orange-600 to-rose-600",
  },
  {
    id: "monte",
    kicker: "Comunicado",
    title: "Monte sua viagem com a Aramas",
    description:
      "Passagens, roteiros e suporte em um só lugar para você viajar com tranquilidade.",
    className: "bg-gradient-to-br from-emerald-800 via-teal-700 to-cyan-700",
  },
] as const;

export const SliderView = () => {
  return (
    <Carousel
      className="absolute top-0 left-0 w-full h-full rounded-xl"
      containerClassName="h-full"
    >
      {promotions.map((slide) => (
        <div
          key={slide.id}
          className={`flex-[0_0_100%] h-full relative ${slide.className}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_42%)]" />
          <p className="pointer-events-none absolute -right-4 bottom-16 select-none text-[18vw] font-medium leading-none text-white/10 lg:text-[8vw]">
            Aramas
          </p>
          <div className="absolute inset-x-0 bottom-0 z-10 p-8 pb-16 text-white lg:p-12 lg:pb-20">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/80">
              {slide.kicker}
            </p>
            <h2 className="mt-3 max-w-lg text-3xl font-light leading-tight lg:text-5xl">
              {slide.title}
            </h2>
            <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-white/85 lg:text-base">
              {slide.description}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export const SliderViewLoadingStatus = () => {
  return (
    <div className="w-full lg:w-1/2 h-[70vh] lg:fixed lg:top-0 lg:left-0 lg:h-screen p-0 lg:p-3 rounded-xl">
      <Skeleton className="w-full h-full" />
    </div>
  );
};
