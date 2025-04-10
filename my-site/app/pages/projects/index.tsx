import { useEffect, useState } from "react";
import ProjectCard from "./components/projectCard";
import { fetchProjects } from "~/services/supabaseService";
// import type { Project } from "~/services/supabaseService";
import LoadingSpinner from "~/components/LoadingSpinner";
import type { Project } from "~/types/project";

export function Projects() {
	const [projects, setProjects] = useState<Project[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getProjects = async () => {
			try {
				const data = await fetchProjects();
				setProjects(data);
			} finally {
				setIsLoading(false);
			}
		};

		getProjects();
	}, []);

	if (isLoading) {
		return (
			<main className="flex justify-center pt-10 pb-4 flex-col gap-5 min-h-0 container md:px-6 py-4 mx-auto">
				<h1 className="text-3xl font-bold mb-4">My Projects</h1>
				<LoadingSpinner />
			</main>
		);
	}

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
