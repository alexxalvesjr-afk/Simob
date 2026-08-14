"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, CircleCheck, MessageCircle } from "lucide-react";
import Section, { SectionHead } from "./ui/Section";
import Reveal from "./ui/Reveal";
import { verticais, whatsappLink } from "@/content/site";

/**
 * Formulário de contato.
 * Sem back-end configurado, o envio abre o WhatsApp já com a mensagem montada —
 * o cliente não perde o contexto e a equipe recebe tudo no canal que já usa.
 * Para trocar por um endpoint real, basta preencher FORM_ENDPOINT.
 */
const FORM_ENDPOINT = "";

const campo =
  "w-full rounded-xl border border-ink-900/10 bg-paper px-4 py-3 text-ink-900 placeholder:text-ink-300 transition-colors focus:border-gold-400/60 focus:outline-none";

const rotulo =
  "mb-2 block text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-400";

export default function Contato() {
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    const nome = String(dados.get("nome") ?? "");
    const whats = String(dados.get("whatsapp") ?? "");
    const email = String(dados.get("email") ?? "");
    const area = String(dados.get("area") ?? "");
    const msg = String(dados.get("mensagem") ?? "");

    setEnviando(true);

    if (FORM_ENDPOINT) {
      try {
        await fetch(FORM_ENDPOINT, { method: "POST", body: dados });
      } catch {
        /* cai no WhatsApp abaixo */
      }
    }

    const texto = [
      `Olá! Sou ${nome}.`,
      area && `Tenho interesse em: ${area}.`,
      msg && `\n${msg}`,
      `\nMeu contato: ${whats}${email ? ` · ${email}` : ""}`,
    ]
      .filter(Boolean)
      .join(" ");

    window.open(whatsappLink(texto), "_blank", "noopener,noreferrer");
    setEnviando(false);
    setEnviado(true);
  }

  return (
    <Section id="contato" className="border-t border-ink-900/8">
      <SectionHead
        eyebrow="Fale conosco"
        titulo="Conta pra gente"
        destaque="o que você precisa."
        sub="Respondemos em até 2 horas úteis. Se for urgente, o WhatsApp é mais rápido."
        centro
      />

      <div className="mx-auto mt-14 max-w-2xl">
        {enviado ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-2xl p-10 text-center"
          >
            <CircleCheck size={44} className="mx-auto text-emerald-600" />
            <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">
              Abrimos o seu WhatsApp
            </h3>
            <p className="mt-2.5 text-ink-500">
              Se a janela não abriu, toque no botão abaixo — sua mensagem já está pronta.
            </p>
            <a
              href={whatsappLink("Olá! Acabei de preencher o formulário no site.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-signal-whats px-6 py-3 font-semibold text-white"
            >
              <MessageCircle size={17} /> Abrir conversa
            </a>
          </motion.div>
        ) : (
          <Reveal>
            <form onSubmit={onSubmit} className="glass rounded-2xl p-7 sm:p-9">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nome" className={rotulo}>
                    Nome *
                  </label>
                  <input id="nome" name="nome" required className={campo} placeholder="Como podemos te chamar" />
                </div>
                <div>
                  <label htmlFor="whatsapp" className={rotulo}>
                    WhatsApp *
                  </label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    required
                    type="tel"
                    className={campo}
                    placeholder="(71) 9 0000-0000"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="email" className={rotulo}>
                  E-mail
                </label>
                <input id="email" name="email" type="email" className={campo} placeholder="opcional" />
              </div>

              <div className="mt-5">
                <label htmlFor="area" className={rotulo}>
                  Qual área te interessa?
                </label>
                <select id="area" name="area" className={campo} defaultValue="">
                  <option value="" disabled>
                    Selecione…
                  </option>
                  {verticais.map((v) => (
                    <option key={v.id} value={v.nome} className="bg-paper-3">
                      {v.nome} — {v.eyebrow}
                    </option>
                  ))}
                  <option value="SiMoB Gestão" className="bg-paper-3">
                    SiMoB Gestão — plataforma para frotas
                  </option>
                </select>
              </div>

              <div className="mt-5">
                <label htmlFor="mensagem" className={rotulo}>
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows={4}
                  className={`${campo} resize-y`}
                  placeholder="Descreva rapidamente o que você precisa resolver"
                />
              </div>

              <button
                type="submit"
                disabled={enviando}
                className="group mt-7 flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 py-4 font-semibold text-ink-900 transition-all duration-300 hover:shadow-gold disabled:opacity-60"
              >
                {enviando ? "Enviando…" : "Enviar mensagem"}
                <Send size={17} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>

              <p className="mt-4 text-center text-xs leading-relaxed text-ink-400">
                Ao enviar, você concorda em ser contatado pela equipe do Grupo SiMoB.
                Não compartilhamos seus dados com terceiros.
              </p>
            </form>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
