"use client";
import { Monitor, Network, Code2, Shield, Server, Cpu } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Web Development",
    description:
      "Build scalable, production-ready web apps using React, Next.js, Node.js, and modern databases — from idea to deployment.",
    color: "blue",
  },
  {
    icon: Network,
    title: "Network Infrastructure",
    description:
      "Configure & manage LAN/WAN, MikroTik routers, GPON/EPON OLT, TCP/IP, DHCP, DNS — complete ISP-level network support.",
    color: "cyan",
  },
  {
    icon: Monitor,
    title: "IT Support & Administration",
    description:
      "Linux & Windows system admin, hardware/printer support, CCTV setup, end-user troubleshooting, and IT operations.",
    color: "purple",
  },
  {
    icon: Server,
    title: "DevOps & Deployment",
    description:
      "VPS deployment with Nginx, PM2, SSL/HTTPS, GitHub CI-ready setups — keeping your apps live and performant.",
    color: "blue",
  },
  {
    icon: Shield,
    title: "Security & Authentication",
    description:
      "JWT, RBAC, bcrypt, CSRF protection, Zod validation — building secure authentication and data handling systems.",
    color: "cyan",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    description:
      "Selenium automation scripts, ML/NLP pipelines, computer vision, OCR, and Gemini API integrations for smart workflows.",
    color: "purple",
  },
];

const stats = [
  { value: "3+", label: "Years of Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "50+", label: "GitHub Contributions" },
  { value: "98%", label: "Client Satisfaction" },
];

const colorMap: Record<string, string> = {
  blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0d0d1a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            From interfaces to full-stack systems — I build modern products that are scalable and
            user-friendly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="p-6 bg-[#111120] rounded-2xl border border-slate-800/50 card-hover"
              >
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${colorMap[service.color]}`}
                >
                  <Icon size={22} />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-[#111120] rounded-2xl border border-slate-800/50"
            >
              <div className="text-4xl font-black gradient-text mb-2">{stat.value}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
