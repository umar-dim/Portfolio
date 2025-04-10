import { Link } from "react-router";

interface ProjectCardProps {
	id: string;
	name: string;
	description: string;
	technologies: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	id,
	name,
	description,
	technologies,
}) => {
	return (
		<Link
			to={`/projects/${id}`}
			className="h-full w-full px-6 py-4 bg-white rounded-lg shadow-md dark:bg-neutral-800 hover:shadow-lg transition-shadow duration-300"
		>
			<div className="flex flex-col h-full">
				<div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
					<p className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-neutral-200">
						{name}
					</p>
					<div className="flex flex-wrap gap-2">
						{technologies.slice(0, 3).map((tech) => (
							<span
								key={tech}
								className="px-3 py-1 text-sm font-bold text-neutral-100 transition-colors duration-300 transform bg-neutral-600 rounded cursor-pointer hover:bg-neutral-500"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
				<p className="mt-3 text-gray-600 dark:text-neutral-400 line-clamp-3">
					{description}
				</p>
			</div>
		</Link>
	);
};

export default ProjectCard;
