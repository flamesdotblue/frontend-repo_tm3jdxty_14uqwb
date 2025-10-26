import { ArrowRight } from "lucide-react";

export default function FooterCTA() {
  return (
    <section id="get-started" className="relative bg-slate-950 py-16 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 text-center backdrop-blur">
          <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Have a unique, profitable idea? Let’s co‑found it with AI.
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Share your concept and goals. We’ll assess fit, outline the build plan, and propose an equitable split
            based on the work required.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 font-medium text-slate-900 transition hover:bg-white/90"
            >
              Book an intro call
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 font-medium text-white/90 backdrop-blur hover:bg-white/10"
            >
              Explore process
            </a>
          </div>
        </div>

        <footer className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row">
          <div>© {new Date().getFullYear()} Flames.Blue — AI‑Operated Ventures</div>
          <div className="flex items-center gap-4">
            <a href="#how-it-works" className="hover:text-white">Process</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
