import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trevor S. Kunz | AI/Data Science Portfolio",
  description: "AI/Data Science Graduate Student specializing in generative AI, machine learning, and data engineering. Exploring the intersection of business operations and cutting-edge AI technologies.",
  keywords: [
    "AI",
    "Data Science", 
    "Machine Learning",
    "Generative AI",
    "Python",
    "Next.js",
    "LangChain",
    "Supply Chain",
    "SMU"
  ],
  authors: [{ name: "Trevor S. Kunz" }],
  creator: "Trevor S. Kunz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tskunz.github.io",
    title: "Trevor S. Kunz | AI/Data Science Portfolio",
    description: "AI/Data Science Graduate Student specializing in generative AI and machine learning.",
    siteName: "Trevor Kunz Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trevor S. Kunz | AI/Data Science Portfolio",
    description: "AI/Data Science Graduate Student specializing in generative AI and machine learning.",
    creator: "@tskunz",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
