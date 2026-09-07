import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Section";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <img
        src="images/launch-desk.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen"
      />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/10 blur-[130px]" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none whitespace-nowrap text-center font-sans text-[16vw] font-bold leading-none text-outline opacity-40">
        LAUNCH LAUNCH
      </div>

      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-mint">
            {"//"} Final call — 337 pages, zero filler
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="text-5xl font-bold leading-[0.95] tracking-tighter text-bone md:text-8xl">
            AI won't build it.
            <br />
            You <span className="font-serif italic tracking-normal text-mint">build faster.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-fog md:text-lg">
            AI doesn't build the business for you — it helps you build faster.
            Get the playbook and turn your idea into a product, offer, and launch.
          </p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group flex items-center gap-3 bg-mint px-9 py-5 font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink transition-all hover:-translate-y-1 hover:shadow-[8px_8px_0_0_#14b673]"
            >
              Build your first product
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
            Learn the system · Build the product · Start the launch
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const links: [string, string][] = [
    ["Home", "#top"],
    ["System", "#framework"],
    ["Modules", "#inside"],
    ["Pricing", "#pricing"],
    ["FAQ", "#faq"],
  ];

  const legal: [string, string][] = [
    ["Privacy", "#/privacy"],
    ["Legal", "#/legal"],
    ["Refunds", "#/refunds"],
  ];

  return (
    <footer className="border-t border-line bg-pulp">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <img
              src="/images/green-print-logo.png"
              alt="Green Print"
              className="h-11 w-11 object-contain"
            />
            <div>
              <p className="font-mono text-sm font-bold tracking-[0.18em] text-bone">
                GREEN<span className="text-mint">·</span>PRINT
              </p>
              <p className="max-w-xs font-mono text-[10px] leading-relaxed tracking-[0.1em] text-fog">
                Build, launch & market digital products with AI
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-7 gap-y-3">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog transition-colors hover:text-mint"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog transition-colors hover:text-mint"
            >
              Contact
            </a>
            {legal.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-fog transition-colors hover:text-mint"
              >
                {label}
              </a>
            ))}
          </nav>

          <p className="font-mono text-[10px] tracking-[0.2em] text-fog/60">
            © 2026 GREEN PRINT · BUILT FOR BUILDERS
          </p>
        </div>

        <div className="mt-8 border-t border-line pt-6">
          <p className="font-mono text-[10px] leading-relaxed tracking-[0.15em] text-fog/60">
            AI × DIGITAL PRODUCTS × ONLINE BUSINESS — FOLLOW FOR PRACTICAL AI BUSINESS STRATEGIES.
          </p>
        </div>
      </div>
    </footer>
  );
}
