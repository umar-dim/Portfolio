import Navbar from "~/components/navbar";
import Skills from "~/pages/dashboard/components/skills/skills";
import ProjectCard from "./components/projectCard";
import { projects } from "./data/projects";

export function Projects() {
	return (
		<main className="flex items-center justify-center pt-16 pb-4">
			<div className="flex-1 flex flex-col items-start gap-8 min-h-0 container px-4 sm:px-6 py-4 mx-auto">
				<h1 className="text-3xl font-bold">My Projects</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
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
			</div>
		</main>
	);
}
