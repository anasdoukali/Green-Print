import { ArrowUpRight, Check, Quote } from "lucide-react";
import { Eyebrow, Reveal } from "./Section";

const BEFORE = [
  "I want to make money online but don't know where to start.",
  "I have too many ideas.",
  "I don't know what people will buy.",
  "I don't know how to create the product.",
  "I don't know how to market it.",
];

const AFTER = [
  "I know what I'm selling.",
  "I have a real digital product.",
  "I know who it's for.",
  "I have a clear offer.",
  "I have a sales page.",
  "I have a content system.",
  "I know what to do every day.",
];

export default function Transformation() {
  return (
    <section className="relative border-b border-line py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-24 select-none font-sans text-[14vw] font-bold leading-none text-outline opacity-30">
        SHIFT
      </div>
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Eyebrow>The transformation</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="max-w-2xl text-4xl font-bold tracking-tight text-bone md:text-6xl">
            From confused to <span className="font-serif italic text-mint">launched.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2">
          {/* before */}
          <Reveal className="h-full">
            <div className="h-full bg-pulp p-8 md:p-10">
              <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-fog">
                Before the system
              </p>
              <ul className="space-y-6">
                {BEFORE.map((b) => (
                  <li key={b} className="flex items-start gap-4">
                    <Quote className="mt-1 h-4 w-4 shrink-0 text-fog/50" />
                    <span className="font-serif text-lg italic leading-relaxed text-fog">
                      "{b}"
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* after */}
          <Reveal delay={0.1} className="h-full">
            <div className="relative h-full border-mint/30 bg-leaf p-8 md:p-10">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-mint/10 blur-3xl" />
              <p className="mb-8 font-mono text-[11px] uppercase tracking-[0.3em] text-mint">
                After the system
              </p>
              <ul className="space-y-6">
                {AFTER.map((a) => (
                  <li key={a} className="flex items-start gap-4">
                    <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center border border-mint/40 bg-ink">
                      <Check className="h-3 w-3 text-mint" strokeWidth={3} />
                    </span>
                    <span className="text-lg font-medium leading-relaxed text-bone">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2.5 bg-mint px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#14b673]"
            >
              Build Your First Product — $37
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
              One-time payment · Instant download
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
