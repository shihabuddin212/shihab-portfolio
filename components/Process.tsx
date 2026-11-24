"use client";

const steps = [
  {
    number: "01",
    title: "Define & Architect",
    description:
      "Deep-dive into requirements, map user flows, design system architecture, database schema, and choose the right tech stack for scalability.",
  },
  {
    number: "02",
    title: "Build & Develop",
    description:
      "Full-stack implementation with clean code, RESTful APIs, responsive UI, authentication, testing, and iterative improvements based on feedback.",
  },
  {
    number: "03",
    title: "Deploy & Support",
    description:
      "Production deployment on VPS/cloud with Nginx, PM2, SSL — then post-launch monitoring, performance tuning, and ongoing technical support.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-[#0a0a0f] relative overflow-hidden">
      {/* Background Number Decoration */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
        <span className="text-[20rem] font-black text-blue-500">∞</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Process</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A clear workflow flows each project — from strategy and design to development and
            post-launch support.
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, i) => (
            <div key={step.number} className="relative group">
              {/* Connector Line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-blue-500/40 to-transparent z-0 translate-x-4" />
              )}

              <div className="relative p-8 bg-[#0d0d1a] rounded-2xl border border-slate-800/50 card-hover">
                {/* Number */}
                <div className="text-7xl font-black gradient-text opacity-20 absolute top-4 right-6 leading-none select-none">
                  {step.number}
                </div>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-6">
                    <span className="text-blue-400 font-bold text-lg">{step.number}</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center p-8 bg-gradient-to-r from-blue-600/10 via-cyan-500/5 to-purple-600/10 rounded-2xl border border-blue-500/20">
          <p className="text-slate-300 font-medium text-lg mb-4">
            Build reliable, user-focused products with expert code.
          </p>
          <a
            href="mailto:mshihab141@gmail.com"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 glow-blue"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  );
}
