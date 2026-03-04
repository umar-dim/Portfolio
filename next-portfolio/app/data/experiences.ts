export interface Experience {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
  company: string;
  companyImg: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  learnings: string[];
}

export const experiences: Experience[] = [
  {
    id: "uic-innovation-hub",
    date: "2024 - Present",
    category: "Work",
    title: "Software Development Intern",
    description:
      "Working on full-stack development projects using React, Node.js, and MongoDB. Collaborating with cross-functional teams to deliver high-quality software solutions.",
    company: "UIC Innovation Hub",
    companyImg: "/uic.png",
    responsibilities: [
      "Developed and maintained full-stack web applications using React and Node.js",
      "Collaborated with cross-functional teams to gather requirements and deliver features",
      "Implemented RESTful APIs for data integration",
      "Participated in code reviews and contributed to best practices",
    ],
    achievements: [
      "Successfully launched 3 major features that improved user engagement by 25%",
      "Reduced API response time by 40% through optimization",
      "Mentored 2 junior developers on best practices",
    ],
    technologies: ["React", "Node.js", "MongoDB", "TypeScript", "Express", "Git"],
    learnings: [
      "Improved ability to work in agile environments with sprint planning",
      "Gained deeper understanding of database design and optimization",
      "Enhanced communication skills when collaborating with non-technical stakeholders",
    ],
  },
  {
    id: "uic-teaching-assistant",
    date: "2023 - 2024",
    category: "Academic",
    title: "Teaching Assistant - Computer Science",
    description:
      "Assisted professors in teaching introductory programming courses. Helped students with debugging, code reviews, and understanding fundamental concepts.",
    company: "University of Illinois Chicago",
    companyImg: "/uic.png",
    responsibilities: [
      "Held weekly office hours to help students with programming assignments",
      "Graded assignments and provided constructive feedback",
      "Led lab sessions for groups of 20+ students",
      "Assisted professors with course material preparation",
    ],
    achievements: [
      "Helped increase average student pass rate by 15%",
      "Developed supplementary tutorial materials used across multiple sections",
      "Received positive feedback from students for clear explanations",
    ],
    technologies: ["Python", "Java", "C++", "Data Structures", "Algorithms"],
    learnings: [
      "Strengthened foundational programming concepts",
      "Developed patience and communication skills for teaching",
      "Learned to break down complex concepts into simpler explanations",
    ],
  },
];
