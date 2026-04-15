import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Henrique Lima — Software Engineer",
  description:
    "Software Development Engineer specializing in .NET, React, Microservices, and Azure. 5+ years building scalable systems and modern web applications.",
  keywords: [
    "software engineer",
    "full stack",
    ".NET",
    "ASP.NET Core",
    "React",
    "TypeScript",
    "Azure",
    "microservices",
  ],
  authors: [{ name: "Henrique Lima Barroso" }],
  openGraph: {
    title: "Henrique Lima — Software Engineer",
    description:
      "Software Development Engineer specializing in .NET, React, Microservices, and Azure.",
    url: "https://henriquelima.net",
    siteName: "Henrique Lima",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Henrique Lima — Software Engineer",
    description:
      "Software Development Engineer specializing in .NET, React, Microservices, and Azure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body suppressHydrationWarning>
        <Navbar />
        <div className="pt-14">{children}</div>
      </body>
    </html>
  );
}
