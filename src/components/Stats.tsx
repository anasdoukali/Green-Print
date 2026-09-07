import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Reveal } from "./Section";

function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1800;
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(to * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {prefix}
      {val.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}

const STATS: { to: number; prefix?: string; suffix?: string; decimals?: number; label: string }[] = [
  { to: 337, suffix: "", label: "Pages in the playbook" },
  { to: 140, suffix: "", label: "Lessons across 13 modules" },
  { to: 205, suffix: "", label: "Practical AI prompt workflows" },
  { to: 25, suffix: "", label: "Worksheets & templates" },
];

export default function Stats() {
  return (
    <section id="results" className="relative border-b border-line bg-pulp py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <Eyebrow>Inside the system</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-4xl font-bold tracking-tight text-bone md:text-5xl">
                A system, not <span className="font-serif italic text-mint">information</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-fog">
              Self-paced · Lifetime access · Instant start
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col justify-between bg-ink p-8">
                <span className="text-5xl font-bold tracking-tight text-mint md:text-6xl">
                  <CountUp to={s.to} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </span>
                <span className="mt-6 font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-fog">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2.5 bg-mint px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#14b673]"
            >
              Start Building — $49
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
              One-time payment · Lifetime access
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
