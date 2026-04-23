import { useState } from "react";
import { ArrowRight } from "lucide-react";

const FORMSPREE_ID = "mnjlorvr";

const CtaSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        setError(data?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error("Formspree error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="early-access" className="relative bg-background py-24 px-6 md:px-12 overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 tracking-tighter leading-[1.1]">
          Enterprise AI is moving fast.
          <br />
          Your data governance isn't keeping up.
        </h2>
        <p className="text-muted-foreground font-sans text-lg max-w-xl mx-auto mb-12">
          Join the early access programme and be among the first enterprises to deploy Foretyx before your next compliance audit asks where your prompts went.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              className="flex-1 px-4 py-3 rounded-md bg-card border border-border font-mono text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={loading}
              className="btn-rig disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Request Early Access"}
            </button>
          </form>
        ) : (
          <div className="p-6 rounded-xl border border-primary/30 bg-card inline-block">
            <p className="text-primary font-mono text-sm">✓ You're on the list!</p>
            <p className="text-muted-foreground font-sans text-sm mt-2">We'll reach out when it's your turn.</p>
          </div>
        )}

        {error && (
          <p className="text-red-400 font-mono text-sm mt-4">{error}</p>
        )}
      </div>
    </section>
  );
};

export default CtaSection;
