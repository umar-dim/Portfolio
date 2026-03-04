export interface SkillItem {
  skill: string;
  proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface SkillCategory {
  skillType: string;
  skills: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    skillType: "Frontend",
    skills: [
      { skill: "React", proficiency: "Advanced" },
      { skill: "TypeScript", proficiency: "Advanced" },
      { skill: "Next.js", proficiency: "Intermediate" },
      { skill: "Tailwind CSS", proficiency: "Advanced" },
    ],
  },
  {
    skillType: "Backend",
    skills: [
      { skill: "Node.js", proficiency: "Advanced" },
      { skill: "Express.js", proficiency: "Advanced" },
      { skill: "Python", proficiency: "Intermediate" },
      { skill: "Java", proficiency: "Intermediate" },
    ],
  },
  {
    skillType: "Database",
    skills: [
      { skill: "MongoDB", proficiency: "Advanced" },
      { skill: "PostgreSQL", proficiency: "Intermediate" },
      { skill: "SQLite", proficiency: "Intermediate" },
      { skill: "Supabase", proficiency: "Intermediate" },
    ],
  },
  {
    skillType: "Tools",
    skills: [
      { skill: "Git", proficiency: "Advanced" },
      { skill: "Docker", proficiency: "Beginner" },
      { skill: "VS Code", proficiency: "Expert" },
      { skill: "Jira", proficiency: "Intermediate" },
    ],
  },
];
