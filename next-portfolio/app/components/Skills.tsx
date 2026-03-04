"use client";

import { motion } from "framer-motion";
import { skills } from "../data/skills";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SkillsCard = ({
  skillType,
  skills,
}: {
  skillType: string;
  skills: { skill: string; proficiency: string }[];
}) => {
  const proficiencyColors: Record<string, string> = {
    Beginner: "from-red-200 to-red-400 text-red-800 dark:from-red-900/50 dark:to-red-800/50 dark:text-red-200",
    Intermediate: "from-yellow-200 to-yellow-400 text-yellow-800 dark:from-yellow-900/50 dark:to-yellow-800/50 dark:text-yellow-200",
    Advanced: "from-blue-200 to-blue-400 text-blue-800 dark:from-blue-900/50 dark:to-blue-800/50 dark:text-blue-200",
    Expert: "from-green-200 to-green-400 text-green-800 dark:from-green-900/50 dark:to-green-800/50 dark:text-green-200",
  };

  return (
    <motion.div
      variants={item}
      className="w-full sm:min-w-[318px] px-6 py-5 bg-white rounded-xl shadow-md dark:bg-neutral-800 border border-transparent hover:border-neutral-200 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-xl"
    >
      <div className="flex items-center mb-4">
        <p className="text-xl font-bold text-gray-800 dark:text-white">
          {skillType}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <motion.span
            key={skill.skill}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className={`px-3 py-1.5 text-sm font-medium rounded-full bg-gradient-to-r ${proficiencyColors[skill.proficiency]} shadow-sm hover:shadow-md cursor-default transition-all duration-200`}
          >
            {skill.skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="container mx-auto px-4"
    >
      <motion.h2
        variants={item}
        className="text-3xl font-bold mb-6 text-gray-800 dark:text-white"
      >
        Skills
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((category) => (
          <SkillsCard
            key={category.skillType}
            skillType={category.skillType}
            skills={category.skills}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
