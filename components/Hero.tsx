"use client";
import Image from "next/image";
import { Github, Linkedin, Mail, Phone, Download, ArrowRight } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Completed" },
  { value: "50+", label: "Open Source Contrib." },
  { value: "98%", label: "Client Satisfaction" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-grid overflow-hidden pt-20">
      {/* Background Blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">Available for opportunities</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
              Hi! I&apos;m Shihab, building{" "}
              <span className="gradient-text">Digital Experiences.</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              Full-Stack Developer & IT & Network Engineer — from full-stack web apps to network
              infrastructure, delivering reliable, scalable solutions.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 mb-8">
              <a
                href="https://github.com/shihabuddin212"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <Github size={18} className="text-slate-300" />
              </a>
              <a
                href="https://linkedin.com/in/shihab-uddin-898529252"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <Linkedin size={18} className="text-slate-300" />
              </a>
              <a
                href="mailto:mshihab141@gmail.com"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <Mail size={18} className="text-slate-300" />
              </a>
              <a
                href="tel:+8801771506967"
                className="w-10 h-10 bg-slate-800 hover:bg-blue-600 border border-slate-700 hover:border-blue-500 rounded-lg flex items-center justify-center transition-all duration-200"
              >
                <Phone size={18} className="text-slate-300" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 glow-blue"
              >
                Get In Touch <ArrowRight size={16} />
              </a>
              <a
                href="/IT & Network_Support_Engineer-Shihab.pdf"
                download
                className="inline-flex items-center gap-2 bg-transparent border border-slate-600 hover:border-blue-500 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
              >
                <Download size={16} /> Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-slate-500 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-float">
            <div className="relative">
              {/* Glow Ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-purple-500/20 rounded-full blur-2xl animate-pulse-glow" />
              {/* Photo Container */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20">
                <Image
                  src="/profile.png"
                  alt="Md Shihab Uddin Munsi"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg">
                💼 Open to Work
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
