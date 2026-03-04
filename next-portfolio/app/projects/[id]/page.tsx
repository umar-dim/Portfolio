import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex justify-center pt-10 pb-4 flex-col gap-5 min-h-0 container md:px-6 py-4 mx-auto">
      <Link
        href="/projects"
        className="px-6 text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
      >
        &larr; Back to Projects
      </Link>

      <div className="px-6 py-4 bg-white rounded-lg shadow-md dark:bg-neutral-800">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {project.name}
        </h1>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm font-bold text-neutral-100 bg-neutral-600 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-6 text-gray-600 dark:text-neutral-400">
          {project.description}
        </p>

        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Motivation
          </h2>
          <p className="mt-2 text-gray-600 dark:text-neutral-400">
            {project.motivation}
          </p>
        </div>

        {project.learnings && project.learnings.length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              Key Learnings
            </h2>
            <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-neutral-400">
              {project.learnings.map((learning, index) => (
                <li key={index} className="mt-1">
                  {learning}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex gap-4 mt-6">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-white bg-neutral-700 rounded hover:bg-neutral-600 transition-colors"
            >
              GitHub
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-white bg-neutral-700 rounded hover:bg-neutral-600 transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>

        <p className="mt-6 text-sm text-gray-500 dark:text-neutral-500">
          Completed: {project.dateCompleted}
        </p>
      </div>
    </main>
  );
}
