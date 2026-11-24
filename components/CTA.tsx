import { ArrowUpRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/15 via-[#111120] to-purple-600/10 px-8 py-14 text-center sm:px-14">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/30 bg-blue-500/10 text-blue-300">
            <Mail size={24} aria-hidden="true" />
          </div>
          <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
            Let&apos;s Build Something <span className="gradient-text">Reliable</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-slate-400">
            Have a project in mind or need IT and network support? Get in touch and tell me what you are working on.
          </p>
          <a
            href="mailto:mshihab141@gmail.com?subject=Portfolio%20inquiry"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-500"
          >
            Contact Me <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
