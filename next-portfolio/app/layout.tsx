import type { Metadata } from "next";
import { Funnel_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const funnel = Funnel_Display({
  subsets: ["latin"],
  variable: "--font-funnel",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Umar's Portfolio - Aspiring Software Developer",
  description:
    "Explore the portfolio of Umar, an aspiring software developer with experience in web development, programming, and problem-solving.",
  keywords:
    "Umar Khan, portfolio, aspiring software developer, web development, React, Node.js, programming, software engineering",
  authors: [{ name: "Umar Khan" }],
  openGraph: {
    title: "Umar's Portfolio - Aspiring Software Developer",
    description:
      "Explore the portfolio of Umar, an aspiring software developer with experience in web development, programming, and problem-solving.",
    type: "website",
    images: ["/card.jpg"],
  },
  twitter: {
    title: "Umar's Portfolio - Aspiring Software Developer",
    description:
      "Explore the portfolio of Umar, an aspiring software developer with experience in web development, programming, and problem-solving.",
    images: ["/card.jpg"],
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
    <html lang="en" className="scroll-smooth">
      <body className={`${funnel.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
