export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
  dateCompleted: string;
  motivation: string;
  learnings: string[];
}

export const projects: Project[] = [
  {
    id: "portfolio",
    name: "Portfolio Website",
    description: "A personal portfolio website to showcase my projects and skills",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    githubLink: "https://github.com/yourusername/portfolio",
    liveLink: "https://your-portfolio-url.com",
    dateCompleted: "April 2025",
    motivation: "I wanted to create a modern, responsive portfolio website to showcase my work and skills while learning new technologies.",
    learnings: [
      "Implemented authentication using Supabase",
      "Learned how to create responsive layouts with Tailwind CSS",
      "Improved TypeScript skills with React",
      "Gained experience with React Router and server-side rendering"
    ]
  },
  {
    id: "telehealth-app",
    name: "Telehealth Application",
    description: "A real-time telehealth application connecting physicians and patients via video calls with AI-driven diagnostics",
    technologies: ["React", "Node.js", "WebRTC", "TensorFlow.js"],
    githubLink: "https://github.com/yourusername/telehealth-app",
    dateCompleted: "March 2025",
    motivation: "As part of my internship at Ingenio Care, I contributed to making healthcare more accessible through technology.",
    learnings: [
      "Implemented real-time video communication using WebRTC",
      "Integrated machine learning models for preliminary diagnostics",
      "Worked with HIPAA compliance requirements",
      "Collaborated in an agile development environment"
    ]
  }
  // Add more projects as needed
];