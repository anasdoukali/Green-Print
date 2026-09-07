import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Section";

const STEPS = [
  {
    letter: "F",
    name: "Find",
    body: "Find a problem people actually pay for — and turn it into a product idea worth building.",
  },
  {
    letter: "R",
    name: "Research",
    body: "Validate demand with AI before you spend a single day building anything.",
  },
  {
    letter: "B",
    name: "Build",
    body: "Use AI to write, design, and package the product — worksheet by worksheet.",
  },
  {
    letter: "S",
    name: "Sell",
    body: "Build the offer, price it, and put up a sales page that does the talking.",
  },
  {
    letter: "L",
    name: "Launch",
    body: "Plan content that attracts buyers, then run the seven-day launch plan.",
  },
  {
    letter: "G",
    name: "Grow",
    body: "Track what works, optimize the product, and scale with the 90-day roadmap.",
  },
];

export default function Framework() {
  return (
    <section id="framework" className="relative overflow-hidden bg-paper py-24 text-ink md:py-32">
      <div className="halftone pointer-events-none absolute inset-0 opacity-50" />

      {/* registration marks */}
      <span className="absolute left-6 top-6 font-mono text-lg text-ink/30">+</span>
      <span className="absolute right-6 top-6 font-mono text-lg text-ink/30">+</span>
      <span className="absolute bottom-6 left-6 font-mono text-lg text-ink/30">+</span>
      <span className="absolute bottom-6 right-6 font-mono text-lg text-ink/30">+</span>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-ink/60">
                {"//"} Spec sheet 001 — the system
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
                Everything you need to go from{" "}
                <span className="font-serif italic">idea to launch.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="max-w-sm text-sm leading-relaxed text-ink/70">
              Not random AI tricks — one practical system across 13 modules and
              140 lessons. Rerun it for every product you ever make.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 border-t-2 border-ink">
          {STEPS.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <div className="group grid grid-cols-[auto_1fr] items-center gap-6 border-b border-ink/25 py-7 transition-colors duration-300 hover:bg-ink md:grid-cols-[120px_220px_1fr_60px] md:gap-10 md:px-6">
                <span className="font-serif text-6xl italic leading-none text-ink/20 transition-colors duration-300 group-hover:text-mint md:text-8xl">
                  {s.letter}
                </span>
                <h3 className="text-2xl font-bold uppercase tracking-tight transition-colors duration-300 group-hover:text-paper md:text-3xl">
                  {s.name}
                </h3>
                <p className="col-span-2 max-w-2xl text-sm leading-relaxed text-ink/70 transition-colors duration-300 group-hover:text-paper/70 md:col-span-1">
                  {s.body}
                </p>
                <span className="hidden font-mono text-xs tracking-[0.3em] text-ink/40 transition-colors duration-300 group-hover:text-mint md:block">
                  0{i + 1}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.25em] text-ink/50">
            <span>Fig. 01 — Find → Research → Build → Package → Sell → Scale</span>
            <span>Repeat for every product you make</span>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2.5 bg-ink px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-paper transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#3cf0a0]"
            >
              Start the System — $49
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">
              One-time payment · Lifetime access
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
