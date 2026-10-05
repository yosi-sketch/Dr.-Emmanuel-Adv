"use client";

import Image from "next/image";
import { office } from "./site-data";
import logo from "../public/emmanuel-logo.png";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Gavel,
  HeartHandshake,
  FileText,
  ShieldCheck,
  MessageCircle,
  Phone,
  Star,
  MapPin,
  Menu,
  Scale,
  X,
} from "lucide-react";

const officeName = office.name;
const whatsappUrl = office.whatsapp;
const mapsUrl = office.maps;
const portrait = "/emmanuel-hero.webp";

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.03 } },
};

const practiceAreas = [
  { number: "01", title: "Direito Criminal", icon: ShieldCheck, lead: "Defesa com atenção e responsabilidade",
    areas: ["Análise individual da situação apresentada", "Orientação sobre documentos e procedimentos", "Acompanhamento das etapas da defesa"],
    summary: "Uma defesa começa pela escuta. Atenção aos fatos, análise cuidadosa e clareza sobre os próximos passos.",
    details: "Uma situação criminal pede atenção, discrição e uma análise criteriosa. O atendimento começa pela compreensão dos fatos e dos documentos disponíveis. A partir dessa conversa, o Dr. Emmanuel explica as possibilidades de atuação e o acompanhamento necessário, com respeito à sua história e às particularidades do caso." },
  { number: "02", title: "Tribunal do Júri", icon: Gavel, lead: "Preparo para os momentos decisivos",
    areas: ["Estudo dos fatos e dos elementos do processo", "Preparação e organização da defesa", "Orientação e acompanhamento do caso"],
    summary: "Dedicação ao estudo do processo e à construção da defesa, com comunicação próxima em cada etapa.",
    details: "A atuação no Tribunal do Júri envolve estudo, preparo e responsabilidade. Cada processo precisa ser compreendido em seus detalhes. O Dr. Emmanuel dedica atenção aos elementos apresentados e à preparação da defesa, mantendo uma comunicação clara sobre o andamento e as etapas do caso." },
  { number: "03", title: "Direito de Família", icon: HeartHandshake, lead: "Sensibilidade para acolher sua história",
    areas: ["Orientação em situações de divórcio", "Análise dos documentos e do contexto familiar", "Acompanhamento dos encaminhamentos definidos"],
    summary: "Questões familiares merecem uma conversa cuidadosa. Orientação para atravessar mudanças com mais clareza.",
    details: "Mudanças na vida familiar trazem dúvidas e decisões importantes. O atendimento oferece espaço para compreender sua realidade, organizar os documentos e conversar sobre os possíveis encaminhamentos. A orientação em situações de divórcio considera o contexto de cada pessoa, com discrição, atenção e respeito." },
  { number: "04", title: "Consultoria Jurídica", icon: FileText, lead: "Clareza antes de tomar uma decisão",
    areas: ["Escuta e compreensão da sua demanda", "Análise inicial de documentos", "Orientação sobre possibilidades e próximos passos"],
    summary: "Apresente sua dúvida e compreenda os caminhos possíveis com uma orientação acessível e individualizada.",
    details: "Nem toda demanda começa com um processo. A consulta permite apresentar suas dúvidas, compreender documentos e avaliar as possibilidades de acompanhamento. O Dr. Emmanuel esclarece as condições do atendimento e os próximos passos de forma direta, para que você possa tomar decisões com mais informação." },
];

const reviews = [
  { author: "Nagila", quote: "Excelente atendimento. Profissional muito atencioso, explicou tudo com clareza e me deixou segura sobre o caso. Muito obrigada pelo suporte." },
  { author: "Rafael Camargos", quote: "Sempre demonstrou atenção, clareza nas explicações e verdadeiro compromisso em ajudar. Recomendo sem hesitar." },
  { author: "jane gomes", quote: "Advogado super atencioso, responde a todas as dúvidas, superou minhas expectativas. Super recomendo." },
  { author: "Denize Oliveira", quote: "Profissional prestativo e expressa com muita clareza. Parabéns!!" },
  { author: "Luara Lage", quote: "Sua clareza nas explicações e comprometimento fazem toda a diferença. Excelente advogado!" },
  { author: "Julio Oliveira", quote: "Muito atencioso, ótimo profissional, sempre muito solicito. Pode confiar que é uma pessoa de boa índole e exemplar." },
];

