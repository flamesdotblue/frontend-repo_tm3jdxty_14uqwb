import { Brain, Code, Headphones, Settings } from "lucide-react";

const steps = [
  {
    title: "Assess the idea",
    description:
      "We evaluate uniqueness, market potential, and monetization paths. If it passes, we co‑found with you.",
    icon: Brain,
  },
  {
    title: "Build the product",
    description:
      "We design, ship MVP, and integrate AI agents across the stack so the company runs lean from day one.",
    icon: Code,
  },
  {
    title: "Wire up operations",
    description:
      "Autonomous support, sales workflows, and internal tools are configured to scale without heavy headcount.",
    icon: Settings,
  },
  {
    title: "Launch and iterate",
    description:
      "We go to market, gather feedback, and optimize the agents and product for traction and revenue.",
    icon: Headphones,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">How it works</h2>
            <p className="mt-2 max-w-2xl text-white/70">
              A streamlined path from idea to an AI‑operated company.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white/10 p-2">
                  <Icon className="size-5 text-cyan-300" />
                </div>
                <h3 className="text-lg font-medium">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
