import { motion } from "framer-motion";
import { BookOpen, Gift, Rocket } from "lucide-react";

/**
 * Pure-CSS 3D book — fixed 312 x 460 x 38 box.
 * All faces are positioned with cube math around those exact
 * dimensions so it stays seamless at any tilt angle.
 * Scaled down only on very small screens via a wrapper transform.
 */
export default function Book3D({
  rotateX,
  rotateY,
}: {
  rotateX: any;
  rotateY: any;
}) {
  return (
    <div className="relative scale-[0.82] min-[420px]:scale-90 sm:scale-100" style={{ perspective: 1400 }}>
      {/* glow */}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-mint/15 blur-[110px]" />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative h-[460px] w-[312px]"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* ---- front cover ---- */}
        <div
          className="absolute inset-0 overflow-hidden rounded-r-[4px] rounded-l-[2px] border border-mint/30 bg-gradient-to-br from-leaf via-ink to-ink"
          style={{ transform: "translateZ(19px)" }}
        >
          <img
            src="images/cover-art.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-75"
          />
          <div className="halftone-mint absolute inset-0 opacity-40" />
          <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-mint/20 blur-3xl" />

          {/* crop marks */}
          <span className="absolute left-3 top-3 font-mono text-[10px] text-mint/50">+</span>
          <span className="absolute right-3 top-3 font-mono text-[10px] text-mint/50">+</span>
          <span className="absolute bottom-3 left-3 font-mono text-[10px] text-mint/50">+</span>
          <span className="absolute right-3 bottom-3 font-mono text-[10px] text-mint/50">+</span>

          <div className="relative flex h-full flex-col justify-between p-7">
            <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.3em] text-fog">
              <span>GREEN PRINT</span>
              <span className="text-mint">2026 ED.</span>
            </div>

            <div>
              <p className="mb-4 border-l-2 border-mint pl-3 font-mono text-[9px] uppercase leading-relaxed tracking-[0.25em] text-mint">
                The AI Digital Product
                <br />
                Launch System
              </p>
              <h3 className="font-sans text-[54px] font-bold leading-[0.92] tracking-tighter text-bone">
                <span className="text-mint">AI</span>
                <br />
                PRODUCT
                <br />
                LAUNCH
              </h3>
              <p className="mt-4 font-serif text-xl italic text-fog">
                build it. launch it. <span className="text-paper">sell it.</span>
              </p>
            </div>

            <div>
              <div className="perforation mb-4 opacity-60" />
              <div className="flex items-end justify-between">
                <div className="font-mono text-[9px] leading-relaxed tracking-[0.2em] text-fog">
                  13 MODULES · 140 LESSONS
                  <br />
                  337 PAGES · PDF
                </div>
                <div className="flex h-8 w-14 flex-col justify-center gap-[2px]">
                  {[3, 1, 2, 1, 3, 1, 2, 4, 1, 2].map((w, i) => (
                    <div key={i} className="bg-paper/80" style={{ height: 1.5, width: w * 8 + 6 }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---- back cover ---- */}
        <div
          className="absolute inset-0 rounded-[4px] border border-line bg-leaf"
          style={{ transform: "translateZ(-19px)" }}
        />

        {/* ---- spine (left face) ---- */}
        <div
          className="absolute top-0 h-full w-[38px] bg-gradient-to-b from-moss via-leaf to-moss"
          style={{
            left: "calc(50% - 19px)",
            transform: "rotateY(-90deg) translateZ(156px)",
          }}
        >
          <div className="flex h-full items-center justify-center">
            <span
              className="whitespace-nowrap font-mono text-[10px] tracking-[0.35em] text-mint"
              style={{ writingMode: "vertical-lr" }}
            >
              GREEN PRINT — AI DIGITAL PRODUCT LAUNCH SYSTEM · 2026 EDITION
            </span>
          </div>
        </div>

        {/* ---- pages (right face) ---- */}
        <div
          className="page-edge absolute top-[3px] h-[calc(100%-6px)] w-[38px]"
          style={{
            left: "calc(50% - 19px)",
            transform: "rotateY(90deg) translateZ(156px)",
          }}
        />

        {/* ---- top face ---- */}
        <div
          className="page-edge absolute left-[3px] w-[calc(100%-6px)] h-[38px]"
          style={{
            top: "calc(50% - 19px)",
            transform: "rotateX(90deg) translateZ(230px)",
            opacity: 0.9,
          }}
        />
      </motion.div>

      {/* floating chips */}
      <motion.div
        className="absolute -left-8 top-14 hidden animate-float items-center gap-2 border border-line bg-pulp/90 px-3 py-2 backdrop-blur sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <BookOpen className="h-3.5 w-3.5 text-mint" />
        <span className="font-mono text-[10px] tracking-[0.15em] text-bone">13 MODULES</span>
      </motion.div>
      <motion.div
        className="absolute -right-10 top-1/3 hidden animate-float items-center gap-2 border border-line bg-pulp/90 px-3 py-2 backdrop-blur sm:flex"
        style={{ animationDelay: "1.4s" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <Rocket className="h-3.5 w-3.5 text-mint" />
        <span className="font-mono text-[10px] tracking-[0.15em] text-bone">30-DAY CHALLENGE</span>
      </motion.div>
      <motion.div
        className="absolute -left-12 bottom-20 hidden animate-float items-center gap-2 border border-line bg-pulp/90 px-3 py-2 backdrop-blur sm:flex"
        style={{ animationDelay: "2.6s" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <Gift className="h-3.5 w-3.5 text-mint" />
        <span className="font-mono text-[10px] tracking-[0.15em] text-bone">5 BONUSES</span>
      </motion.div>

      {/* rotating badge */}
      <motion.div
        className="absolute -right-8 -top-10 h-28 w-28 sm:-right-14"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring", bounce: 0.5 }}
      >
        <div className="relative grid h-full w-full place-items-center rounded-full border border-mint/40 bg-ink/80 backdrop-blur">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow">
            <defs>
              <path id="circ" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
            </defs>
            <text className="fill-mint font-mono" style={{ fontSize: 8.2, letterSpacing: 2.2 }}>
              <textPath href="#circ">LIFETIME ACCESS • SELF-PACED • INSTANT START •</textPath>
            </text>
          </svg>
          <span className="font-sans text-xl font-bold text-mint">$49</span>
        </div>
      </motion.div>

      {/* floor shadow */}
      <div className="absolute -bottom-14 left-1/2 h-10 w-72 -translate-x-1/2 rounded-[100%] bg-black/70 blur-2xl" />
    </div>
  );
}