const questions = [
  { title: "Como agendo um atendimento?", answer: "Entre em contato pelo WhatsApp (31) 99798-9797 e conte brevemente sua situação. Você receberá orientação sobre o agendamento, os documentos necessários e as condições do atendimento." },
  { title: "O que devo levar à primeira conversa?", answer: "Se houver documentos, notificações ou informações sobre um processo, mencione-os ao agendar. O escritório orientará quais materiais são necessários para compreender sua demanda." },
  { title: "Posso apresentar minha dúvida pelo WhatsApp?", answer: "Sim. O WhatsApp é o canal para o primeiro contato com o escritório. Apresente sua dúvida e consulte a disponibilidade e o formato de atendimento adequado ao seu caso." },
  { title: "Onde fica o escritório?", answer: "Na Av. Duque de Caxias, 1.389, 2º andar, bairro Quatorze de Fevereiro, em Itabira, Minas Gerais. CEP 35900-236. Entre em contato para agendar o atendimento presencial." },
];

const navigation = [
  ["Início", "#inicio"],
  ["Atuação", "#atuacao"],
  ["O advogado", "#advogado"],
  ["Escritório", "#escritorio"],
  ["Contato", "#contato"],
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return <Image src={logo} alt="Emmanuel Souza — Advogado — OAB/MG 232.059" sizes={compact ? "(max-width: 640px) 190px, 260px" : "(max-width: 640px) 240px, 300px"} className={compact ? "h-auto w-[190px] sm:w-[260px]" : "h-auto w-[240px] sm:w-[300px]"} />;
}

