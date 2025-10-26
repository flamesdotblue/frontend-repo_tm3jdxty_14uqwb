import { Rocket, Brain, Users, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 left-1/2 h-72 w-[60rem] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[50rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              AI-Operated Ventures
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
              Turn breakthrough ideas into companies run by intelligent agents
            </h1>
            <p className="mt-5 max-w-xl text-white/70">
              Bring the idea. We build the product, set up autonomous operations, and help you launch. We share in the upside based on how much we invest to make it real.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#get-started"
                className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 font-medium text-slate-900 transition hover:bg-white/90"
              >
                Start your venture
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 font-medium text-white/90 backdrop-blur hover:bg-white/10"
              >
                How it works
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-white/60">
              <div className="inline-flex items-center gap-2">
                <Brain className="size-4 text-fuchsia-300" />
                Autonomous ops
              </div>
              <div className="inline-flex items-center gap-2">
                <Users className="size-4 text-cyan-300" />
                Founder-first model
              </div>
              <div className="inline-flex items-center gap-2">
                <Rocket className="size-4 text-emerald-300" />
                Launch-ready in weeks
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-1 backdrop-blur">
              <div className="rounded-xl bg-slate-950/60 p-6">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Customer Support", color: "from-emerald-400/30 to-emerald-500/30" },
                    { label: "Code & Shipping", color: "from-fuchsia-400/30 to-fuchsia-500/30" },
                    { label: "Sales & Growth", color: "from-cyan-400/30 to-cyan-500/30" },
                    { label: "Ops & Finance", color: "from-amber-400/30 to-amber-500/30" },
                  ].map((card) => (
                    <div
                      key={card.label}
                      className={`rounded-lg border border-white/10 bg-gradient-to-br ${card.color} p-4 text-sm text-white/90`}
                    >
                      <div className="font-medium">{card.label}</div>
                      <div className="mt-1 text-white/70">AI agents configured to run this function end‑to‑end.</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg border border-white/10 bg-slate-900/60 p-4 text-white/80">
                  <div className="text-xs uppercase tracking-wide text-white/50">Your idea</div>
                  <div className="mt-1 text-lg font-medium">From concept to revenue with an AI‑native company stack</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
