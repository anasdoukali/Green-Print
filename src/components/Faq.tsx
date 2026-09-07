import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { Eyebrow, Reveal } from "./Section";

const FAQS = [
  {
    q: "Is this for complete beginners?",
    a: "Yes. The playbook assumes zero experience and walks you from first idea to launch, one worksheet at a time.",
  },
  {
    q: "Do I need technical skills?",
    a: "No coding and no advanced AI knowledge required. If you can use everyday apps, you can follow every workflow.",
  },
  {
    q: "Do I need an existing audience?",
    a: "No. The content system is built for starting from zero followers.",
  },
  {
    q: "Do I need paid AI tools?",
    a: "No. The workflows prioritize free, accessible tools — with honest notes on when upgrades are worth it.",
  },
  {
    q: "What products can I build?",
    a: "Ebooks, guides, templates, checklists, prompt packs, and other downloadable products in any niche.",
  },
  {
    q: "Will this guarantee I make money?",
    a: "No. You get the system, prompts, and plan — results depend on your execution, consistency, and market.",
  },
  {
    q: "How long do I get access?",
    a: "Lifetime. One payment, instant download, future updates included.",
  },
  {
    q: "How long does it take?",
    a: "Self-paced. The 30-day challenge and 7-day launch plan give you a clear path if you want structure.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-b border-line py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow>Fine print</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-4xl font-bold tracking-tight text-bone md:text-6xl">
                Questions,
                <br />
                <span className="font-serif italic text-mint">answered</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-fog">
                Something else on your mind? Write to{" "}
                <a href="mailto:greenofprinters@gmail.com" className="text-mint underline underline-offset-4 hover:text-bone">
                  greenofprinters@gmail.com
                </a>{" "}
                — a human replies within a day.
              </p>
            </Reveal>
          </div>

          <div className="border-t border-line">
            {FAQS.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 0.04}>
                  <div className={`border-b border-line transition-colors ${isOpen ? "bg-mint/[0.03]" : ""}`}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 px-2 py-6 text-left md:px-4"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className={`font-mono text-xs ${isOpen ? "text-mint" : "text-fog/50"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-lg font-bold tracking-tight text-bone md:text-xl">{f.q}</span>
                      </span>
                      <Plus
                        className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-45 text-mint" : "text-fog"
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl px-2 pb-7 pl-12 text-sm leading-relaxed text-fog md:px-4 md:pl-14">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.1}>
            <a
              href="#pricing"
              className="group mt-10 flex items-center justify-center gap-2.5 bg-mint px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#14b673]"
            >
              All clear — Get Instant Access
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
