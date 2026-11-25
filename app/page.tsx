"use client";

import Image from "next/image";
import { useState } from "react";
import type { FormEvent } from "react";
import { siteUrl } from "@/lib/site";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  ChevronDown,
  Code2,
  Cpu,
  Database,
  Download,
  Github,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Moon,
  Network,
  Phone,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Sun,
  Terminal,
  Wrench,
  X,
} from "lucide-react";

const projects = [
  {
    name: "CityVoice",
    category: "Final-year thesis · Civic tech + AI",
    description:
      "A web and mobile civic-reporting platform for geotagged issues, community voting, offline drafts, status tracking, admin analytics, and AI-assisted image verification.",
    stack: ["Django REST", "PostgreSQL", "Flutter", "Next.js", "AI"],
    visual: "city",
    icon: Globe2,
  },
  {
    name: "Prime Properties",
    category: "Full-stack · Real estate",
    description:
      "A responsive property platform with structured listing workflows, authentication, validated forms, and a maintainable TypeScript application architecture.",
    stack: ["Next.js", "React", "TypeScript", "Prisma"],
    visual: "property",
    icon: Braces,
  },
  {
    name: "Ms Online",
    category: "Full-stack · ISP platform",
    description:
      "A production-oriented ISP business platform with a separated frontend and Express API, deployed using PM2 and an Nginx reverse proxy.",
    stack: ["Node.js", "Express", "PM2", "Nginx"],
    visual: "network",
    icon: Network,
  },
  {
    name: "RM Communication Ltd",
    category: "Web · ISP business website",
    description:
      "A customer-facing broadband website built with reusable React and TypeScript content modules and deployment-focused project documentation.",
    stack: ["React", "TypeScript", "Vite", "CSS"],
    visual: "communication",
    icon: Globe2,
  },
  {
    name: "Bitnetworkbd Ltd",
    category: "Web · ISP business website",
    description:
      "A multi-page ISP site with routed experiences, reusable UI components, service-focused sections, and business-oriented workflows.",
    stack: ["React 19", "TypeScript", "Vite"],
    visual: "bitnetwork",
    icon: Network,
  },
  {
    name: "T-Club",
    category: "Business software · Garment records",
    description:
      "A role-based production system for stock, accessories, cutting and finished garments, including searchable records, cost tracking, and PDF reports.",
    stack: ["PHP", "MySQL", "PDO", "CSRF protection"],
    visual: "club",
    icon: Database,
  },
  {
    name: "Travel Booking & Guide",
    category: "Web application · Travel",
    description:
      "A travel experience spanning destinations, packages, bookings and history, customer reviews, authentication, API integrations, and payment workflows.",
    stack: ["Web", "REST APIs", "Authentication"],
    visual: "travel",
    icon: Globe2,
  },
  {
    name: "License Plate Recognition",
    category: "AI · Computer vision",
    description:
      "An end-to-end vehicle plate detection and OCR pipeline with model training, inference, and deployment utilities.",
    stack: ["Python", "Computer vision", "OCR"],
    visual: "vision",
    icon: Cpu,
  },
  {
    name: "Fake News Detection",
    category: "Machine learning · NLP",
    description:
      "A TF-IDF and Random Forest classification pipeline, evaluated at 98.05% project accuracy and connected to a REST prediction API.",
    stack: ["Python", "scikit-learn", "NLP", "REST API"],
    visual: "news",
    icon: ShieldCheck,
  },
  {
    name: "Cache Memory Simulator",
    category: "Software · Systems",
    description:
      "A Python simulator for direct-mapped, fully associative, and set-associative caches with LRU/FIFO replacement and hit/miss visualization.",
    stack: ["Python", "Algorithms", "Systems"],
    visual: "cache",
    icon: Cpu,
  },
  {
    name: "CPU vs GPU with CUDA",
    category: "Systems · Performance analysis",
    description:
      "A comparative performance study of NumPy and Numba parallel execution against CUDA kernels, covering throughput and speedup.",
    stack: ["Python", "CUDA", "Numba"],
    visual: "cuda",
    icon: Terminal,
  },
  {
    name: "House Price Prediction",
    category: "Machine learning · Regression",
    description:
      "A real-estate price-prediction project using feature engineering, model evaluation, and RMSE/R² performance comparison.",
    stack: ["Python", "Regression", "Model evaluation"],
    visual: "house",
    icon: Database,
  },
  {
    name: "Todo List Manager",
    category: "Web application · Productivity",
    description:
      "A task-management app centered on reliable CRUD workflows, responsive UI, and practical client-side state handling.",
    stack: ["Web", "CRUD", "Responsive UI"],
    visual: "todo",
    icon: Check,
  },
];

