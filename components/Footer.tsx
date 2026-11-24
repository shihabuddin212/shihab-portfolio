const footerLinks = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-[#0a0a0f]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <a href="#" className="font-bold tracking-wider text-white">
          <span className="gradient-text">SHIHAB</span>
        </a>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-slate-500">
          &copy; 2026 Md Shihab Uddin Munsi
        </p>
      </div>
    </footer>
  );
}
