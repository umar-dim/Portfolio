import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "../../data/projects";
import { skillProficiencyMap } from "../../data/skills";

interface ProjectPageProps {
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

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const Icon = project.icon;

  return (
    <main className="flex justify-center pt-10 pb-4 flex-col gap-5 min-h-0 container md:px-6 py-4 mx-auto">
      <Link
        href="/projects"
        className="px-6 flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Projects
      </Link>

      <div className="px-6 py-8 bg-white rounded-xl shadow-md dark:bg-neutral-800">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-neutral-100 dark:bg-neutral-700 rounded-xl">
            <Icon className="w-8 h-8 text-neutral-600 dark:text-neutral-300" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              {project.name}
            </h1>
            <p className="mt-1 text-sm text-neutral-500">
              {project.dateCompleted}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 text-sm font-medium rounded-full bg-linear-to-r ${getSkillColor(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-6 text-gray-600 dark:text-neutral-400 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Motivation
          </h2>
          <p className="mt-2 text-gray-600 dark:text-neutral-400 leading-relaxed">
            {project.motivation}
          </p>
        </div>

        {project.learnings && project.learnings.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              Key Learnings
            </h2>
            <ul className="mt-2 space-y-2 text-gray-600 dark:text-neutral-400">
              {project.learnings.map((learning, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 bg-neutral-500 rounded-full shrink-0" />
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-4 mt-8">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-white bg-neutral-700 rounded-lg hover:bg-neutral-600 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-white bg-neutral-700 rounded-lg hover:bg-neutral-600 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
