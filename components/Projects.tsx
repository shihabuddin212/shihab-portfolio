"use client";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CityVoice — Smart Civic Reporting",
    description:
      "Full-Year Thesis project. Django REST, PostgreSQL, Flutter, Next.js — JWT auth, role-based workflows, geotagged reports, AI-assisted image verification.",
    tags: ["Django", "Next.js", "Flutter", "PostgreSQL", "AI/ML"],
    type: "Web + Mobile + AI",
    github: "https://github.com/shihabuddin212",
    color: "blue",
  },
  {
    title: "Prime Properties — Real Estate Platform",
    description:
      "Full-Stack Next.js/React/TypeScript application with Prisma ORM, authentication, form-validation, structured property data flows, responsive UI.",
    tags: ["Next.js", "TypeScript", "Prisma", "React"],
    type: "Full-Stack Web",
    github: "https://github.com/shihabuddin212",
    live: "#",
    color: "cyan",
  },
  {
    title: "Ms Online — ISP Business Platform",
    description:
      "Separated frontend/backend, Node.js/Express backend, PM2 process management, Nginx reverse-proxy deployment — live ISP-facing business site.",
    tags: ["Node.js", "Express", "Nginx", "PM2"],
    type: "Full-Stack + Deployment",
    github: "https://github.com/shihabuddin212",
    live: "#",
    color: "purple",
  },
  {
    title: "RM Communication Ltd — ISP Website",
    description:
      "Vite-based React/TypeScript application with structured content modules, customer-facing service pages, production deployment documentation.",
    tags: ["React", "TypeScript", "Vite"],
    type: "Frontend",
    github: "https://github.com/shihabuddin212",
    live: "#",
    color: "blue",
  },
  {
    title: "T-Club — Garment Production System",
    description:
      "Multi-user role-based business system for stock, accessories, cutting, final garments and cost records — CRUD, search, PDF reporting, PHP/MySQL.",
    tags: ["PHP", "MySQL", "RBAC", "PDF"],
    type: "Business Software",
    github: "https://github.com/shihabuddin212",
    color: "cyan",
  },
  {
    title: "Fake News Detection System",
    description:
      "TF-IDF and Random Forest NLP classification pipeline integrated into a REST API — 98.05% evaluation accuracy.",
    tags: ["Python", "ML/NLP", "REST API", "scikit-learn"],
    type: "AI / ML",
    github: "https://github.com/shihabuddin212",
    color: "purple",
  },
];

const colorMap: Record<string, string> = {
  blue: "border-blue-500/30 hover:border-blue-500/60 bg-blue-500/5",
  cyan: "border-cyan-500/30 hover:border-cyan-500/60 bg-cyan-500/5",
  purple: "border-purple-500/30 hover:border-purple-500/60 bg-purple-500/5",
};

const tagColorMap: Record<string, string> = {
  blue: "bg-blue-500/15 text-blue-300",
  cyan: "bg-cyan-500/15 text-cyan-300",
  purple: "bg-purple-500/15 text-purple-300",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Recent <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A handful of projects — full-stack, tech, and future-ready — blending design, code, and
            creativity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`relative p-6 rounded-2xl border card-hover ${colorMap[project.color]} transition-all duration-300`}
            >
              {/* Type Badge */}
              <span
                className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${tagColorMap[project.color]}`}
              >
                {project.type}
              </span>

              <h3 className="text-white font-bold text-lg mb-3 leading-tight">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-slate-800/80 text-slate-300 rounded-md border border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors"
                >
                  GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 text-sm transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/shihabuddin212"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 font-semibold px-6 py-3 rounded-xl transition-all duration-200"
          >
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
