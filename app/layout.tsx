import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Md Shihab Uddin Munsi | IT & Network Support Engineer",
  description:
    "Full-Stack Developer & IT Engineer with expertise in React, Next.js, Node.js, Python, networking, and system administration. Based in Dhaka, Bangladesh.",
  keywords: [
    "Shihab Uddin",
    "IT Engineer",
    "Full Stack Developer",
    "Network Support",
    "React",
    "Next.js",
    "Node.js",
    "Bangladesh",
  ],
  authors: [{ name: "Md Shihab Uddin Munsi" }],
  openGraph: {
    title: "Md Shihab Uddin Munsi | IT & Network Support Engineer",
    description:
      "Full-Stack Developer & IT Engineer — building reliable software and networks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
