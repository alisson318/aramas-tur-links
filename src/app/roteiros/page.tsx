import type { Metadata } from "next";
import Link from "next/link";
import { PiArrowLeft } from "react-icons/pi";

import Footer, { type FaqItem } from "@/components/footer";
import NavigationCard from "@/components/navigation-card";
import Header from "@/modules/home/ui/components/header";

export const metadata: Metadata = {
  title: "Roteiros",
  description:
    "Conheça os nossos roteiros através de viagens reais que já fizemos. Descubra como é a experiência inesquecível de viajar com a Aramas Tur.",
};

const roteirosFaqItems: FaqItem[] = [
  {
    question:
      "Os roteiros mostrados aqui são exatamente iguais para todas as viagens?",
    answer:
      "Os destinos e fotos desta página ilustram experiências incríveis que já vivemos com nossos clientes. O itinerário exato, as paradas e os atrativos podem variar dependendo do pacote específico, da época do ano e da duração da viagem.",
  },
  {
    question: "Como sei exatamente o que está incluso no meu pacote?",
    answer:
      "Cada viagem possui um descritivo próprio. Recomendamos sempre conferir o roteiro detalhado e os passeios inclusos diretamente na página de vendas onde você vai adquirir a sua passagem, ou tirando dúvidas com a nossa equipe de atendimento.",
  },
  {
    question: "As refeições e hospedagens estão inclusas?",
    answer:
      "Isso varia de acordo com cada viagem. A quantidade de refeições, o tipo de hospedagem, a duração e o preço dependem do pacote escolhido. Por isso, no momento da compra, é fundamental conferir todas essas informações na página de vendas do pacote ou entrar em contato com a nossa equipe para não ter erro.",
  },
  {
    question: "Gostei de um destino! Os preços são fixos?",
    answer:
      "Não. Os valores variam conforme a data, feriados e as opções de cada pacote. Fale com nossa equipe no WhatsApp ou acesse a nossa página de compras para conferir os pacotes abertos no momento e garantir o seu lugar.",
  },
];

const destinations = [
  {
    title: "Beto Carrero",
    image: "/imagens/beto-carrero.jpg",
    href: "https://aramastur.com/beto-carrero/",
  },
  {
    title: "Gramado e Canela",
    image: "/imagens/gramado-canela.jpg",
    href: "https://aramastur.com/gramado-e-canela",
  },
  {
    title: "Foz do Iguaçu e Argentina",
    image: "/imagens/foz-argentina.jpg",
    href: "https://aramastur.com/foz-e-argentina",
  },
  { title: "Ilha do Mel", image: "/imagens/ilha-do-mel.jpg", href: "#" },
  {
    title: "Balneário Camboriú",
    image: "/imagens/balneario-camboriu.jpg",
    href: "https://aramastur.com/balneario-camburiu/",
  },
  {
    title: "Itapema",
    image: "/imagens/itapema.jpg",
    href: "https://aramastur.com/itapema",
  },
  {
    title: "Costão do Santinho",
    image: "/imagens/costao-santinho.jpg",
    href: "https://aramastur.com/costao-do-santinho/",
  },
  {
    title: "Curitiba e Morretes",
    image: "/imagens/curitiba-morretes.jpg",
    href: "https://aramastur.com/curitiba-e-morretes",
  },
  { title: "Cabo Frio", image: "/imagens/cabo-frio.jpg", href: "#" },
  { title: "Holambra", image: "/imagens/holambra.jpg", href: "#" },
  {
    title: "Buraco do Padre e Vila Velha",
    image: "/imagens/buraco-vila-velha.jpg",
    href: "#",
  },
  {
    title: "Jogo do Corinthians",
    image: "/imagens/jogo-corinthians.jpg",
    href: "https://aramastur.com/corinthians/",
  },
  {
    title: "Aparecida do Norte e Campos do Jordão",
    image: "/imagens/aparecida-campos.jpg",
    href: "#",
  },
  {
    title: "Compras no Brás",
    image: "/imagens/compras-bras.jpg",
    href: "#",
  },
  {
    title: "Aparecida do Norte",
    image: "/imagens/aparecida.jpg",
    href: "https://aramastur.com/aparecida-do-norte/",
  },
];

const RoteirosPage = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen p-3 space-y-3">
        <section className="flex flex-col gap-6 px-6 pb-6 pt-16 lg:px-10 lg:pb-10 lg:pt-20 bg-muted rounded-xl font-light">
          <Link
            href="/"
            className="w-fit flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-foreground"
          >
            <PiArrowLeft size={16} />
            Voltar
          </Link>

          <div className="flex flex-col gap-2">
            <h1 className="text-2xl lg:text-3xl">Nossos Roteiros</h1>
            <p className="text-text-muted text-[15px]">
              Conheça os nossos roteiros através de viagens reais que já
              fizemos. Descubra como é a experiência inesquecível de viajar com
              a Aramas Tur.
            </p>
          </div>
        </section>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
          {destinations.map((destination) => (
            <NavigationCard
              key={destination.title}
              {...destination}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
            />
          ))}
        </div>

        <Footer faqItems={roteirosFaqItems} />
      </main>
    </>
  );
};

export default RoteirosPage;
