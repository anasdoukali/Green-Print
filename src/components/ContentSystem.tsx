import { ArrowRight, ArrowUpRight, Eye, HandHeart, HandCoins, Wrench } from "lucide-react";
import { Eyebrow, Reveal } from "./Section";

const TYPES = [
  {
    icon: Eye,
    name: "Attention",
    job: "Get discovered.",
    examples: "AI tools · mistakes · surprising facts · contrarian takes · quick wins",
  },
  {
    icon: HandHeart,
    name: "Value",
    job: "Build trust.",
    examples: "tutorials · AI workflows · product creation · case studies · screen recordings",
  },
  {
    icon: HandCoins,
    name: "Conversion",
    job: "Generate customers.",
    examples: "product demos · before/after · your process · customer problems · direct offers",
  },
];

const USES = [
  "Research",
  "Writing",
  "Brainstorming",
  "Product development",
  "Design",
  "Content creation",
  "Marketing",
  "Sales",
];

export function ContentSystem() {
  return (
    <section className="relative border-b border-line bg-pulp py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Eyebrow>The content system</Eyebrow>
        </Reveal>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal delay={0.08}>
            <h2 className="max-w-2xl text-4xl font-bold leading-[1.02] tracking-tight text-bone md:text-6xl">
              Never run out of content ideas{" "}
              <span className="font-serif italic text-mint">again.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="max-w-sm text-sm leading-relaxed text-fog">
              Your content shouldn't depend on inspiration. Three content types,
              90 ready-to-adapt reel ideas — each with a job to do.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-3">
          {TYPES.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <div className="group relative h-full bg-ink p-8 transition-colors duration-300 hover:bg-leaf">
                <div className="mb-8 flex items-center justify-between">
                  <t.icon className="h-6 w-6 text-mint transition-transform duration-300 group-hover:-translate-y-1" />
                  <span className="font-mono text-xs tracking-[0.3em] text-fog/60">TYPE 0{i + 1}</span>
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-bone">{t.name}</h3>
                <p className="mt-1 font-serif text-lg italic text-mint">{t.job}</p>
                <p className="mt-4 font-mono text-[11px] leading-relaxed tracking-[0.04em] text-fog">
                  {t.examples}
                </p>
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-mint transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2.5 bg-mint px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#14b673]"
            >
              Get Instant Access — $37
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="#inside"
              className="group inline-flex items-center gap-2.5 border border-line px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-[0.15em] text-bone transition-all hover:border-mint hover:text-mint"
            >
              See the system inside the playbook
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ToolsStrip() {
  return (
    <section className="relative overflow-hidden border-b border-line py-24 md:py-32">
      <div className="pointer-events-none absolute -right-20 top-0 select-none font-sans text-[16vw] font-bold leading-none text-outline opacity-30">
        TOOLS
      </div>
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Eyebrow>AI tools</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.02] tracking-tight text-bone md:text-6xl">
            Learn the <span className="font-serif italic text-mint">workflow</span>,
            not just the tools.
          </h2>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-fog">
            The playbook doesn't depend on one AI platform. You get 205 adaptable
            prompt workflows — plus honest notes on when paid tools are worth it.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex max-w-3xl flex-wrap gap-2">
            {USES.map((u) => (
              <span
                key={u}
                className="flex items-center gap-2 border border-line bg-pulp px-3.5 py-2 font-mono text-[11px] tracking-[0.06em] text-bone/85"
              >
                <Wrench className="h-3 w-3 text-mint" />
                {u}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-14 max-w-4xl text-4xl font-bold leading-[1.05] tracking-tighter text-bone md:text-7xl">
            Tools will change.
            <br />
            <span className="font-serif italic tracking-normal text-mint">The system won't.</span>
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <a
            href="#pricing"
            className="group mt-10 inline-flex items-center gap-2.5 bg-mint px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#14b673]"
          >
            Learn the System — $37
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
