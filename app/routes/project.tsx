import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "~/components/navbar";
import ProjectDetails from "~/pages/projects/components/projectDetails";
import { fetchProjectById } from "~/services/supabaseService";
import LoadingSpinner from "~/components/LoadingSpinner";
import type { Project } from "~/types/project";

const validateProject = (project: Project | null): project is Project => {
  if (!project) return false;
  const requiredFields: (keyof Project)[] = [
		"id",
		"name",
		"description",
		"githubLink",
		"technologies",
		"learnings",
		"dateCompleted",
		"motivation",
	];
  const missingFields = requiredFields.filter(field => !project[field]);
  if (missingFields.length > 0) {
    console.error('Missing required fields:', missingFields);
    return false;
  }
  return true;
};

export default function ProjectRoute() {
	const { projectId } = useParams();
	const [project, setProject] = useState<Project | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getProject = async () => {
			if (!projectId) return;
			try {
				const data = await fetchProjectById(projectId);
				setProject(data);
				// console.log("project", data);
			} finally {
				setIsLoading(false);
			}
		};

		getProject();
	}, [projectId]);

	if (isLoading) {
		return (
			<>
				<Navbar />
				<main className="flex items-center justify-center pt-16 pb-4">
					<LoadingSpinner />
				</main>
			</>
		);
	}

	if (!validateProject(project)) {
		return (
			<>
				<Navbar />
				<main className="flex items-center justify-center pt-16 pb-4">
					<div className="flex-1 flex flex-col items-start gap-8 min-h-0 container px-6 py-4 mx-auto">
						<h1 className="text-3xl font-bold">Invalid Project Data</h1>
					</div>
				</main>
			</>
		);
	}

	return (
		<>
			<Navbar />
			<main className="flex items-center justify-center pt-16 pb-4">
				<div className="flex-1 flex flex-col items-start gap-8 min-h-0 container px-6 py-4 mx-auto">
					<ProjectDetails {...project} />
				</div>
			</main>
		</>
	);
}
