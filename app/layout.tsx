import type { Metadata, Viewport } from "next";
import { siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Md Shihab Uddin Munsi | IT & Network Support Engineer",
  description:
    "Portfolio of Md Shihab Uddin Munsi — IT & Network Support Engineer and full-stack developer building dependable web applications, APIs, automation, and network solutions.",
  applicationName: "Shihab Uddin Munsi Portfolio",
  keywords: [
    "Md Shihab Uddin Munsi",
    "IT Support Engineer",
    "Network Support Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "Dhaka Bangladesh",
    "Computer Science Engineer",
  ],
  authors: [{ name: "Md Shihab Uddin Munsi" }],
  creator: "Md Shihab Uddin Munsi",
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: siteUrl,
    title: "Md Shihab Uddin Munsi | IT, Networks & Software",
    description:
      "Full-stack development, IT support, network troubleshooting, and practical automation from Dhaka, Bangladesh.",
    siteName: "Shihab Uddin Munsi",
    images: [
      {
        url: "/images/shihab-circle.png",
        width: 665,
        height: 665,
        alt: "Portrait of Md Shihab Uddin Munsi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Shihab Uddin Munsi | IT & Network Support Engineer",
    description:
      "Full-stack developer and IT/network support engineer based in Dhaka, Bangladesh.",
    images: ["/images/shihab-circle.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07090e",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
