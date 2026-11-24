"use client";

const brands = [
  { name: "GitHub", icon: "🐙" },
  { name: "Google", icon: "🌐" },
  { name: "Linux", icon: "🐧" },
  { name: "MikroTik", icon: "📡" },
  { name: "GPON/OLT", icon: "🔌" },
  { name: "Coursera", icon: "🎓" },
];

export default function TrustedBy() {
  return (
    <section className="py-12 border-y border-blue-500/10 bg-[#0d0d1a]/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-slate-500 text-sm mb-8 uppercase tracking-widest font-medium">
          Technologies & Platforms I Work With
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center gap-2 text-slate-400 hover:text-slate-200 transition-colors duration-200 group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                {brand.icon}
              </span>
              <span className="font-semibold text-sm tracking-wide">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
