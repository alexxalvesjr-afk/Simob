import Hero from "@/components/home/Hero";
import Credenciais from "@/components/home/Credenciais";
import Despachante from "@/components/home/Despachante";
import Passos from "@/components/home/Passos";
import CalendarioPlaca from "@/components/home/CalendarioPlaca";
import Numeros from "@/components/home/Numeros";
import Verticais from "@/components/home/Verticais";
import Ecossistema from "@/components/home/Ecossistema";
import GestaoTeaser from "@/components/home/GestaoTeaser";
import Depoimentos from "@/components/home/Depoimentos";
import Faq from "@/components/Faq";
import Contato from "@/components/Contato";
import CtaFinal from "@/components/CtaFinal";
import { faq } from "@/content/site";

/**
 * Ordem da home definida na reunião: despachante é 70% do faturamento, então
 * é ele quem ocupa o corpo da página. As outras quatro verticais continuam
 * acessíveis (cada uma tem a sua página), mas entram depois — como o "e ainda
 * tem", não como cinco opções concorrendo pela mesma atenção.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Credenciais />
      <Despachante />
      <Passos />
      <CalendarioPlaca />
      <Numeros />
      <Verticais />
      <Ecossistema />
      <GestaoTeaser />
      <Depoimentos />
      <Faq itens={faq} />
      <CtaFinal />
      <Contato />
    </>
  );
}
