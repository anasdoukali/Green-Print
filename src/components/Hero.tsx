import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, GraduationCap, ListChecks, Sparkles, Wrench, Zap } from "lucide-react";
import Book3D from "./Book3D";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 16 });
  const sy = useSpring(my, { stiffness: 60, damping: 16 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-38, -12]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [12, -4]);

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="grid-bg relative overflow-hidden pb-24 pt-32 md:pt-40"
    >
      {/* ambient backdrop + conic glow + vignette */}
      <img
        src="images/hero-glow.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-screen"
      />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-mint/8 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#070b08_85%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
        {/* ------ copy ------ */}
        <div>
          <motion.div {...fade(0.2)} className="mb-7 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-2 border border-mint/40 bg-mint/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-mint">
              <Zap className="h-3 w-3" /> 337-page PDF playbook
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fog">
              // Self-paced · Lifetime access
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.3)}
            className="text-[13.5vw] font-bold leading-[0.92] tracking-[-0.04em] text-bone sm:text-6xl md:text-7xl xl:text-[86px]"
          >
            Build and launch
            <br />
            your <span className="font-serif italic tracking-normal text-mint">first digital product</span>
            <br />
            with AI.
          </motion.h1>

          <motion.p {...fade(0.42)} className="mt-7 max-w-xl text-base leading-relaxed text-fog md:text-lg">
            A practical, step-by-step playbook that turns an idea into
            <span className="text-bone"> a product, an offer, a content system, and a launch plan</span>.
            No code. No advanced AI knowledge. Just follow the steps.
          </motion.p>

          <motion.div {...fade(0.52)} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="group flex items-center gap-2.5 bg-mint px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#14b673]"
            >
              Get the Playbook
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <a
              href="#inside"
              className="group flex items-center gap-2.5 border border-line px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-bone transition-all hover:border-mint hover:text-mint"
            >
              See what's inside
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
            </a>
          </motion.div>

          <motion.div {...fade(0.62)} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[11px] tracking-[0.12em] text-fog">
            <span className="flex items-center gap-1.5">
              <GraduationCap className="h-3.5 w-3.5 text-mint" /> Beginner-friendly
            </span>
            <span className="flex items-center gap-1.5">
              <Wrench className="h-3.5 w-3.5 text-mint" /> Practical
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-mint" /> AI-powered
            </span>
            <span className="flex items-center gap-1.5">
              <ListChecks className="h-3.5 w-3.5 text-mint" /> Step-by-step
            </span>
          </motion.div>
        </div>

        {/* ------ book ------ */}
        <div className="flex justify-center lg:justify-end lg:pr-10">
          <Book3D rotateX={rotateX} rotateY={rotateY} />
        </div>
      </div>

      {/* ghost word */}
      <div className="pointer-events-none absolute -bottom-8 left-0 select-none whitespace-nowrap font-sans text-[18vw] font-bold leading-none text-outline opacity-40">
        LAUNCH LAUNCH
      </div>
    </section>
  );
}