const expertise = [
  {
    icon: Code2,
    title: "Full-stack development",
    text: "Business websites, dashboards, and web apps from accessible interfaces to reliable APIs.",
    tags: ["React", "Next.js", "TypeScript", "Node.js", "Laravel"],
  },
  {
    icon: Network,
    title: "IT & network support",
    text: "Hands-on troubleshooting for office systems, connectivity, customer links, and user devices.",
    tags: ["TCP/IP", "LAN/WAN", "MikroTik", "GPON/EPON", "Windows/Linux"],
  },
  {
    icon: Server,
    title: "Deployment & operations",
    text: "Practical Linux-based hosting, production releases, process management, and maintenance.",
    tags: ["Ubuntu", "Nginx", "PM2", "VPS", "HTTPS/SSL"],
  },
  {
    icon: Sparkles,
    title: "Automation & applied AI",
    text: "Purposeful automation and machine-learning tools that remove repetitive work and surface insight.",
    tags: ["Python", "Selenium", "OCR", "TensorFlow", "scikit-learn"],
  },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend",
    skills: "React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, React Router, responsive UI",
  },
  {
    icon: Braces,
    title: "Backend & APIs",
    skills: "Node.js, Express.js, Django REST Framework, PHP, Laravel, REST APIs, JWT, RBAC",
  },
  {
    icon: Database,
    title: "Data",
    skills: "PostgreSQL, MySQL, MongoDB, Prisma ORM, SQLite, Firebase, schema design, CRUD",
  },
  {
    icon: ShieldCheck,
    title: "Security & quality",
    skills: "bcrypt, JWT, CORS, CSRF protection, input validation, Zod, MIME validation, debugging, testing",
  },
  {
    icon: Server,
    title: "DevOps & systems",
    skills: "Linux, Ubuntu, Nginx, PM2, Git/GitHub, VPS deployment, HTTPS/SSL, environment variables",
  },
  {
    icon: Cpu,
    title: "AI, mobile & languages",
    skills: "Python, C/C++, C#, Java, SQL, Flutter, Dart, TensorFlow, PyTorch, Keras, computer vision, OCR",
  },
];

const faqs = [
  {
    question: "What kind of work do you take on?",
    answer:
      "I work across full-stack web applications, business and ISP platforms, backend APIs, deployment, IT support, network troubleshooting, and practical automation.",
  },
  {
    question: "Can you support an existing application or network?",
    answer:
      "Yes. My experience includes software maintenance, production troubleshooting, Linux and Windows systems, LAN/WAN connectivity, subscriber links, and day-to-day office infrastructure.",
  },
  {
    question: "Where are you based, and what languages do you use?",
    answer:
      "I am based in Dhaka, Bangladesh. I have professional working proficiency in English for technical and academic communication.",
  },
  {
    question: "How can I get your CV?",
    answer:
      "Use the Download CV button in the About section to get the PDF version of my resume.",
  },
];