function Heading({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={light ? "eyebrow-light mb-4" : "eyebrow mb-4"}>
        {eyebrow}
      </p>
      <h2
        className={
          light
            ? "font-serif text-4xl leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.55rem]"
            : "font-serif text-4xl leading-[1.06] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-7 text-white/65"
              : "mt-5 max-w-xl text-[15px] leading-7 text-ink-soft"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const dialogRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<
    (typeof practiceAreas)[number] | null
  >(null);

  useEffect(() => {
    if (!activeArea) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const focusTimer = window.setTimeout(() => dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus(), 0);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveArea(null);
      if (event.key === "Tab") {
        const elements = dialogRef.current?.querySelectorAll<HTMLElement>('button, a[href]');
        if (!elements?.length) return;
        const first = elements[0], last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.clearTimeout(focusTimer);
      previouslyFocused?.focus();
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeArea]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-x-clip bg-ivory text-ink">
        <a className="skip-link" href="#conteudo">
          Ir para o conteúdo
        </a>

        <header className="sticky top-0 z-40 border-b border-white/10 bg-night/95 text-white backdrop-blur-xl">
          <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[76px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label={`${officeName} — início`}
              onClick={closeMenu}
              className="shrink-0"
            >
              <BrandMark compact />
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 xl:flex"
            >
              {navigation.map(([label, href]) => (
                <a className="nav-link" href={href} key={href}>
                  {label}
                </a>
              ))}
            </nav>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full border border-brand-300/60 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-100 transition-colors hover:border-brand-200 hover:bg-brand-300 hover:text-night lg:inline-flex"
            >
              <MessageCircle size={15} /> Fale conosco
              <ArrowUpRight size={13} />
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-full border border-white/20 xl:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-white/10 bg-night px-6 xl:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {navigation.map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm text-white/75 transition-colors hover:text-brand-200"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-300 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.13em] text-night"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                  >
                    <MessageCircle size={15} /> Conversar no WhatsApp
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        <div id="conteudo">
          <section
            id="inicio"
            className="relative isolate scroll-mt-24 overflow-hidden bg-night text-white"
          >
            <div className="pointer-events-none absolute -right-40 top-10 -z-10 size-[35rem] rounded-full bg-brand-800/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-52 bottom-[-17rem] -z-10 size-[36rem] rounded-full bg-brand-700/10 blur-3xl" />
            <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:min-h-[740px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-12 lg:py-20">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="relative z-10 max-w-2xl lg:py-6"
              >
                <motion.p variants={reveal} className="eyebrow-light mb-7">
                  ADVOCACIA EM ITABIRA · MINAS GERAIS
                </motion.p>
                <motion.h1
                  variants={reveal}
                  className="max-w-[730px] font-serif text-[2.85rem] leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.6rem]"
                >
                  Defesa firme.<br />Orientação clara.<br />
                  <em className="font-normal text-brand-300">Cuidado com você.</em>
                </motion.h1>
                <motion.p
                  variants={reveal}
                  className="mt-7 max-w-xl text-[15px] leading-7 text-white/70 sm:text-base sm:leading-8"
                >
                  Dr. Emmanuel Carlos de Souza. Advocacia criminal e de família
                  com escuta atenta, análise criteriosa e compromisso
                  com cada etapa da sua história.
                </motion.p>
                <motion.div
                  variants={reveal}
                  className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-300 bg-brand-300 px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-night transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-200"
                  >
                    <MessageCircle size={16} /> Agende uma conversa
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="#atuacao"
                    className="group inline-flex items-center gap-2 px-1 py-3 text-sm font-medium text-white/80 transition-colors hover:text-brand-200"
                  >
                    Conheça a atuação
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </motion.div>
                <motion.div
                  variants={reveal}
                  className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/15 pt-6 text-xs text-white/65"
                >
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={15} className="text-brand-300" />
                    Itabira · MG
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Scale size={15} className="text-brand-300" />
                    {office.registration}
                  </span>
                </motion.div>
              </motion.div>

              <motion.figure
                initial={{ opacity: 0, scale: 0.97, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative mx-auto w-full max-w-[490px] lg:ml-auto lg:mr-2"
              >
                <div className="absolute -inset-3 border border-brand-300/35 sm:-inset-4" />
                <div className="relative aspect-[4/5] overflow-hidden bg-night">
                  <Image
                    src={portrait}
                    alt="Dr. Emmanuel Carlos de Souza, advogado em Itabira"
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                    className="object-cover object-top"
                    preload
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-night/90 to-transparent" />
                  <figcaption className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                    <div>
                      <p className="font-serif text-2xl">Emmanuel Souza</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.17em] text-white/70">
                        Advogado · OAB/MG 232.059
                      </p>
                    </div>
                    <span className="grid size-11 shrink-0 place-items-center rounded-full border border-brand-200/70 text-brand-200">
                      <Scale size={18} />
                    </span>
                  </figcaption>
                </div>
                <div className="absolute -left-3 bottom-[22%] border border-white/10 bg-night px-4 py-2.5 text-[10px] font-medium tracking-[0.1em] text-white shadow-card sm:-left-9 sm:px-5">
                  ESCUTA. CLAREZA. COMPROMISSO.
                </div>
              </motion.figure>
            </div>
          </section>

          <section
            aria-label="Informações sobre o escritório"
            className="border-b border-ink/10 bg-white"
          >
            <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-3 sm:gap-4 sm:px-8 lg:px-12">
              {[
                ["232.059", "inscrição na OAB/MG"],
                ["Itabira · MG", "sede do escritório"],
                [`${office.rating} / 5`, "avaliação no Google"],
              ].map(([value, label], index) => (
                <div
                  key={value}
                  className={
                    index > 0
                      ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-ink/10"
                      : "flex items-center gap-4 sm:justify-center"
                  }
                >
                  <span className="font-serif text-2xl text-brand-700 sm:text-[1.7rem]">
                    {value}
                  </span>
                  <span className="max-w-[145px] text-[11px] leading-5 text-ink-soft">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section
            id="atuacao"
            className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                variants={reveal}
                className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
              >
                <Heading
                  eyebrow="ÁREAS DE ATUAÇÃO"
                  description="Defesa, orientação e acompanhamento com atenção às particularidades de cada caso."
                >
                  Quando o direito encontra<br /><em className="font-normal text-brand-700">a sua história.</em>
                </Heading>
                <span className="hidden h-px w-28 bg-brand-500/60 md:mb-3 md:block" />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={stagger}
                className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-2"
              >
                {practiceAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <motion.button
                      key={area.number}
                      variants={reveal}
                      type="button"
                      onClick={() => setActiveArea(area)}
                      aria-haspopup="dialog"
                      className="group flex min-h-[300px] flex-col border border-ink/10 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/55 hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 sm:p-8"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-lg text-brand-700">
                          {area.number}
                        </span>
                        <span className="grid size-11 place-items-center rounded-full border border-brand-700/20 text-brand-800 transition-colors group-hover:border-brand-700 group-hover:bg-brand-700 group-hover:text-white">
                          <Icon size={19} strokeWidth={1.6} />
                        </span>
                      </div>
                      <h3 className="mt-8 font-serif text-[1.65rem] leading-tight text-ink">
                        {area.title}
                      </h3>
                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-800">
                        {area.lead}
                      </p>
                      <p className="mt-3 flex-1 text-[13px] leading-6 text-ink-soft">
                        {area.summary}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-800">
                        Conheça o atendimento
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </motion.button>
                  );
                })}
              </motion.div>
            </div>
          </section>

          <section id="advogado" className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
              <motion.figure initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal} className="relative mx-auto w-full max-w-[480px]">
                <div className="relative aspect-[3/4] overflow-hidden bg-night">
                  <Image src="/emmanuel-retrato.webp" alt="Dr. Emmanuel Carlos de Souza em retrato profissional" fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 65vw, 40vw" className="object-cover object-top" />
                </div>
                <figcaption className="border-b border-brand-300 py-5">
                  <p className="font-serif text-2xl sm:text-3xl">Dr. Emmanuel Carlos de Souza</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-brand-700">Advogado · {office.registration}</p>
                </figcaption>
                <span aria-hidden="true" className="absolute -left-3 -top-3 size-20 border-l border-t border-brand-300 sm:-left-5 sm:-top-5" />
              </motion.figure>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
                <Heading eyebrow="O ADVOGADO" description="Por trás de cada caso, existe uma pessoa que precisa ser ouvida.">Firmeza na atuação.<br /><em className="font-normal text-brand-700">Humanidade no atendimento.</em></Heading>
                <p className="mt-6 text-[15px] leading-8 text-ink-soft">Em Itabira, o Dr. Emmanuel Carlos de Souza conduz uma advocacia que valoriza a atenção aos detalhes, o estudo de cada demanda e o diálogo com quem busca orientação.</p>
                <p className="mt-4 text-[15px] leading-8 text-ink-soft">A proposta é simples: ouvir com cuidado, explicar com clareza e acompanhar com responsabilidade. Da primeira conversa às próximas etapas, sua história recebe um olhar individual.</p>
                <div className="mt-9 space-y-5 border-t border-ink/10 pt-7">
                  {["Escuta atenta e respeito à sua realidade", "Explicações claras para decisões conscientes", "Dedicação e discrição em cada etapa"].map((item) => <p key={item} className="flex items-start gap-3 text-sm leading-6"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />{item}</p>)}
                </div>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-3 border-b border-brand-600 pb-2 text-xs font-semibold uppercase tracking-widest text-brand-800">Converse com o escritório <ArrowUpRight size={16} /></a>
              </motion.div>
            </div>
          </section>

          <section
            id="escritorio"
            className="scroll-mt-24 bg-brand-100/40 py-20 sm:py-28 lg:py-32"
          >
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-12">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} className="relative border border-brand-300/30 bg-night px-7 py-10 text-white sm:p-12">
                <p className="eyebrow-light">NOSSA SEDE</p>
                <div className="my-10 flex items-center justify-between border-y border-white/15 py-8">
                  <div><p className="font-serif text-5xl text-brand-200">Itabira.</p><p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/60">Minas Gerais</p></div>
                  <Scale size={62} strokeWidth={0.8} className="text-brand-300" aria-hidden="true" />
                </div>
                <address className="not-italic text-sm leading-8 text-white/75">Av. Duque de Caxias, 1.389<br />2º andar · Quatorze de Fevereiro<br />Itabira · MG · CEP 35900-236</address>
                <a href={mapsUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 border-b border-brand-300/60 pb-2 text-xs text-brand-200">Como chegar <ArrowUpRight size={15} /></a>
                <span aria-hidden="true" className="absolute right-0 top-0 h-px w-28 bg-brand-300" />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
              >
                <motion.p variants={reveal} className="eyebrow">
                  O ESCRITÓRIO
                </motion.p>
                <motion.h2
                  variants={reveal}
                  className="mt-4 max-w-2xl font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]"
                >
                  Um ponto de apoio.<br /><em className="font-normal text-brand-700">Perto de você.</em>
                </motion.h2>
                <motion.p
                  variants={reveal}
                  className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft"
                >
                  Localizado na Avenida Duque de Caxias, em Itabira,
                  o escritório é um ponto de encontro para conversar
                  sobre suas dúvidas e compreender sua situação com tranquilidade.
                </motion.p>
                <motion.p
                  variants={reveal}
                  className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft"
                >
                  O primeiro contato pode ser feito pelo WhatsApp.
                  Consulte a disponibilidade, as condições do atendimento
                  e os documentos necessários antes de agendar sua visita.
                </motion.p>
                <motion.a
                  variants={reveal}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 border-b border-brand-700/40 pb-2 text-xs font-semibold uppercase tracking-[0.13em] text-brand-800 transition-colors hover:border-brand-700 hover:text-brand-700"
                >
                  Vamos conversar
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </motion.a>
              </motion.div>
            </div>
          </section>

          <section
            id="avaliacoes"
            className="scroll-mt-24 bg-white py-20 sm:py-24"
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
              <div className="flex flex-col gap-7 border-b border-ink/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <Heading
                  eyebrow="AVALIAÇÕES PÚBLICAS"
                  description="Atenção e clareza nas palavras de quem compartilhou sua experiência com o Dr. Emmanuel no Google."
                >
                  A experiência no atendimento.
                </Heading>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex shrink-0 items-center gap-2 self-start border-b border-brand-600/60 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:border-brand-700 hover:text-brand-700 sm:self-auto"
                >
                  Ver perfil e avaliações no Google
                  <ArrowUpRight
                    size={14}
                    className="text-brand-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4"><span className="font-serif text-4xl text-ink">{office.rating}</span><span className="flex gap-1 text-brand-700" aria-label={`Nota ${office.rating} de 5`}>{[1,2,3,4,5].map((star) => <Star key={star} size={16} fill="currentColor" />)}</span><p className="text-xs text-ink-soft">{office.reviewCount} avaliações no Google</p></div>
              <p className="mt-3 text-[11px] leading-5 text-ink-soft">Nota e quantidade de avaliações do perfil compartilhado pelo escritório. Consulte o Google para os dados atuais.</p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={stagger}
                className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
              >
                {reviews.map(({ author, quote }) => (
                  <motion.figure
                    key={author}
                    variants={reveal}
                    className="group flex min-h-[220px] flex-col border border-ink/10 bg-brand-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/55 hover:bg-white hover:shadow-card sm:p-7"
                  >
                    <span
                      aria-hidden="true"
                      className="font-serif text-5xl leading-none text-brand-600"
                    >
                      “
                    </span>
                    <blockquote className="mt-3 flex-1 font-serif text-[20px] leading-[1.45] text-ink">
                      {quote}
                    </blockquote>
                    <figcaption className="mt-6 border-t border-ink/10 pt-4">
                      <span className="flex items-center gap-3 text-[11px] font-semibold text-ink">
                        <span className="h-px w-5 bg-brand-500" />
                        {author}
                      </span>
                      <span className="mt-1 block pl-8 text-[9px] font-semibold uppercase tracking-[0.15em] text-ink-soft">
                        Trecho de avaliação pública
                      </span>
                    </figcaption>
                  </motion.figure>
                ))}
              </motion.div>
            </div>
          </section>

          <section id="atendimento" className="scroll-mt-24 border-t border-ink/10 bg-ivory py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal}>
                <Heading eyebrow="COMO FUNCIONA" description="Da primeira mensagem ao acompanhamento, uma conversa clara sobre cada etapa.">Uma conversa.<br /><em className="font-normal text-brand-700">Um caminho bem orientado.</em></Heading>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="mt-12 grid gap-8 sm:grid-cols-3">
                {[
                  ["01", "Conte sua história", "Entre em contato pelo WhatsApp e apresente sua dúvida ou a situação que precisa de atenção."],
                  ["02", "Entenda as possibilidades", "O escritório analisa sua demanda e explica as possibilidades e as condições do atendimento."],
                  ["03", "Acompanhe cada etapa", "Com a atuação definida, você recebe orientação sobre os próximos passos do seu caso."],
                ].map(([number, title, description]) => (
                  <motion.div key={number} variants={reveal} className="border-t border-brand-300 pt-6">
                    <p className="font-serif text-3xl text-brand-700">{number}</p>
                    <h3 className="mt-4 font-serif text-2xl">{title}</h3>
                    <p className="mt-3 text-[13px] leading-7 text-ink-soft">{description}</p>
                  </motion.div>
                ))}
              </motion.div>
              <div className="mt-20 grid gap-9 border-t border-ink/10 pt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                <Heading eyebrow="DÚVIDAS FREQUENTES">Antes da<br /><em className="font-normal text-brand-700">primeira conversa.</em></Heading>
                <div>
                  {questions.map(({ title, answer }) => (
                    <details key={title} className="faq-item group border-b border-ink/15">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-sm font-medium">
                        {title}<span aria-hidden="true" className="text-xl text-brand-700 group-open:hidden">+</span><span aria-hidden="true" className="hidden text-xl text-brand-700 group-open:block">−</span>
                      </summary>
                      <p className="max-w-xl pb-6 text-[13px] leading-7 text-ink-soft">{answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="contato"
            className="scroll-mt-24 bg-night py-20 text-white sm:py-28 lg:py-32"
          >
            <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
              <div>
                <Heading
                  eyebrow="CONTATO E LOCALIZAÇÃO"
                  light
                  description="Apresente sua dúvida ao escritório e consulte as condições para uma orientação individual. Atendimento presencial em Itabira mediante agendamento."
                >
                  Seu próximo passo começa com uma conversa.
                </Heading>
                <div className="mt-9 flex flex-col items-start gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 border-b border-brand-300/45 pb-3 text-sm text-brand-100 transition-colors hover:border-brand-200 hover:text-white"
                  >
                    <MessageCircle size={17} /> Conversar pelo WhatsApp
                    <ArrowUpRight size={14} />
                  </a>
                  <a href={office.telephone} className="inline-flex items-center gap-3 py-2 text-sm text-white/80 hover:text-brand-200"><Phone size={17} /> {office.phoneDisplay}</a>
                </div>
              </div>

              <div className="relative overflow-hidden border border-white/15 bg-white/[0.04] p-7 sm:p-10">
                <div className="absolute right-0 top-0 h-px w-32 bg-brand-300" />
                <div className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-full border border-brand-300/35 text-brand-200">
                    <MapPin size={21} strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                      Endereço
                    </p>
                    <p className="mt-1 font-serif text-2xl text-white">
                      Itabira · MG
                    </p>
                  </div>
                </div>
                <address className="mt-7 max-w-md not-italic text-[14px] leading-7 text-white/70">
                  Av. Duque de Caxias, 1.389 · 2º andar
                  <br />
                  Quatorze de Fevereiro
                  <br />
                  Itabira · MG · CEP 35900-236
                </address>
                <div className="my-7 h-px bg-white/15" />
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-white/60">
                    Dr. Emmanuel Carlos de Souza
                  </p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:border-brand-300 hover:text-brand-200"
                  >
                    Ver localização <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="bg-brand-950 px-5 py-12 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label={`${officeName} — voltar ao início`}
                className="inline-flex"
              >
                <BrandMark />
              </a>
              <p className="mt-5 text-[10px] uppercase tracking-[0.15em] text-brand-200">{office.registration}</p>
              <p className="mt-4 max-w-xs text-xs leading-6 text-white/55">
                Advocacia com clareza, responsabilidade e atenção à sua história.
                Itabira, Minas Gerais.
              </p>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/65">
                <a className="footer-link" href="#atuacao">
                  Áreas de atuação
                </a>
                <a className="footer-link" href="#advogado">
                  O advogado
                </a>
                <a className="footer-link" href="#escritorio">
                  O escritório
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações
                </a>
                <a className="footer-link" href="#contato">
                  Contato
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                Canais oficiais
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/65">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
                <a href={office.telephone} className="footer-link inline-flex items-center gap-2"><Phone size={14} /> {office.phoneDisplay}</a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={14} className="mt-0.5 shrink-0" /> Itabira · MG
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-5 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {officeName}.</p>
            <p>
              Conteúdo informativo. Cada situação deve ser analisada
              individualmente.
            </p>
          </div>
        </footer>

        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-night/75 p-0 backdrop-blur-sm sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl bg-ivory p-7 shadow-card sm:max-w-xl sm:rounded-sm sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da área"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
                >
                  <X size={18} />
                </button>
                <p className="eyebrow">ÁREAS DE ATUAÇÃO</p>
                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-4xl leading-tight text-ink"
                >
                  {activeArea.title}
                </h2>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-800">
                  {activeArea.lead}
                </p>
                <p className="mt-5 text-sm leading-7 text-ink-soft">
                  {activeArea.details}
                </p>
                <ul className="mt-6 space-y-3">
                  {activeArea.areas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-3 text-sm text-ink"
                    >
                      <span className="size-1.5 rounded-full bg-brand-700" />
                      {area}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-300 bg-brand-300 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-night transition-colors hover:bg-brand-200"
                >
                  <MessageCircle size={15} /> Conversar sobre meu caso
                  <ArrowUpRight size={14} />
                </a>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
