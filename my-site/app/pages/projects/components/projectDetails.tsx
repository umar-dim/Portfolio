interface ProjectDetailsProps {
	id: string;
	name: string;
	description: string;
	technologies: string[];
	githubLink: string;
	liveLink?: string;
	dateCompleted: string;
	motivation: string;
	learnings: string[];
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
	name,
	description,
	technologies,
	githubLink,
	liveLink,
	dateCompleted,
	motivation,
	learnings,
}) => {
	return (
		<div className="flex flex-col gap-8 max-w-4xl mx-auto">
			<div className="flex flex-col gap-4">
				<h1 className="text-3xl font-bold text-gray-700 dark:text-white">
					{name}
				</h1>
				<div className="flex gap-4">
					<a
						href={githubLink}
						target="_blank"
						rel="noopener noreferrer"
						className="px-4 py-2 text-sm font-semibold text-white bg-neutral-700 rounded-md hover:bg-neutral-600 transition-colors"
					>
						GitHub Repository
					</a>
					{liveLink && (
						<a
							href={liveLink}
							target="_blank"
							rel="noopener noreferrer"
							className="px-4 py-2 text-sm font-semibold text-white bg-neutral-700 rounded-md hover:bg-neutral-600 transition-colors"
						>
							Live Demo
						</a>
					)}
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<h2 className="text-xl font-semibold text-gray-700 dark:text-white">
					Description
				</h2>
				<p className="text-gray-600 dark:text-neutral-400">{description}</p>
			</div>

			<div className="flex flex-col gap-2">
				<h2 className="text-xl font-semibold text-gray-700 dark:text-white">
					Technologies Used
				</h2>
				<div className="flex flex-wrap gap-2">
					{technologies.map((tech) => (
						<span
							key={tech}
							className="px-3 py-1 text-sm font-bold text-neutral-100 bg-neutral-600 rounded"
						>
							{tech}
						</span>
					))}
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<h2 className="text-xl font-semibold text-gray-700 dark:text-white">
					Motivation
				</h2>
				<p className="text-gray-600 dark:text-neutral-400">{motivation}</p>
			</div>

			<div className="flex flex-col gap-2">
				<h2 className="text-xl font-semibold text-gray-700 dark:text-white">
					What I Learned
				</h2>
				<ul className="list-disc list-inside text-gray-600 dark:text-neutral-400">
					{learnings.map((learning, index) => (
						<li key={index}>{learning}</li>
					))}
				</ul>
			</div>

			<div className="flex flex-col gap-2">
				<h2 className="text-xl font-semibold text-gray-700 dark:text-white">
					Date Completed
				</h2>
				<p className="text-gray-600 dark:text-neutral-400">{dateCompleted}</p>
			</div>
		</div>
	);
};

export default ProjectDetails;
