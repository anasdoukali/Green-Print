import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Gift, MonitorPlay } from "lucide-react";
import { Eyebrow, Reveal } from "./Section";

type Module = {
  n: string;
  title: string;
  lead: string;
  topics: string[];
  reels?: { label: string; desc: string; examples: string[] }[];
  outcome?: string;
};

const MODULES: Module[] = [
  {
    n: "01",
    title: "Find Your Niche",
    lead: "Pick a space where people already spend money.",
    topics: ["Choosing a niche", "Spotting real problems", "Customer pain points", "AI niche scan"],
  },
  {
    n: "02",
    title: "Validate Your Idea",
    lead: "Confirm demand before you build anything.",
    topics: ["Demand signals", "Competitor scan", "AI market research", "Validation worksheet"],
  },
  {
    n: "03",
    title: "Map the Product",
    lead: "Define exactly what buyers get — and why it sells.",
    topics: ["The transformation", "Product format", "Scope & outline", "Naming"],
  },
  {
    n: "04",
    title: "Build With AI",
    lead: "Go from outline to finished product, faster.",
    topics: ["205 prompt workflows", "AI-assisted writing", "Templates & checklists", "Quality checks"],
  },
  {
    n: "05",
    title: "Design & Package",
    lead: "Make the product look worth paying for.",
    topics: ["Layout & design", "Formatting", "Bonus extras", "File delivery"],
  },
  {
    n: "06",
    title: "Price the Offer",
    lead: "Position, price, and bundle for an easy yes.",
    topics: ["Positioning", "Pricing", "Bonuses & bundles", "Value proposition"],
  },
  {
    n: "07",
    title: "Write the Sales Page",
    lead: "A page that turns visitors into buyers.",
    topics: ["Headline formulas", "Page structure", "Benefits vs features", "FAQs & objections"],
  },
  {
    n: "08",
    title: "Sell & Deliver",
    lead: "Checkout and delivery, set up in an afternoon.",
    topics: ["Checkout setup", "Payments", "Instant delivery", "Customer support"],
  },
  {
    n: "09",
    title: "Plan Your Content",
    lead: "Short-form content that attracts potential customers.",
    topics: ["Content pillars", "100 video hooks", "90 reel ideas", "Content batching"],
  },
  {
    n: "10",
    title: "The Reel System",
    lead: "A repeatable daily system instead of posting randomly. Three content types, three jobs:",
    topics: [],
    reels: [
      {
        label: "Reel 01 — Attention",
        desc: "Get discovered.",
        examples: ["AI tools", "Mistakes", "Surprising facts", "Business ideas", "Contrarian takes", "Quick wins"],
      },
      {
        label: "Reel 02 — Value",
        desc: "Build trust.",
        examples: ["Tutorials", "AI workflows", "Product creation", "Marketing tips", "Screen recordings", "Case studies"],
      },
      {
        label: "Reel 03 — Conversion",
        desc: "Generate customers.",
        examples: ["Product demos", "Before/after", "Your process", "Customer problems", "FAQ answers", "Direct offers"],
      },
    ],
    outcome: "Module outcome: a simple engine that keeps bringing new people to your product.",
  },
  {
    n: "11",
    title: "The 7-Day Launch",
    lead: "A day-by-day launch, planned before day one.",
    topics: ["Launch calendar", "Teaser content", "Launch-day posts", "First-sales follow-up"],
  },
  {
    n: "12",
    title: "Track & Optimize",
    lead: "See what's working. Do more of it.",
    topics: ["Simple metrics", "Content analytics", "Sales feedback", "Improvement loop"],
  },
  {
    n: "13",
    title: "Scale the System",
    lead: "Turn one product into a growing business.",
    topics: ["90-day roadmap", "New offers", "Bundles & upsells", "Next product"],
  },
];

const BONUSES = [
  {
    n: "01",
    name: "100 Digital Product Ideas",
    desc: "A curated list of product ideas you can research and adapt to any niche.",
  },
  {
    n: "02",
    name: "205 AI Prompt Workflows",
    desc: "Ready-to-use prompts for research, writing, design, content, and sales.",
  },
  {
    n: "03",
    name: "100 Adaptable Video Hooks",
    desc: "Openers built to stop the scroll on any short-form platform.",
  },
  {
    n: "04",
    name: "90 Ready-to-Adapt Reel Ideas",
    desc: "Three months of short-form content, planned for you.",
  },
  {
    n: "05",
    name: "7-Day Launch Plan",
    desc: "A step-by-step launch calendar, from teaser to first sales.",
  },
];

