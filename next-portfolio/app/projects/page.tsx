import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <main className="flex justify-center pt-10 pb-4 flex-col gap-5 min-h-0 container md:px-6 py-4 mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white px-6">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </main>
  );
}
