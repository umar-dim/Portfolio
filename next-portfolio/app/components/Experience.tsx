"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { experiences } from "../data/experiences";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const ExperienceCard = ({
  id,
  date,
  category,
  title,
  description,
  company,
  companyImg,
}: {
  id: string;
  date: string;
  category: string;
  title: string;
  description: string;
  company: string;
  companyImg: string;
}) => {
  return (
    <motion.div
      variants={item}
      className="relative pl-8 border-l-2 border-neutral-300 dark:border-neutral-600"
    >
      <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-neutral-600 dark:bg-neutral-400 ring-4 ring-white dark:ring-neutral-800" />

      <Link href={`/experiences/${id}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="group relative mb-8 p-6 bg-white rounded-xl shadow-md dark:bg-neutral-800 hover:shadow-xl transition-shadow duration-300"
        >

          <div className="relative z-20">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                {date}
              </span>
              <span className="px-3 py-1 text-xs font-semibold text-white bg-linear-to-r from-neutral-600 to-neutral-700 rounded-full">
                {category}
              </span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <img
                className="w-10 h-10 rounded-lg object-cover"
                src={companyImg}
                alt={`${company} logo`}
              />
              <div>
                <p className="text-lg font-bold text-gray-800 dark:text-white">
                  {title}
                </p>
                <p className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
                  {company}
                </p>
              </div>
            </div>

            <p className="text-gray-600 dark:text-neutral-400 leading-relaxed">
              {description}
            </p>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8 text-gray-800 dark:text-white"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
