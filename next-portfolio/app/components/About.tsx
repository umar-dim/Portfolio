"use client";

import { motion } from "framer-motion";

const welcomeWords = ["Welcome", "to"];
const nameWord = ["Umar", "Khan's"];
const portfolioWord = ["Portfolio"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const letterVariant = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-5 md:flex-row-reverse md:justify-between"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="md:flex-1 justify-center mx-auto px-6 py-4"
        >
          <motion.img
            src="/profile.jpg"
            alt="Umar Khan"
            className="object-cover w-48 h-48 rounded-full transform scale-x-[-1]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        <div className="md:flex-3 flex flex-col md:justify-center min-h-0 container px-6 py-4 mx-auto">
          <motion.h1
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800 dark:text-white lg:text-5xl flex flex-wrap gap-x-3"
          >
            {welcomeWords.map((word, i) => (
              <motion.span key={`welcome-${i}`} variants={wordVariant} className="inline-block">
                {word}
              </motion.span>
            ))}
            {/* <motion.span variants={wordVariant} className="inline-block text-neutral-500"> */}
            {nameWord.map((word, i) => (
              <motion.span key={`name-${i}`} variants={letterVariant} className="text-neutral-500 inline-block">
                {word}
              </motion.span>
            ))}
            {/* </motion.span> */}
            {/* <motion.span */}
            {/*   variants={wordVariant} */}
            {/*   className="inline-block bg-gradient-to-r from-neutral-700 to-neutral-900 dark:from-white dark:to-neutral-300 bg-clip-text text-transparent" */}
            {/* > */}
            {portfolioWord.map((word, i) => (
              <motion.span key={`portfolio-${i}`} variants={wordVariant} className="inline-block">
                {word}
              </motion.span>
            ))}
            {/* </motion.span> */}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-4 text-lg text-neutral-600 dark:text-neutral-400"
          >
            I&apos;m an aspiring software developer with experience in web development,
            programming, and problem-solving.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
