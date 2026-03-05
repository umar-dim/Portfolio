"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "../data/projects";
import { skillProficiencyMap } from "../data/skills";

const proficiencyColors: Record<string, string> = {
  Beginner: "from-red-200 to-red-400 text-red-800 dark:from-red-900/50 dark:to-red-800/50 dark:text-red-200",
  Intermediate: "from-yellow-200 to-yellow-400 text-yellow-800 dark:from-yellow-900/50 dark:to-yellow-800/50 dark:text-yellow-200",
  Advanced: "from-blue-200 to-blue-400 text-blue-800 dark:from-blue-900/50 dark:to-blue-800/50 dark:text-blue-200",
  Expert: "from-green-200 to-green-400 text-green-800 dark:from-green-900/50 dark:to-green-800/50 dark:text-green-200",
};

const defaultColor = "from-neutral-200 to-neutral-400 text-neutral-800 dark:from-neutral-700 dark:to-neutral-600 dark:text-neutral-200";

const getSkillColor = (skill: string): string => {
  const proficiency = skillProficiencyMap[skill];
  return proficiency ? proficiencyColors[proficiency] : defaultColor;
};

const ProjectCard: React.FC<Project> = ({
  id,
  name,
  description,
  technologies,
  icon: Icon,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Link
        href={`/projects/${id}`}
        className="group relative block h-full w-full bg-white rounded-xl shadow-md dark:bg-neutral-800 overflow-hidden"
      >
        <div className="absolute inset-0 bg-neutral-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30 flex flex-col items-center justify-center gap-2">
          <span className="text-white font-semibold text-xl">View {name}</span>
          <span className="text-white/70 text-sm">Click to learn more</span>
        </div>

        <div className="relative p-6 flex flex-col h-full z-20 bg-white dark:bg-neutral-800 group-hover:brightness-75 dark:group-hover:brightness-50 transition-all duration-300">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-neutral-100 dark:bg-neutral-700 rounded-lg">
              <Icon className="w-6 h-6 text-neutral-600 dark:text-neutral-300" />
            </div>
            <div className="flex-1">
              <p className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-white transition-colors duration-300">
                {name}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-1 text-xs font-medium rounded-full bg-linear-to-r ${getSkillColor(tech)}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <p className="mt-3 text-gray-600 dark:text-neutral-400 group-hover:text-white/80 line-clamp-3 transition-colors duration-300">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
