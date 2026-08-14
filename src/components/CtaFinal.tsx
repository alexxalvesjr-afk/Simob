import { MessageCircle, Phone, MapPin } from "lucide-react";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { empresa, whatsappLink } from "@/content/site";

/** Fechamento da página — a última chance de converter. */
export default function CtaFinal({
  titulo = "Pronto para tirar isso da sua cabeça?",
  sub = "Manda a placa ou o documento no WhatsApp. A gente diz na hora o que precisa, quanto custa e em quanto tempo fica pronto.",
  mensagem = "Olá! Vim pelo site do Grupo SiMoB e quero um orçamento.",
}: {
  titulo?: string;
  sub?: string;
  mensagem?: string;
}) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mesh-gold absolute inset-0 -z-10" aria-hidden />
      <div className="absolute inset-x-0 top-0 hairline" aria-hidden />

      <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
        <Reveal>
          <h2 className="text-balance text-4xl font-bold leading-[1.08] text-ink-900 sm:text-5xl lg:text-[3.5rem]">
            {titulo}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-500">
            {sub}
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={whatsappLink(mensagem)} externo variante="whats" tamanho="lg">
              <MessageCircle size={19} />
              {empresa.contato.whatsappLabel}
            </Button>
            <Button href="#contato" variante="contorno" tamanho="lg">
              Prefiro enviar um formulário
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-12 flex flex-col items-center justify-center gap-x-8 gap-y-3 text-sm text-ink-400 sm:flex-row">
            <a
              href={empresa.endereco.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-gold-600"
            >
              <MapPin size={15} className="text-gold-500" />
              {empresa.endereco.linha1}
            </a>
            <span className="flex items-center gap-2">
              <Phone size={15} className="text-gold-500" />
              {empresa.contato.fixo}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
