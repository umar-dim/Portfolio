"use client";

import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function ProjectsPage() {
  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      className="flex justify-center pt-10 pb-4 flex-col gap-5 min-h-0 container md:px-6 py-4 mx-auto"
    >
      <motion.h1
        variants={container}
        className="text-3xl font-bold text-gray-800 dark:text-white px-6"
      >
        Projects
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </motion.main>
  );
}
