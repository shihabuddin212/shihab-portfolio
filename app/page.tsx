"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0f] min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Projects />
      <Services />
      <Process />
      <About />
      <Certifications />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
