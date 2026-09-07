import { ArrowUpRight, Lightbulb, Wrench, Package, Users, Repeat } from "lucide-react";
import { Eyebrow, Reveal } from "./Section";

const PAINS = [
  {
    icon: Lightbulb,
    num: "01",
    title: "Too many ideas",
    body: "You have dozens of ideas but don't know which one people would actually pay for.",
    span: "md:col-span-2",
  },
  {
    icon: Wrench,
    num: "02",
    title: "Too many tools",
    body: "ChatGPT, Canva, automation, AI video, AI design… knowing which tools actually matter is overwhelming.",
    span: "md:col-span-2",
  },
  {
    icon: Package,
    num: "03",
    title: "No clear product",
    body: "You know you want to make money online, but you don't have something valuable to sell.",
    span: "md:col-span-2",
  },
  {
    icon: Users,
    num: "04",
    title: "No audience",
    body: "You created something, but you don't know how to get people to discover it.",
    span: "md:col-span-3",
  },
  {
    icon: Repeat,
    num: "05",
    title: "No marketing system",
    body: "Posting randomly isn't a strategy. You need a repeatable content system.",
    span: "md:col-span-3",
  },
];

export default function Problem() {
  return (
    <section className="relative border-b border-line py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Eyebrow>The real bottleneck</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.02] tracking-tight text-bone md:text-6xl">
            AI isn't the problem.
            <br />
            Knowing <span className="font-serif italic text-mint">what to do</span> with it is.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-6">
          {PAINS.map((p, i) => (
            <Reveal key={p.num} delay={0.1 + i * 0.08} className={`h-full ${p.span}`}>
              <div className="group relative h-full bg-pulp p-8 transition-colors duration-300 hover:bg-leaf md:p-10">
                <div className="mb-8 flex items-center justify-between">
                  <p.icon className="h-6 w-6 text-mint transition-transform duration-300 group-hover:-translate-y-1" />
                  <span className="font-mono text-xs tracking-[0.3em] text-fog/60">[{p.num}]</span>
                </div>
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-bone">{p.title}</h3>
                <p className="text-sm leading-relaxed text-fog">{p.body}</p>
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-mint transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 max-w-2xl font-serif text-xl italic leading-relaxed text-fog md:text-2xl">
            "The fix isn't another AI tutorial. It's a <span className="text-paper">sequence</span> —
            find, build, package, sell, launch, scale."
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <a
            href="#pricing"
            className="group mt-10 inline-flex items-center gap-2.5 bg-mint px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#14b673]"
          >
            Get the Playbook — $37
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
