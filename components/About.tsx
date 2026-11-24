"use client";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

const experience = [
  {
    role: "IT & Network Support Engineer",
    company: "Ms Online",
    period: "Jun 2026 – Present",
    color: "blue",
  },
  {
    role: "Project-Based Full-Stack Developer",
    company: "Freelance / Contract",
    period: "Ongoing",
    color: "cyan",
  },
  {
    role: "Game Development Intern",
    company: "Battery Low Interactive Ltd",
    period: "Jan 2026 – May 2026",
    color: "purple",
  },
  {
    role: "Open Source Contributor",
    company: "GitHub (20+ Projects)",
    period: "Project-Based",
    color: "blue",
  },
];

const techStack = [
  { name: "React/Next.js", emoji: "⚛️" },
  { name: "Node.js", emoji: "🟢" },
  { name: "Python", emoji: "🐍" },
  { name: "PostgreSQL", emoji: "🐘" },
  { name: "Linux", emoji: "🐧" },
  { name: "MikroTik", emoji: "📡" },
  { name: "Docker", emoji: "🐳" },
  { name: "TypeScript", emoji: "🔷" },
];

const colorMap: Record<string, string> = {
  blue: "border-l-blue-500 bg-blue-500/5",
  cyan: "border-l-cyan-500 bg-cyan-500/5",
  purple: "border-l-purple-500 bg-purple-500/5",
};

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0d0d1a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Building intuitive digital products — reliable, high-performing, and made through
            collaboration.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Photo + Info */}
          <div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
              {/* Profile Photo */}
              <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-2 border-blue-500/30 flex-shrink-0 shadow-xl shadow-blue-500/10">
                <Image
                  src="/profile.svg"
                  alt="SM initials placeholder for Md Shihab Uddin Munsi"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl mb-1">Md Shihab Uddin Munsi</h3>
                <p className="text-blue-400 font-medium mb-2">IT & Network Support Engineer</p>
                <div className="flex items-center gap-1 text-slate-400 text-sm mb-4">
                  <MapPin size={14} />
                  <span>Dhaka, Bangladesh</span>
                </div>
                <div className="flex gap-3">
                  <a href="https://github.com/shihabuddin212" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-xs font-bold text-slate-400 hover:text-white transition-colors">GH</a>
                  <a href="https://linkedin.com/in/shihab-uddin-898529252" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-sm font-bold text-slate-400 hover:text-blue-400 transition-colors">in</a>
                  <a href="mailto:mshihab141@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors"><Mail size={18} /></a>
                </div>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed mb-6">
              I&apos;m a passionate IT professional with a B.Sc. in Computer Science & Engineering
              from Green University of Bangladesh. I specialize in full-stack web development, cross-platform
              applications, and IT & network infrastructure — delivering solutions that are reliable, scalable,
              and business-ready.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              I love solving technical problems — from building real-time web apps to configuring
              GPON/OLT fiber networks. When I&apos;m not coding, I&apos;m contributing to open source
              projects and exploring cutting-edge AI tools.
            </p>

            <a
              href="mailto:mshihab141@gmail.com?subject=Request%20for%20CV"
              className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/40 text-blue-300 hover:bg-blue-600/30 font-semibold px-5 py-2.5 rounded-xl transition-all duration-200"
            >
              <Mail size={16} /> Request CV
            </a>
          </div>

          {/* Right — Tech Stack + Experience */}
          <div>
            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <span>⚡</span> My Tech Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-2 bg-[#111120] border border-slate-700/50 rounded-xl text-sm text-slate-300 hover:border-blue-500/30 hover:text-white transition-all"
                  >
                    <span>{tech.emoji}</span>
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-4">Experience</h4>
              <div className="space-y-3">
                {experience.map((exp) => (
                  <div
                    key={exp.role + exp.company}
                    className={`p-4 rounded-xl border-l-4 ${colorMap[exp.color]}`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <div>
                        <div className="text-white font-medium text-sm">{exp.role}</div>
                        <div className="text-slate-400 text-xs">{exp.company}</div>
                      </div>
                      <span className="text-slate-500 text-xs whitespace-nowrap">{exp.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