const navItems = [
  ["Projects", "#work"],
  ["Expertise", "#expertise"],
  ["Journey", "#journey"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"night" | "day">("night");
  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setFormState("sending");
    setFormMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });
      const result = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Your message could not be sent.");
      }

      setFormState("success");
      setFormMessage(result.message || "Your message has been sent.");
      form.reset();
    } catch (error) {
      setFormState("error");
      setFormMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Md Shihab Uddin Munsi",
    jobTitle: "IT & Network Support Engineer",
    description:
      "Full-stack developer and IT/network support engineer specializing in web applications, automation, and network operations.",
    email: "mailto:mshihab141@gmail.com",
    telephone: "+8801771506967",
    image: `${siteUrl}/images/shihab-profile.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
    sameAs: [
      "https://github.com/shihabuddin212",
      "https://www.linkedin.com/in/shihab-uddin-898529252",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Green University of Bangladesh",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <main className={`site-page theme-${theme}`}>
        <header className="site-header">
          <a className="brand" href="#home" aria-label="Shihab Uddin, home">
            <Image className="brand-logo" src="/images/header-logo.png" alt="" width={38} height={38} />
            <span className="brand-name">SHIHAB UDDIN</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
              Let&apos;s talk <ArrowUpRight size={14} />
            </a>
            <button
              className="theme-toggle"
              type="button"
              aria-label={`Switch to ${theme === "night" ? "day" : "night"} mode`}
              aria-pressed={theme === "day"}
              onClick={() => setTheme(theme === "night" ? "day" : "night")}
            >
              <span className="theme-toggle-icon">
                {theme === "night" ? <Moon size={15} /> : <Sun size={15} />}
              </span>
              <span>{theme === "night" ? "Night" : "Day"}</span>
            </button>
          </nav>
        </header>

        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
            <h1>
              I&apos;m Shihab,
              <br />
              <span className="muted-heading">I make technology</span>
              <br />
              <span className="accent-text">work for people.</span>
            </h1>
            <p className="hero-intro">
              IT &amp; Network Support Engineer and full-stack developer building dependable
              digital products, solving real-world technical problems, and keeping systems
              connected.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Let&apos;s connect <ArrowUpRight size={16} />
              </a>
              <a className="button button-quiet" href="#work">
                Explore my work <ArrowDownRight size={16} />
              </a>
            </div>
            <div className="hero-meta">
              <MapPin size={14} />
              <span>Dhaka, Bangladesh</span>
              <span className="meta-divider" />
              <span>Software · Systems · Networks</span>
            </div>
          </div>
          <div className="hero-art">
            <Image
              className="hero-portrait"
              src="/images/shihab-circle.png"
              alt="Md Shihab Uddin Munsi, IT and Network Support Engineer"
              width={665}
              height={665}
              priority
              sizes="(max-width: 720px) 78vw, 430px"
            />
            <div className="floating-card stat-projects">
              <span className="stat-number">20<span>+</span></span>
              <span>Projects contributed</span>
            </div>
            <div className="floating-card stat-records">
              <span className="stat-number">10K<span>+</span></span>
              <span>Records verified</span>
            </div>
            <div className="floating-card role-card">
              <span className="role-icon"><Network size={16} /></span>
              <span><strong>Engineer &amp; builder</strong><small>Software meets infrastructure</small></span>
            </div>
          </div>
          <a className="scroll-cue" href="#work" aria-label="Scroll to selected work">
            <ArrowDown size={16} />
          </a>
        </section>

        <section className="signal-strip" aria-label="Professional focus">
          <div className="signal-inner">
            <span className="signal-label">I WORK ACROSS</span>
            <span><Code2 size={16} /> Software</span>
            <span><Network size={16} /> Networks</span>
            <span><Terminal size={16} /> Automation</span>
            <span><Server size={16} /> Infrastructure</span>
            <span><ShieldCheck size={16} /> Reliable systems</span>
          </div>
        </section>

        <section className="section-shell section-block" id="work">
          <div className="section-heading">
            <div>
              <span className="section-kicker">SELECTED WORK <span>01 — 04</span></span>
              <h2>Built to solve<br /><span className="muted-heading">real problems.</span></h2>
            </div>
            <p>
              From civic-tech and business platforms to AI, networks, and systems programming —
              each project started with a problem worth solving.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => {
              const ProjectIcon = project.icon;
              return (
                <article className={`project-card project-${project.visual}`} key={project.name}>
                  <div className="project-preview" aria-hidden="true">
                    <div className="preview-topbar">
                      <span className="preview-brand"><span /> {project.name}</span>
                      <span className="preview-dots">● &nbsp;● &nbsp;●</span>
                    </div>
                    <div className="preview-content">
                      <span className="preview-index">0{index + 1} / PROJECT</span>
                      <ProjectIcon className="preview-icon" size={32} strokeWidth={1.4} />
                      <span className="preview-title">{project.name}</span>
                      <span className="preview-line" />
                      <span className="preview-line preview-line-short" />
                      <span className="preview-chip">{project.category.split("·")[0].trim()}</span>
                    </div>
                    <span className="preview-glow" />
                  </div>
                  <div className="project-details">
                    <div className="project-title-row">
                      <div>
                        <span className="project-category">{project.category}</span>
                        <h3>{project.name}</h3>
                      </div>
                      <span className="project-index">0{index + 1}</span>
                    </div>
                    <p>{project.description}</p>
                    <div className="tag-list">
                      {project.stack.map((item) => <span key={item}>{item}</span>)}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <a
            className="text-link work-link"
            href="https://github.com/shihabuddin212"
            target="_blank"
            rel="noreferrer"
          >
            More code on GitHub <ArrowUpRight size={15} />
          </a>
        </section>

        <section className="section-shell section-block expertise-section" id="expertise">
          <div className="section-heading compact-heading">
            <div>
              <span className="section-kicker">WHAT I BRING <span>02 — 04</span></span>
              <h2>One toolkit.<br /><span className="muted-heading">Many moving parts.</span></h2>
            </div>
            <p>
              I can move from a user-facing feature to the API, database, deployment, and
              infrastructure that keeps it running.
            </p>
          </div>
          <div className="expertise-grid">
            {expertise.map((item, index) => {
              const ExpertiseIcon = item.icon;
              return (
                <article className="expertise-card" key={item.title}>
                  <div className="expertise-topline">
                    <span className="expertise-icon"><ExpertiseIcon size={19} /></span>
                    <span className="expertise-number">0{index + 1}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              );
            })}
          </div>
          <div className="metrics-row">
            <div><strong>20<span>+</span></strong><span>Open-source projects</span></div>
            <div><strong>10K<span>+</span></strong><span>Records checked with automation</span></div>
            <div><strong>52<span>+</span></strong><span>Beecrowd problems solved</span></div>
            <div><strong>09</strong><span>Distinct technical domains</span></div>
          </div>
        </section>

        <section className="journey-section" id="journey">
          <div className="section-shell section-block">
            <div className="section-heading">
              <div>
                <span className="section-kicker">EXPERIENCE &amp; EDUCATION <span>03 — 04</span></span>
                <h2>A practical path<br /><span className="muted-heading">through technology.</span></h2>
              </div>
              <p>
                A computer-science foundation shaped by hands-on product work, technical support,
                and learning by building.
              </p>
            </div>
            <div className="journey-grid">
              <div className="timeline">
                <h3 className="column-heading"><span className="column-heading-icon"><Wrench size={16} /></span> EXPERIENCE</h3>
                <article className="timeline-item">
                  <span className="timeline-dot active" />
                  <div className="timeline-date">JUN 2026 — PRESENT <span className="current-pill">CURRENT</span></div>
                  <h4>IT &amp; Network Support Engineer</h4>
                  <div className="timeline-company">Ms Online</div>
                  <p>Developed Python/Selenium automation and verified 10K+ RMS records. Support Linux/Windows, TCP/IP, DHCP, DNS, LAN/WAN, GPON/EPON OLT, basic MikroTik, CCTV, devices, and subscriber connectivity.</p>
                </article>
                <article className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-date">JAN 2026 — MAY 2026</div>
                  <h4>Game Development Intern</h4>
                  <div className="timeline-company">Battery Low Interactive Ltd</div>
                  <p>Built interactive 2D/3D Unity and C# gameplay features, physics-based controls, collision detection, object tracking, and AR/XR prototypes.</p>
                </article>
                <article className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-date">PROJECT-BASED</div>
                  <h4>Full-Stack Developer</h4>
                  <div className="timeline-company">Independent projects</div>
                  <p>Delivered web apps, business portals, APIs, dashboards, database workflows, production deployments, and post-deployment support across modern web stacks.</p>
                </article>
                <article className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-date">OPEN SOURCE · PROJECT-BASED</div>
                  <h4>Open Source Contributor</h4>
                  <div className="timeline-company">GitHub · 20+ projects</div>
                  <p>Contributed across web applications, automation, machine learning, APIs, and database systems.</p>
                </article>
              </div>
              <div className="education-column">
                <h3 className="column-heading"><span className="column-heading-icon"><Sparkles size={16} /></span> EDUCATION &amp; LEARNING</h3>
                <article className="education-card">
                  <span className="education-date">JUL 2021 — MAY 2026</span>
                  <h4>B.Sc. in Computer Science &amp; Engineering</h4>
                  <p>Green University of Bangladesh<br />Dhaka, Bangladesh</p>
                </article>
                <article className="education-card">
                  <span className="education-date">CERTIFICATION · JUN 2026</span>
                  <h4>Google IT Support Professional Certificate</h4>
                  <p>Coursera</p>
                </article>
                <article className="education-card">
                  <span className="education-date">PROFESSIONAL TRAINING</span>
                  <h4>Full-Stack Web Development</h4>
                  <p>React, Node.js, REST APIs, authentication, deployment, and end-to-end applications.</p>
                </article>
                <article className="education-card">
                  <span className="education-date">ADDITIONAL TRAINING</span>
                  <h4>Machine learning, game development &amp; research</h4>
                  <p>Deep learning and CNNs; Unity, C# and AR/XR; research methodology and technical writing.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell section-block about-section" id="about">
          <div className="section-heading">
            <div>
              <span className="section-kicker">A LITTLE ABOUT ME <span>04 — 04</span></span>
              <h2>Curious by nature.<br /><span className="muted-heading">Useful by design.</span></h2>
            </div>
            <p>
              I enjoy understanding how a system works end to end — and making it more useful,
              reliable, and easier for people to use.
            </p>
          </div>
          <div className="about-card">
            <div className="about-photo-wrap">
              <Image
                src="/images/shihab-profile.png"
                alt="Portrait of Shihab Uddin"
                width={816}
                height={884}
                className="about-photo"
                sizes="(max-width: 720px) 90vw, 420px"
              />
              <span className="about-photo-label"><span className="status-dot" /> BASED IN DHAKA, BD</span>
            </div>
            <div className="about-copy">
              <span className="about-hello">HELLO, I&apos;M SHIHAB <span>↘</span></span>
              <h3>Software thinking.<br />Support engineer&apos;s mindset.</h3>
              <p>
                I&apos;m Md Shihab Uddin Munsi, an IT and Software Development professional with
                experience across full-stack development, software maintenance, databases, and
                hands-on IT support.
              </p>
              <p>
                I build web applications and APIs, improve repetitive workflows with automation,
                and troubleshoot the systems and networks people depend on. My CSE background
                gives me room to explore everything from mobile apps and computer vision to
                deployment and infrastructure.
              </p>
              <div className="about-values">
                <span><Check size={14} /> Thoughtful problem-solving</span>
                <span><Check size={14} /> Reliable communication</span>
                <span><Check size={14} /> Always learning</span>
              </div>
              <a className="button button-primary cv-button" href="/shihab-uddin-cv.pdf" download>
                <Download size={15} /> Download my CV
              </a>
              <div className="about-socials">
                <a href="https://github.com/shihabuddin212" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github size={17} />
                </a>
                <a href="https://www.linkedin.com/in/shihab-uddin-898529252" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <span className="linkedin-mark">in</span>
                </a>
                <a href="mailto:mshihab141@gmail.com" aria-label="Email"><Mail size={17} /></a>
                <span className="social-note">Let&apos;s make something useful.</span>
              </div>
            </div>
            <div className="skills-panel">
              <div className="skills-panel-heading"><span>TECHNICAL TOOLKIT</span><span>01 — 06</span></div>
              {skillGroups.map((group) => {
                const SkillIcon = group.icon;
                return (
                  <div className="skill-row" key={group.title}>
                    <span className="skill-icon"><SkillIcon size={15} /></span>
                    <div><h4>{group.title}</h4><p>{group.skills}</p></div>
                    <ArrowUpRight className="skill-arrow" size={14} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="extra-details">
            <div>
              <span className="extra-label">PROBLEM SOLVING</span>
              <strong>Beecrowd profile <span>52+</span> solved</strong>
              <p>90+ submissions in the current profile snapshot.</p>
            </div>
            <div>
              <span className="extra-label">LANGUAGE</span>
              <strong>English</strong>
              <p>Professional working proficiency for technical and academic communication.</p>
            </div>
            <div>
              <span className="extra-label">INTERESTS</span>
              <strong>Build. Learn. Improve.</strong>
              <p>Critical thinking, teamwork, communication, and practical problem-solving.</p>
            </div>
          </div>
        </section>

        <section className="section-shell section-block faq-section">
          <div className="faq-intro">
            <span className="section-kicker">GOOD TO KNOW</span>
            <h2>Questions,<br /><span className="muted-heading">answered.</span></h2>
            <p>A few quick details before we get in touch.</p>
            <a className="text-link" href="#contact">Ask me something else <ArrowUpRight size={15} /></a>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className={`faq-item ${activeFaq === index ? "is-active" : ""}`} key={faq.question}>
                <button
                  type="button"
                  aria-expanded={activeFaq === index}
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="faq-index">0{index + 1}</span>
                  <span>{faq.question}</span>
                  <ChevronDown size={17} />
                </button>
                {activeFaq === index && <p>{faq.answer}</p>}
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell contact-section" id="contact">
          <div className="contact-glow" />
          <div className="contact-content">
            <span className="section-kicker">HAVE A PROJECT IN MIND?</span>
            <h2>Let&apos;s make<br /><span>it work.</span></h2>
            <p>
              Have an idea, a technical challenge, or an opportunity to discuss? Tell me a little
              about it — I&apos;d be glad to hear from you.
            </p>
            <div className="contact-methods">
              <a href="mailto:mshihab141@gmail.com"><Mail size={16} /><span>mshihab141@gmail.com</span><ArrowUpRight size={14} /></a>
              <a href="tel:+8801771506967"><Phone size={16} /><span>+880 1771-506967</span><ArrowUpRight size={14} /></a>
              <span><MapPin size={16} /><span>Dhaka, Bangladesh</span></span>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-heading"><span>WRITE A MESSAGE</span><Send size={16} /></div>
            <label htmlFor="contact-name">Your name</label>
            <input id="contact-name" name="name" type="text" placeholder="How should I address you?" minLength={2} maxLength={100} required />
            <label htmlFor="contact-email">Email address</label>
            <input id="contact-email" name="email" type="email" placeholder="you@example.com" maxLength={254} required />
            <label htmlFor="contact-message">A little about your project</label>
            <textarea id="contact-message" name="message" rows={4} minLength={10} maxLength={5000} placeholder="What are you working on?" required />
            <button className="button button-primary form-submit" type="submit" disabled={formState === "sending"}>
              {formState === "sending" ? "Sending…" : "Send message"}
              {formState === "sending" ? <span className="loading-dot" /> : <ArrowUpRight size={16} />}
            </button>
            {formMessage && (
              <p className={`form-feedback ${formState}`} role="status" aria-live="polite">
                {formMessage}
              </p>
            )}
            <span className="form-privacy">Your details are only used to reply to your message.</span>
          </form>
        </section>

        <footer className="site-footer">
          <a className="brand footer-brand" href="#home">
            <Image className="brand-logo" src="/images/header-logo.png" alt="" width={34} height={34} />
            <span className="brand-name">SHIHAB UDDIN</span>
          </a>
          <span className="footer-note">Building practical solutions, one problem at a time.</span>
          <div className="footer-links">
            <a href="https://github.com/shihabuddin212" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>
            <a href="https://www.linkedin.com/in/shihab-uddin-898529252" target="_blank" rel="noreferrer" aria-label="LinkedIn"><span className="linkedin-mark">in</span></a>
            <a href="mailto:mshihab141@gmail.com" aria-label="Email"><Mail size={16} /></a>
          </div>
          <span className="copyright">© {new Date().getFullYear()} Md Shihab Uddin Munsi</span>
          <a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={13} /></a>
        </footer>
      </main>
    </>
  );
}
