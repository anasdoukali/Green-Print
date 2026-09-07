import { ArrowUpRight, Check, Lock, ShieldCheck } from "lucide-react";
import { Eyebrow, Reveal } from "./Section";

const INCLUDES = [
  "337-page PDF playbook",
  "13 modules · 140 lessons",
  "25 worksheets & templates",
  "205 AI prompt workflows",
  "100 ideas · 100 hooks · 90 reel ideas",
  "30-day challenge · 7-day launch · 90-day roadmap",
];

export default function Pricing() {
  return (
    <section id="pricing" className="grid-bg relative border-b border-line py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-mint/6 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <Reveal>
            <Eyebrow>Enroll now</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-bone md:text-6xl">
              Start building <span className="font-serif italic text-mint">today.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-fog">
              One playbook. One payment. Everything needed to go from idea to a
              launched, marketed digital product.
            </p>
          </Reveal>
        </div>

        {/* main offer */}
        <Reveal delay={0.2}>
          <div className="relative mx-auto mt-16 max-w-4xl border border-mint bg-leaf shadow-[0_0_80px_rgba(60,240,160,0.12)]">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rotate-[-1.5deg] bg-mint px-4 py-1.5 font-mono text-[10px] font-bold tracking-[0.25em] text-ink">
              LAUNCH PRICE — SAVE 50%
            </span>

            <div className="grid md:grid-cols-[1fr_1.1fr]">
              {/* left: price + cta */}
              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-mint">
                    Main offer
                  </p>
                  <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-bone md:text-3xl">
                    AI Digital Product
                    <br />
                    Launch System
                  </h3>

                  <div className="mt-8 flex items-end gap-3">
                    <span className="font-sans text-7xl font-bold tracking-tighter text-bone">
                      <span className="align-top text-2xl text-fog">$</span>
                      37
                    </span>
                    <span className="mb-2.5 font-mono text-base text-fog line-through">$99</span>
                  </div>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-fog/70">
                    One-time payment · Lifetime access
                  </p>
                </div>

                <div>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="group mt-8 flex items-center justify-center gap-2 bg-mint px-6 py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#14b673]"
                  >
                    Get instant access
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                  <p className="mt-4 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-fog">
                    <Lock className="h-3.5 w-3.5 text-mint" /> Secure checkout · Instant access
                  </p>
                </div>
              </div>

              {/* right: includes */}
              <div className="border-t border-mint/25 bg-ink/40 p-8 md:border-l md:border-t-0 md:p-10">
                <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-fog">
                  Everything included
                </p>
                <ul className="space-y-3.5">
                  {INCLUDES.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-bone/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint" strokeWidth={3} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* honesty strip */}
        <Reveal delay={0.15}>
          <div className="mx-auto mt-16 max-w-4xl border border-mint/30 bg-gradient-to-r from-mint/[0.07] via-transparent to-mint/[0.07] p-8 md:p-10">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center">
              <span className="grid h-16 w-16 shrink-0 place-items-center border border-mint/40 bg-ink">
                <ShieldCheck className="h-8 w-8 text-mint" />
              </span>
              <div className="flex-1">
                <h3 className="text-2xl font-bold tracking-tight text-bone md:text-3xl">
                  Straight up: <span className="font-serif italic text-mint">no income promises.</span>
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-fog">
                  Nothing honest can promise you money. The playbook gives you the
                  system, the prompts, and the plan — results depend on your
                  execution and consistency. That's the deal.
                </p>
              </div>
              <a
                href="#/refunds"
                className="font-mono text-[10px] uppercase tracking-[0.2em] text-mint underline underline-offset-4 transition-colors hover:text-bone"
              >
                30-day refund policy
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
