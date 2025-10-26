import { useMemo, useState } from "react";
import { Percent, CheckCircle } from "lucide-react";

export default function EquityCalculator() {
  const [ideaStrength, setIdeaStrength] = useState(70);
  const [buildEffort, setBuildEffort] = useState(60);
  const [opsComplexity, setOpsComplexity] = useState(50);

  // Simple illustrative model; adjust weights to see how our share changes.
  const { founderShare, ourShare } = useMemo(() => {
    // Normalize 0-100 inputs to weights
    const ideaW = ideaStrength / 100; // Founder-side value
    const buildW = buildEffort / 100; // Our side
    const opsW = opsComplexity / 100; // Our side

    // Relative contribution: founder brings the idea; we bring build + ops
    const founderContribution = 0.6 * ideaW;
    const ourContribution = 0.4 * buildW + 0.4 * opsW;

    const total = founderContribution + ourContribution || 1;
    const founder = Math.max(0.15, Math.min(0.85, founderContribution / total));
    const ours = 1 - founder;

    return {
      founderShare: Math.round(founder * 100),
      ourShare: Math.round(ours * 100),
    };
  }, [ideaStrength, buildEffort, opsComplexity]);

  return (
    <section className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 flex items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Equity model</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              We share in the company based on what it takes to build and operate it. Use the sliders to see an
              estimate. Final terms are mutually agreed and tailored to the venture.
            </p>
          </div>
          <div className="hidden md:block rounded-xl border border-white/10 bg-white/5 p-3">
            <Percent className="size-5 text-emerald-300" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <Slider
              label="Idea strength (uniqueness + monetization)"
              value={ideaStrength}
              onChange={setIdeaStrength}
              accent="from-emerald-400 to-emerald-500"
            />
            <Slider
              label="Build effort (complexity + timeline)"
              value={buildEffort}
              onChange={setBuildEffort}
              accent="from-fuchsia-400 to-fuchsia-500"
            />
            <Slider
              label="Operational complexity (automation + integrations)"
              value={opsComplexity}
              onChange={setOpsComplexity}
              accent="from-cyan-400 to-cyan-500"
            />
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2"><CheckCircle className="size-4 text-emerald-300" /> Founder share floors at 15%.</li>
              <li className="flex items-center gap-2"><CheckCircle className="size-4 text-emerald-300" /> Final split reflects actual resources we commit.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
            <h3 className="text-lg font-medium">Estimated split</h3>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <ShareCard label="You (Founder)" value={founderShare} color="emerald" />
              <ShareCard label="Us (AI Build Partner)" value={ourShare} color="fuchsia" />
            </div>
            <div className="mt-6">
              <div className="mx-auto h-3 w-full max-w-md overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500"
                  style={{ width: `${founderShare}%` }}
                />
              </div>
              <div className="mt-2 text-sm text-white/60">This is an estimate to guide conversations.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({ label, value, onChange, accent }) {
  return (
    <div className="py-3">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-white/80">{label}</span>
        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-white/80">{value}</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`w-full appearance-none rounded-lg bg-white/10 accent-white [--c:linear-gradient(to_right,var(--tw-gradient-stops))] [background:var(--c),_theme(colors.white/0.1)] [--tw-gradient-from:theme(colors.slate.300)] [--tw-gradient-to:theme(colors.slate.600)]`}
        style={{
          backgroundImage: `linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to))`,
        }}
      />
      <div className={`mt-2 h-1.5 w-full rounded-full bg-white/10`}>
        <div className={`h-full rounded-full bg-gradient-to-r ${accent}`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

function ShareCard({ label, value, color }) {
  const colorMap = {
    emerald: "from-emerald-400 to-emerald-500",
    fuchsia: "from-fuchsia-400 to-fuchsia-500",
  };
  return (
    <div className="rounded-lg border border-white/10 bg-slate-900/50 p-4">
      <div className="text-sm text-white/70">{label}</div>
      <div className={`mt-2 text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r ${colorMap[color]}`}>
        {value}%
      </div>
    </div>
  );
}
