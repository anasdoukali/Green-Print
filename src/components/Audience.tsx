import { ArrowUpRight, Bot, Briefcase, Building2, Clapperboard, GraduationCap, Sprout, X } from "lucide-react";
import { Eyebrow, Reveal } from "./Section";

const FOR = [
  {
    icon: Sprout,
    title: "Beginners",
    body: "Never made a digital product? Start here — no audience needed.",
  },
  {
    icon: Clapperboard,
    title: "Creators",
    body: "Turn your knowledge or small audience into a product.",
  },
  {
    icon: GraduationCap,
    title: "Students",
    body: "Build an online skill and side income alongside your studies.",
  },
  {
    icon: Briefcase,
    title: "Freelancers",
    body: "Turn your expertise into something that sells while you sleep.",
  },
  {
    icon: Building2,
    title: "Employees",
    body: "Build a side project that fits around your regular job.",
  },
  {
    icon: Bot,
    title: "AI beginners",
    body: "No coding. No advanced AI knowledge. Just follow the steps.",
  },
];

const NOT_FOR = [
  "Overnight money",
  "Guaranteed income",
  "Get-rich-quick tricks",
  "Fake passive-income promises",
  "A magic AI button",
  "A shortcut that requires zero effort",
];

export default function Audience() {
  return (
    <section className="relative border-b border-line py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <Eyebrow>Who is this for?</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.02] tracking-tight text-bone md:text-6xl">
            Built for people who want to <span className="font-serif italic text-mint">build</span>,
            not just learn.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {FOR.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.08} className="h-full">
              <div className="group relative h-full bg-pulp p-7 transition-colors duration-300 hover:bg-leaf">
                <f.icon className="mb-5 h-5 w-5 text-mint transition-transform duration-300 group-hover:-translate-y-1" />
                <h3 className="mb-1.5 text-lg font-bold tracking-tight text-bone">{f.title}</h3>
                <p className="text-sm leading-relaxed text-fog">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* not for */}
        <Reveal delay={0.15}>
          <div className="mt-16 border border-line bg-pulp p-8 md:p-12">
            <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.3em] text-fog">
              {"//"} Honest filter
            </p>
            <h3 className="text-3xl font-bold tracking-tight text-bone md:text-4xl">
              This playbook isn't for <span className="font-serif italic text-fog">everyone.</span>
            </h3>
            <p className="mt-3 text-sm text-fog">This isn't for you if you're looking for:</p>

            <div className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {NOT_FOR.map((n) => (
                <div key={n} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center border border-line">
                    <X className="h-3.5 w-3.5 text-fog" />
                  </span>
                  <span className="text-sm text-bone/80">{n}</span>
                </div>
              ))}
            </div>

            <div className="perforation my-8 opacity-40" style={{ backgroundImage: "linear-gradient(90deg, rgba(234,243,236,0.25) 50%, transparent 50%)" }} />

            <p className="max-w-2xl font-serif text-2xl italic leading-relaxed text-bone md:text-3xl">
              AI can accelerate the work.{" "}
              <span className="text-mint">You still have to do the work.</span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-14 flex flex-col items-center gap-4">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2.5 bg-mint px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#14b673]"
            >
              I'm Ready — Get the Playbook
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
              $49 · One-time payment · Lifetime access
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
