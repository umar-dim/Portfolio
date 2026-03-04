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
      { skill: "JavaScript", proficiency: "Intermediate" },
      { skill: "Flutter", proficiency: "Advanced" },
      { skill: "Dart", proficiency: "Intermediate" },
      { skill: "Material Design", proficiency: "Advanced" },
    ],
  },
  {
    skillType: "Backend",
    skills: [
      { skill: "Node.js", proficiency: "Advanced" },
      { skill: "Express.js", proficiency: "Advanced" },
      { skill: "Python", proficiency: "Intermediate" },
      { skill: "Java", proficiency: "Intermediate" },
      { skill: "Django", proficiency: "Intermediate" },
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
    skillType: "Data Science",
    skills: [
      { skill: "Machine Learning", proficiency: "Intermediate" },
      { skill: "Jupyter Notebooks", proficiency: "Intermediate" },
      { skill: "Pandas", proficiency: "Advanced" },
      { skill: "NumPy", proficiency: "Advanced" },
      { skill: "Matplotlib", proficiency: "Advanced" },
      { skill: "Seaborn", proficiency: "Intermediate" },
    ],
  },
  {
    skillType: "Tools",
    skills: [
      { skill: "Git", proficiency: "Advanced" },
      { skill: "Docker", proficiency: "Beginner" },
      { skill: "VS Code", proficiency: "Expert" },
      { skill: "Jira", proficiency: "Intermediate" },
      { skill: "JavaFX", proficiency: "Intermediate" },
      { skill: "Maven", proficiency: "Intermediate" },
    ],
  },
];

export const skillProficiencyMap: Record<string, string> = skills.reduce(
  (acc, category) => {
    category.skills.forEach((skill) => {
      acc[skill.skill] = skill.proficiency;
    });
    return acc;
  },
  {} as Record<string, string>
);
