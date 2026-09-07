import { ArrowLeft } from "lucide-react";
import { Footer } from "./Footer";
import { ContactForm } from "./ContactForm";

type PolicySection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

type PolicyDoc = {
  eyebrow: string;
  titleA: string;
  titleB: string;
  updated: string;
  intro: string;
  sections: PolicySection[];
};

const DOCS: Record<string, PolicyDoc> = {
  privacy: {
    eyebrow: "// Policies — 01",
    titleA: "Privacy",
    titleB: "Policy",
    updated: "29/08/2026",
    intro:
      "This policy explains what information Green Print (“we”, “us”) collects when you visit this website or purchase the AI Digital Product Launch System — and how we use it.",
    sections: [
      {
        heading: "Information we collect",
        bullets: [
          "Name and email address when you purchase or contact us",
          "Billing details needed to complete your order",
          "IP address and basic device or browser data",
          "Website activity, such as pages visited and links clicked",
        ],
      },
      {
        heading: "How we use it",
        bullets: [
          "Processing orders and delivering your product instantly",
          "Providing customer support",
          "Sending marketing emails — only if you opted in",
          "Improving the website, the content, and the product",
        ],
      },
      {
        heading: "Payments",
        paragraphs: [
          "Payment information is processed securely by third-party payment providers. We never see, store, or have access to your full card details.",
        ],
      },
      {
        heading: "Cookies & analytics",
        paragraphs: [
          "We use essential cookies and privacy-respecting analytics to understand how the site is used and to make it better.",
          "You can disable cookies in your browser settings at any time — the site will still work.",
        ],
      },
      {
        heading: "When we share information",
        paragraphs: [
          "Only with the service providers needed to run the business — payment processing, email delivery, hosting, and analytics. They receive the minimum required to do their job.",
          "We never sell your personal information.",
        ],
      },
      {
        heading: "Your choices & rights",
        bullets: [
          "Unsubscribe from marketing emails with one click — every email includes a link",
          "Request a copy of the personal information we hold about you",
          "Ask us to correct inaccurate information",
          "Request deletion of your information",
        ],
        paragraphs: ["To use any of these rights, email greenofprinters@gmail.com."],
      },
      {
        heading: "Data security",
        paragraphs: [
          "We apply reasonable technical and organizational measures to protect your information. No online system is perfectly secure, but keeping your data safe is a priority for us.",
        ],
      },
    ],
  },
  legal: {
    eyebrow: "// Policies — 02",
    titleA: "Terms of",
    titleB: "Use",
    updated: "29/08/2026",
    intro:
      "These terms govern your purchase and use of the AI Digital Product Launch System on this website, operated by Green Print. By purchasing, you agree to them.",
    sections: [
      {
        heading: "The product",
        paragraphs: [
          "This website sells a downloadable, educational digital product: the AI Digital Product Launch System (PDF playbook and bonus materials), delivered instantly after purchase.",
        ],
      },
      {
        heading: "Your license",
        paragraphs: ["Each purchase grants one personal, non-transferable license. You may not:"],
        bullets: [
          "Resell, share, copy, or redistribute the materials",
          "Upload the files to public sites, groups, or drives",
          "Reproduce the course content as your own product",
          "Transfer your license or login to another person",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "All text, visuals, templates, prompts, worksheets, branding, and downloadable materials are protected by intellectual-property rights and remain the property of Green Print.",
        ],
      },
      {
        heading: "Educational purposes only",
        paragraphs: [
          "The material is provided for education. It does not constitute legal, financial, tax, or professional advice, and it does not replace advice from a qualified professional.",
        ],
      },
      {
        heading: "AI-generated content",
        paragraphs: [
          "The product teaches workflows that use AI tools. AI-generated information can be wrong or outdated — review and independently verify anything before publishing or relying on it.",
        ],
      },
      {
        heading: "No guaranteed results",
        paragraphs: [
          "Results vary from person to person. No income, sales, or business outcome is promised or guaranteed. You are responsible for how you apply the information.",
        ],
      },
      {
        heading: "Changes",
        paragraphs: [
          "We may update the product content, pricing, and these terms from time to time. Changes apply going forward and are posted on this page.",
        ],
      },
      {
        heading: "Limitation of liability",
        paragraphs: [
          "In simple terms: to the fullest extent permitted by law, Green Print is not liable for indirect or consequential losses related to the use of this product. Our total liability for any claim is limited to the amount you paid for the product.",
        ],
      },
      {
        heading: "Governing law",
        paragraphs: ["These terms are governed by the laws of [COUNTRY/JURISDICTION]."],
      },
    ],
  },
  refunds: {
    eyebrow: "// Policies — 03",
    titleA: "30-Day Refund",
    titleB: "Policy",
    updated: "29/08/2026",
    intro:
      "We want this policy to be as clear as the product itself. If the AI Digital Product Launch System isn't right for you, here's exactly how refunds work.",
    sections: [
      {
        heading: "The 30-day window",
        paragraphs: [
          "You may request a full refund within 30 calendar days of your purchase. The window starts on the day your order is completed.",
        ],
      },
      {
        heading: "How to request a refund",
        paragraphs: ["Email greenofprinters@gmail.com or use the contact form on this website, and include:"],
        bullets: [
          "Your order number",
          "The email address used for the purchase",
          "Subject line: “Refund request”",
        ],
      },
      {
        heading: "How refunds are paid",
        paragraphs: [
          "Refunds are returned to the original payment method. Processing time depends on your payment provider and may take several business days.",
        ],
      },
      {
        heading: "After 30 days",
        paragraphs: [
          "Requests submitted after the 30-day window are not eligible for a refund. If you run into a technical problem at any point, contact us anyway — we'll help.",
        ],
      },
      {
        heading: "Duplicates & technical problems",
        paragraphs: [
          "Accidentally purchased twice, or having trouble downloading the files? Tell us promptly — duplicate purchases and technical issues are resolved or refunded quickly.",
        ],
      },
      {
        heading: "Good faith",
        paragraphs: [
          "Refund requests must be made in good faith. We reserve the right to decline requests that show clear abuse of this policy.",
        ],
      },
    ],
  },
};

