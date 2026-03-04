export interface Experience {
  date: string;
  category: string;
  title: string;
  description: string;
  company: string;
  companyImg: string;
}

export const experiences: Experience[] = [
  {
    date: "2024 - Present",
    category: "Work",
    title: "Software Development Intern",
    description:
      "Working on full-stack development projects using React, Node.js, and MongoDB. Collaborating with cross-functional teams to deliver high-quality software solutions.",
    company: "UIC Innovation Hub",
    companyImg: "/uic.png",
  },
  {
    date: "2023 - 2024",
    category: "Academic",
    title: "Teaching Assistant - Computer Science",
    description:
      "Assisted professors in teaching introductory programming courses. Helped students with debugging, code reviews, and understanding fundamental concepts.",
    company: "University of Illinois Chicago",
    companyImg: "/uic.png",
  },
];
