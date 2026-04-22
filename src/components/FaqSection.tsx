import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    q: "What is Foretyx?",
    a: "Foretyx is an on-device AI prompt security gateway a sidecar middleware that sits between your employees and any external LLM. It scrubs PII, detects prompt injections, and enforces your organisation's AI usage policies entirely on your own infrastructure. No sensitive data leaves unprotected.",
  },
  {
    q: "How is Foretyx different from a cloud AI gateway?",
    a: "Cloud gateways route your prompts through a third-party server to inspect them meaning your raw data still leaves your network. Foretyx does everything locally, on the employee's own machine. The placeholder map the key that links scrubbed tokens to real data never leaves the device. This is an architectural difference, not a marketing claim.",
  },
  {
    q: "What LLMs does Foretyx support?",
    a: "Foretyx is model-agnostic. It works with any external LLM your team uses: OpenAI, Google Gemini, Anthropic Claude, Mistral, Cohere, or your own self-hosted model. The sidecar sits in front of whatever your employees are using, regardless of the provider.",
  },
  {
    q: "What are the hardware and deployment requirements?",
    a: "The Foretyx sidecar is lightweight and runs on standard enterprise hardware Windows, macOS, and Linux. PII detection and the ONNX injection model are optimised for CPU inference. No GPU is required. The Control Plane is a centrally managed service.",
  },
  {
    q: "How does it handle Indian compliance requirements?",
    a: "Foretyx was built with Indian PII as a first-class concern. It natively detects Aadhaar numbers, PAN cards, GSTIN, IFSC codes, Voter IDs, Driving Licence numbers, and UPI IDs entity types that standard Western tools miss entirely. This makes Foretyx directly applicable to India's DPDP Act requirements.",
  },
  {
    q: "What data does the Control Plane receive?",
    a: "Only structured metadata never raw prompts or PII. Each interaction sends: a timestamp, the device and user ID, which entity types were detected (not the actual values), the injection risk score, which policy was triggered, and the action taken (allowed / blocked / redacted). Raw content stays on the device.",
  },
  {
    q: "How will Foretyx be priced?",
    a: "We are in early access and finalising enterprise pricing. Expected model: per-seat or per-deployment with no per-query costs. Get in touch to discuss your organisation's scale and requirements.",
  },
  {
    q: "When can we deploy Foretyx?",
    a: "We are actively onboarding early design partners and enterprise pilots. Join the early access programme to be among the first organisations to deploy Foretyx in production.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a,
    },
  })),
};

const FaqSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-card py-24 px-6 md:px-12">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-label mb-6 block">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Frequently asked questions.
          </h2>
        </div>

        <div className="divide-y divide-border">
          {faqs.map((f, i) => (
            <button
              key={i}
              className="w-full text-left py-6 group"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{f.q}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </div>
              {open === i && (
                <p className="mt-4 pl-10 text-sm text-muted-foreground font-sans leading-relaxed">{f.a}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
