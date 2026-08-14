import Hero from "@/components/home/Hero";
import Credenciais from "@/components/home/Credenciais";
import Verticais from "@/components/home/Verticais";
import Numeros from "@/components/home/Numeros";
import Ecossistema from "@/components/home/Ecossistema";
import Passos from "@/components/home/Passos";
import GestaoTeaser from "@/components/home/GestaoTeaser";
import Depoimentos from "@/components/home/Depoimentos";
import Faq from "@/components/Faq";
import Contato from "@/components/Contato";
import CtaFinal from "@/components/CtaFinal";
import { faq } from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Credenciais />
      <Verticais />
      <Numeros />
      <Ecossistema />
      <Passos />
      <GestaoTeaser />
      <Depoimentos />
      <Faq itens={faq} />
      <CtaFinal />
      <Contato />
    </>
  );
}
