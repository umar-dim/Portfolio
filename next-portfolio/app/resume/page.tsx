import type { Metadata } from "next";
import ResumePdf from "./components/ResumePdf";

export const metadata: Metadata = {
  title: "Umar's Resume - Aspiring Software Developer",
  description:
    "View the resume of Umar Khan, an aspiring software developer with experience in web development, machine learning, and more. Explore my qualifications, skills, and achievements.",
  keywords:
    "Umar Khan, resume, software developer resume, full-stack developer, web development, machine learning, React, Node.js, Python, software engineering, aspiring software developer",
  authors: [{ name: "Umar Khan" }],
  openGraph: {
    title: "Umar's Resume - Aspiring Software Developer",
    description:
      "View the resume of Umar Khan, an aspiring software developer with experience in web development, machine learning, and more.",
    type: "website",
    images: ["/card.jpg"],
  },
  twitter: {
    title: "Umar's Resume - Aspiring Software Developer",
    description:
      "View the resume of Umar Khan, an aspiring software developer with experience in web development, machine learning, and more.",
    images: ["/card.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ResumePage() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-start gap-16 min-h-0 container px-6 py-4 mx-auto">
        <h1 className="text-3xl font-bold">My Resume</h1>
        <ResumePdf />
      </div>
    </main>
  );
}