function Chips({ items }: { items: string[] }) {
  return (
    <span className="mt-3 flex max-w-2xl flex-wrap gap-1.5">
      {items.map((t) => (
        <span
          key={t}
          className="border border-line bg-ink/60 px-2.5 py-1 font-mono text-[10.5px] tracking-[0.02em] text-fog"
        >
          {t}
        </span>
      ))}
    </span>
  );
}

export default function Chapters() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="inside" className="relative border-b border-line py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* left sticky */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow>The playbook</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-4xl font-bold leading-[1.02] tracking-tight text-bone md:text-6xl">
                What's <span className="font-serif italic text-mint">inside</span> the playbook
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-fog">
                Thirteen modules and 140 lessons — from blank page to launched
                product. Every module ends with a worksheet, not homework.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-8 flex items-center gap-3 border border-line bg-pulp px-5 py-4">
                <MonitorPlay className="h-5 w-5 shrink-0 text-mint" />
                <p className="font-mono text-[11px] leading-relaxed tracking-[0.12em] text-fog">
                  13 MODULES · 140 LESSONS · LIFETIME ACCESS
                </p>
              </div>
            </Reveal>
          </div>

          {/* modules list */}
          <div>
            <div className="border-t border-line">
              {MODULES.map((m, i) => {
                const isOpen = open === i;
                return (
                  <Reveal key={m.n} delay={i * 0.05}>
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className={`group block w-full border-b border-line py-6 text-left transition-colors ${
                        isOpen ? "bg-mint/[0.04]" : "hover:bg-mint/[0.03]"
                      }`}
                    >
                      <div className="flex items-baseline gap-5 px-2 md:gap-8 md:px-4">
                        <span
                          className={`font-mono text-sm transition-colors ${
                            isOpen ? "text-mint" : "text-fog/50 group-hover:text-mint"
                          }`}
                        >
                          {m.n}
                        </span>
                        <span className="flex-1">
                          <span
                            className={`block text-xl font-bold tracking-tight transition-transform duration-300 md:text-2xl ${
                              isOpen ? "translate-x-2 text-bone" : "text-bone/85 group-hover:translate-x-2"
                            }`}
                          >
                            {m.title}
                          </span>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.span
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="block overflow-hidden"
                              >
                                <span className="block max-w-2xl pt-3 text-sm leading-relaxed text-fog">
                                  {m.lead}
                                </span>
                                {m.topics.length > 0 && <Chips items={m.topics} />}
                                {m.reels && (
                                  <span className="mt-4 grid max-w-2xl gap-2 sm:grid-cols-3">
                                    {m.reels.map((r) => (
                                      <span key={r.label} className="block border border-line bg-ink/60 p-3">
                                        <span className="block font-mono text-[10px] uppercase tracking-[0.15em] text-mint">
                                          {r.label}
                                        </span>
                                        <span className="mt-1 block font-serif text-sm italic text-bone/85">
                                          {r.desc}
                                        </span>
                                        <span className="mt-2 block font-mono text-[9.5px] leading-relaxed text-fog">
                                          {r.examples.join(" · ")}
                                        </span>
                                      </span>
                                    ))}
                                  </span>
                                )}
                                {m.outcome && (
                                  <span className="mt-4 block max-w-2xl border-l-2 border-mint pl-3 font-serif text-sm italic text-bone/80">
                                    {m.outcome}
                                  </span>
                                )}
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </span>
                        <ArrowRight
                          className={`h-4 w-4 shrink-0 self-center transition-all duration-300 ${
                            isOpen ? "rotate-90 text-mint" : "text-fog/50 group-hover:text-mint"
                          }`}
                        />
                      </div>
                    </button>
                  </Reveal>
                );
              })}
            </div>

            {/* bonuses */}
            <Reveal delay={0.1}>
              <div className="mt-8 border border-mint/30 bg-mint/[0.06] p-6 md:p-8">
                <div className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-mint">
                  <Gift className="h-4 w-4" /> Open the playbook. Get the toolkit.
                </div>
                <p className="mb-6 text-lg font-bold tracking-tight text-bone">5 bonuses, included free</p>
                <div className="space-y-4">
                  {BONUSES.map((b) => (
                    <div key={b.n} className="flex items-start gap-4 border-b border-mint/15 pb-4 last:border-0 last:pb-0">
                      <span className="mt-0.5 font-mono text-[10px] tracking-[0.2em] text-mint/70">
                        B{b.n}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-bone">{b.name}</p>
                        <p className="mt-0.5 text-xs leading-relaxed text-fog">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <a
                href="#pricing"
                className="group mt-8 flex items-center justify-center gap-2.5 bg-mint px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#14b673]"
              >
                Get the Full Playbook — $37
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
