import { ArrowUpRight, Check, Flag } from "lucide-react";
import { Eyebrow, Reveal } from "./Section";

const WEEKS = [
  {
    week: "Week 01",
    title: "Find",
    body: "Choose your niche, identify a problem, research demand, and validate your product idea.",
  },
  {
    week: "Week 02",
    title: "Build",
    body: "Use AI to create and package your digital product.",
  },
  {
    week: "Week 03",
    title: "Launch",
    body: "Create your offer, pricing, bonuses, sales page, and checkout.",
  },
  {
    week: "Week 04",
    title: "Market",
    body: "Start publishing short-form content and drive your first potential customers toward your offer.",
  },
];

const OUTCOMES = [
  "A validated product idea",
  "A finished digital product",
  "A clear offer & price",
  "A ready sales page",
  "A 30-day content plan",
  "90 reel ideas, mapped",
  "A 7-day launch plan",
  "A 90-day growth roadmap",
];

export default function Challenge() {
  return (
    <section id="challenge" className="relative border-b border-line bg-pulp py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <Eyebrow>The 30-day challenge</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="max-w-2xl text-4xl font-bold leading-[1.02] tracking-tight text-bone md:text-6xl">
                Don't just read the playbook.{" "}
                <span className="font-serif italic text-mint">Build something.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-mint">
              30 days · One product · One launch
            </p>
          </Reveal>
        </div>

        {/* timeline */}
        <div className="relative mt-16">
          <div className="absolute inset-x-0 top-[13px] hidden h-px bg-line md:block" />
          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {WEEKS.map((w, i) => (
              <Reveal key={w.week} delay={i * 0.1}>
                <div className="relative">
                  <span className="relative z-10 inline-block border border-mint/40 bg-ink px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.25em] text-mint">
                    {w.week}
                  </span>
                  <h3 className="mt-4 font-serif text-4xl italic text-bone md:text-5xl">{w.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-fog">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* final goal */}
        <Reveal delay={0.15}>
          <div className="mt-16 flex flex-col items-start gap-4 border border-mint/30 bg-mint/[0.06] p-6 md:flex-row md:items-center md:p-8">
            <span className="grid h-12 w-12 shrink-0 place-items-center border border-mint/40 bg-ink">
              <Flag className="h-5 w-5 text-mint" />
            </span>
            <p className="text-lg font-bold leading-snug tracking-tight text-bone md:text-xl">
              Final goal: finish the 30 days with a real digital product, a real offer,
              and a <span className="font-serif italic text-mint">repeatable</span> marketing system.
            </p>
          </div>
        </Reveal>

        {/* outcomes checklist */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Reveal>
              <Eyebrow>What you will build</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h3 className="text-3xl font-bold leading-tight tracking-tight text-bone md:text-5xl">
                By the end, you'll have more than{" "}
                <span className="font-serif italic text-mint">knowledge.</span>
              </h3>
            </Reveal>
          </div>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {OUTCOMES.map((o, i) => (
              <Reveal key={o} delay={(i % 2) * 0.06 + Math.floor(i / 2) * 0.04} className="h-full">
                <div className="flex h-full items-center gap-3 bg-ink px-5 py-4">
                  <Check className="h-4 w-4 shrink-0 text-mint" strokeWidth={3} />
                  <span className="text-sm font-medium text-bone/90">{o}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2.5 bg-mint px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#14b673]"
            >
              Join the Challenge — $49
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
              Playbook included · One-time payment · Lifetime access
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
