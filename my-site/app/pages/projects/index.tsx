import Navbar from "~/components/navbar";
import ProjectCard from "./components/projectCard";
import { projects } from "./data/projects";

export function Projects() {
	return (
		<main className="flex justify-center pt-10 pb-4 flex-col gap-5 min-h-0 container md:px-6 py-4 mx-auto">
			<div className="container mx-auto px-4">
				<h1 className="text-3xl font-bold mb-4">My Projects</h1>
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
