import { useParams } from "react-router";
import Navbar from "~/components/navbar";
import ProjectDetails from "~/pages/projects/components/projectDetails";
import { projects } from "~/pages/projects/data/projects";

export default function ProjectRoute() {
	const { projectId } = useParams();
	const project = projects.find((p) => p.id === projectId);

	if (!project) {
		return (
			<>
				<Navbar />
				<main className="flex items-center justify-center pt-16 pb-4">
					<div className="flex-1 flex flex-col items-start gap-8 min-h-0 container px-6 py-4 mx-auto">
						<h1 className="text-3xl font-bold">Project Not Found</h1>
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
