import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { experiences } from "../../data/experiences";
import { skillProficiencyMap } from "../../data/skills";

interface ExperiencePageProps {
  params: Promise<{ id: string }>;
}

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

export default async function ExperiencePage({ params }: ExperiencePageProps) {
  const { id } = await params;
  const experience = experiences.find((exp) => exp.id === id);

  if (!experience) {
    notFound();
  }

  return (
    <main className="flex justify-center pt-10 pb-4 flex-col gap-5 min-h-0 container md:px-6 py-4 mx-auto">
      <Link
        href="/#experience"
        className="px-6 flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Experience
      </Link>

      <div className="px-6 py-8 bg-white rounded-xl shadow-md dark:bg-neutral-800">
        <div className="flex items-center gap-4 mb-4">
          <img
            className="w-14 h-14 rounded-lg object-cover"
            src={experience.companyImg}
            alt={`${experience.company} logo`}
          />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              {experience.title}
            </h1>
            <p className="text-lg font-medium text-neutral-600 dark:text-neutral-300">
              {experience.company}
            </p>
          </div>
          <span className="px-3 py-1 text-sm font-semibold text-white bg-linear-to-r from-neutral-600 to-neutral-700 rounded-full">
            {experience.category}
          </span>
        </div>

        <p className="text-sm text-neutral-500 mb-6">{experience.date}</p>

        <p className="text-gray-600 dark:text-neutral-400 leading-relaxed mb-8">
          {experience.description}
        </p>

        {experience.responsibilities && experience.responsibilities.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Responsibilities
            </h2>
            <ul className="space-y-2 text-gray-600 dark:text-neutral-400">
              {experience.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-neutral-500 rounded-full shrink-0" />
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        )}

        {experience.achievements && experience.achievements.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Key Achievements
            </h2>
            <ul className="space-y-2 text-gray-600 dark:text-neutral-400">
              {experience.achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {experience.technologies && experience.technologies.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 text-sm font-medium rounded-full bg-linear-to-r ${getSkillColor(tech)}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {experience.learnings && experience.learnings.length > 0 && (
          <div>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Key Learnings
            </h2>
            <ul className="space-y-2 text-gray-600 dark:text-neutral-400">
              {experience.learnings.map((learning, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500 rounded-full shrink-0" />
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