export default function Policy({ kind }: { kind: string }) {
  const doc = DOCS[kind] ?? DOCS.legal;

  return (
    <div className="min-h-screen bg-ink font-sans text-bone">
      {/* header */}
      <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5 md:px-8">
          <a href="#/" className="flex items-center gap-2">
            <img
              src="/images/green-print-logo.png"
              alt="Green Print"
              className="h-9 w-9 object-contain"
            />
            <span className="font-mono text-sm font-bold tracking-[0.18em] text-bone">
              GREEN<span className="text-mint">·</span>PRINT
            </span>
          </a>
          <a
            href="#/"
            className="group flex items-center gap-2 border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-bone transition-colors hover:border-mint hover:text-mint"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            Back to site
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-mint">{doc.eyebrow}</p>
        <h1 className="text-4xl font-bold tracking-tight text-bone md:text-6xl">
          {doc.titleA} <span className="font-serif italic tracking-normal text-mint">{doc.titleB}</span>
        </h1>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-fog">
          Last updated: {doc.updated}
        </p>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-fog md:text-lg">{doc.intro}</p>

        <div className="mt-14 space-y-12">
          {doc.sections.map((s, i) => (
            <section key={s.heading}>
              <h2 className="flex items-baseline gap-3 text-xl font-bold tracking-tight text-bone md:text-2xl">
                <span className="font-mono text-xs tracking-[0.2em] text-mint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.heading}
              </h2>
              {s.paragraphs?.map((p) => (
                <p key={p} className="mt-4 text-sm leading-relaxed text-fog md:text-base">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className={`space-y-2.5 ${s.paragraphs?.length ? "mt-4" : "mt-5"}`}>
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-bone/85 md:text-base">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-mint" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* contact */}
        <div className="mt-16 border border-line bg-pulp p-6 md:p-8">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.3em] text-mint">
            {"//"} Send us a message
          </p>
          <ContactForm />
        </div>

        {/* disclaimer */}
        <div className="mt-8 border border-line bg-pulp p-5">
          <p className="font-mono text-[11px] leading-relaxed tracking-[0.04em] text-fog">
            Note: this policy is a template and does not constitute legal advice. Please have it
            reviewed for compliance with the laws that apply to your business and your customers.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
