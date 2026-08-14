import Link from "next/link";
import { Instagram, Facebook, Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { empresa, verticais, whatsappLink } from "@/content/site";

const uteis = [
  { label: "Consulta de placa", href: "/consulta-placa" },
  { label: "SiMoB Gestão", href: "/gestao" },
  { label: "Acompanhar OS", href: "/gestao" },
  { label: "Área do cliente", href: "/gestao" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gold-500/15 bg-ink-900">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(34rem 20rem at 15% 0%, rgba(212,160,23,.07), transparent 62%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Marca */}
          <div>
            <Logo className="h-12 w-auto" />
            <p className="mt-5 max-w-xs leading-relaxed text-white/55">
              {empresa.assinatura}. {empresa.promessa}
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href={empresa.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Grupo SiMoB"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold-500/25 text-white/60 transition-all duration-300 hover:border-gold-400/50 hover:text-gold-300"
              >
                <Instagram size={17} />
              </a>
              <a
                href={empresa.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook do Grupo SiMoB"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold-500/25 text-white/60 transition-all duration-300 hover:border-gold-400/50 hover:text-gold-300"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>

          {/* Soluções */}
          <nav aria-label="Nossas soluções">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gold-300">
              Soluções
            </h3>
            <ul className="mt-5 space-y-3">
              {verticais.map((v) => (
                <li key={v.id}>
                  <Link
                    href={v.slug}
                    className="text-white/55 transition-colors hover:text-gold-300"
                  >
                    {v.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Links úteis */}
          <nav aria-label="Links úteis">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gold-300">
              Links úteis
            </h3>
            <ul className="mt-5 space-y-3">
              {uteis.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/55 transition-colors hover:text-gold-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-gold-300">
              Contato
            </h3>
            <ul className="mt-5 space-y-4 text-white/55">
              <li className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-500" />
                <a
                  href={empresa.endereco.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="leading-relaxed transition-colors hover:text-gold-300"
                >
                  {empresa.endereco.linha1}
                  <br />
                  {empresa.endereco.linha2}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="mt-0.5 shrink-0 text-gold-500" />
                <span className="leading-relaxed">
                  {empresa.contato.whatsappLabel}
                  <br />
                  {empresa.contato.fixo}
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-gold-500" />
                <a
                  href={`mailto:${empresa.contato.email}`}
                  className="transition-colors hover:text-gold-300"
                >
                  {empresa.contato.email}
                </a>
              </li>
            </ul>

            <a
              href={whatsappLink("Olá! Vim pelo rodapé do site.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-signal-whats px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
            >
              <MessageCircle size={15} /> WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gold-500/12 pt-8 text-sm text-white/55 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {empresa.nome}. Todos os direitos reservados.
          </p>
          <p>CNPJ 00.000.000/0001-00 · Salvador, Bahia — Brasil</p>
        </div>
      </div>
    </footer>
  );
}
