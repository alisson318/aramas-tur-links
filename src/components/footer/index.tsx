import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/site.config";

export type FaqItem = {
  question: string;
  answer: string;
};

const defaultFaqItems: FaqItem[] = [
  {
    question: "Quais são as formas de pagamento?",
    answer:
      "Aceitamos PIX, transferências, parcelamento nos cartões de crédito e também via boleto bancário, tudo para facilitar a sua viagem.",
  },
  {
    question: "Os pacotes incluem transporte e hospedagem?",
    answer:
      "A maioria dos nossos roteiros é completa, incluindo transporte rodoviário com a nossa própria frota. Dependendo do destino e da duração da viagem, a hospedagem e até mesmo a alimentação estão inclusas. Sempre confira os detalhes e inclusões no pacote específico que você está comprando.",
  },
  {
    question: "Como funciona o local de embarque?",
    answer:
      "Os embarques principais ocorrem na nossa agência em Sarandi. Contamos também com pontos de apoio estratégicos, podendo ser em Sarandi, na região e arredores, dependendo de cada roteiro.",
  },
  {
    question: "Posso cancelar ou remarcar minha passagem?",
    answer:
      "Sim, as remarcações e cancelamentos podem ser feitos através do nosso contato direto, seguindo as políticas de prazos de cada pacote.",
  },
  {
    question: "Como faço para reservar um roteiro?",
    answer:
      "A reserva pode ser feita diretamente pelos botões de compra aqui no site, ou entrando em contato com a nossa equipe no WhatsApp para um atendimento personalizado.",
  },
  {
    question: "A frota de ônibus é segura e confortável?",
    answer:
      "Sim! Viajando com a nossa frota própria, você garante veículos modernos, confortáveis e com todas as manutenções e itens de segurança rigorosamente em dia.",
  },
];

interface FooterProps {
  faqItems?: FaqItem[];
}

const Footer = ({ faqItems = defaultFaqItems }: FooterProps) => {
  return (
    <div className="flex flex-col items-center lg:items-start p-16 pb-12 gap-8 lg:gap-16 rounded-xl font-light relative flex-1 bg-primary text-white dark:text-black">
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        {/* LOGO  */}
        <div className="relative size-[60px] shrink-0 overflow-hidden rounded-full bg-background">
          <Image
            src="/imagens/logo-aramas.jpeg"
            alt="Logo Aramas Tur"
            fill
            sizes="60px"
            className="object-cover"
          />
        </div>

        {/* NAME  */}
        <div className="flex flex-col items-center lg:items-start gap-[2px]">
          <h1 className="text-2xl">{siteConfig.name}</h1>
          <p className="text-sm opacity-60">{siteConfig.role}</p>
        </div>
      </div>

      {/* FAQ  */}
      <div className="w-full flex flex-col gap-4">
        <h2 className="text-center lg:text-left">Perguntas Frequentes</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.question}
              value={item.question}
              className="border-white/15 dark:border-black/15"
            >
              <AccordionTrigger className="font-light [&>svg]:text-current">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="opacity-60">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <p className="text-xs md:text-sm text-center md:text-left opacity-60">
        © 2026 Aramas Tur. Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Footer;
