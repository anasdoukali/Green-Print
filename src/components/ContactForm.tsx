import { useState } from "react";
import { AlertTriangle, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Eyebrow, Reveal } from "./Section";

const ENDPOINT = "https://formspree.io/f/mjyvakyp";

const input =
  "w-full border border-line bg-ink px-4 py-3.5 font-mono text-sm text-bone placeholder:text-fog/40 transition-colors focus:border-mint focus:outline-none";
const label = "mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-fog";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full">
      {/* honeypot + subject */}
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="_subject" value="New message — Green Print" />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>Name</label>
          <input id="cf-name" name="name" required placeholder="Your name" className={input} />
        </div>
        <div>
          <label htmlFor="cf-email" className={label}>Email</label>
          <input id="cf-email" name="email" type="email" required placeholder="you@email.com" className={input} />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="cf-msg" className={label}>Message</label>
        <textarea
          id="cf-msg"
          name="message"
          required
          rows={5}
          placeholder="What do you need help with?"
          className={`${input} resize-none`}
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex items-center gap-2.5 bg-mint px-7 py-4 font-mono text-sm font-bold uppercase tracking-[0.12em] text-ink transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_0_#14b673] disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>

        {status === "success" && (
          <p className="flex items-center gap-2 font-mono text-xs text-mint">
            <CheckCircle2 className="h-4 w-4" /> Message sent — we usually reply within a day.
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 font-mono text-xs text-red-400">
            <AlertTriangle className="h-4 w-4" /> Something went wrong — please try again.
          </p>
        )}
      </div>
    </form>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="relative border-b border-line py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Eyebrow>Contact</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-4xl font-bold tracking-tight text-bone md:text-6xl">
                Questions?
                <br />
                <span className="font-serif italic text-mint">Send a message.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-fog">
                Pre-sale questions, access issues, or refund requests — we read
                everything and usually reply within a day.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="border border-line bg-pulp p-7 md:p-10">
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-mint">
                {"//"} Message the team
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
