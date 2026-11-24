"use client";
const certifications = [
  {
    title: "Google IT Support Professional Certificate",
    issuer: "Coursera / Google",
    date: "Jun 2026",
    color: "blue",
    icon: "🏆",
  },
  {
    title: "Full-Stack Web Development",
    issuer: "React, Node.js, REST APIs, Auth, Deployment",
    date: "Completed",
    color: "cyan",
    icon: "🌐",
  },
  {
    title: "Machine Learning & Deep Learning",
    issuer: "CNN, TensorFlow, Transfer Learning, XAI",
    date: "Completed",
    color: "purple",
    icon: "🧠",
  },
  {
    title: "Game Development & AR/XR",
    issuer: "Unity, C#, Physics, Mobile/AR-XR",
    date: "Jan–May 2026",
    color: "blue",
    icon: "🎮",
  },
  {
    title: "Research Methodology & Technical Writing",
    issuer: "Research, Literature Review, Paper Writing",
    date: "Completed",
    color: "cyan",
    icon: "📝",
  },
  {
    title: "Competitive Programming",
    issuer: "Beecrowd — 52+ Solved, 90+ Submissions",
    date: "Ongoing",
    color: "purple",
    icon: "🏅",
  },
];

const colorMap: Record<string, string> = {
  blue: "border-blue-500/30 bg-blue-500/5 hover:border-blue-500/50",
  cyan: "border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-500/50",
  purple: "border-purple-500/30 bg-purple-500/5 hover:border-purple-500/50",
};

const dateColorMap: Record<string, string> = {
  blue: "text-blue-400",
  cyan: "text-cyan-400",
  purple: "text-purple-400",
};

export default function Certifications() {
  return (
    <section className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Certifications &amp;{" "}
            <span className="gradient-text">Training</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Continuous learning through formal certifications, hands-on training, and competitive
            challenges.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className={`p-6 rounded-2xl border card-hover ${colorMap[cert.color]} transition-all duration-300`}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl flex-shrink-0">{cert.icon}</div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 text-xs mb-3">{cert.issuer}</p>
                  <span className={`text-xs font-semibold ${dateColorMap[cert.color]}`}>
                    {cert.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10 rounded-2xl border border-blue-500/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-14 h-14 bg-blue-500/15 border border-blue-500/30 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl">
              🎓
            </div>
            <div>
              <h3 className="text-white font-bold text-xl">
                B.Sc. in Computer Science &amp; Engineering
              </h3>
              <p className="text-blue-400 font-medium">
                Green University of Bangladesh, Dhaka
              </p>
              <p className="text-slate-400 text-sm mt-1">Jul 2021 – May 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
