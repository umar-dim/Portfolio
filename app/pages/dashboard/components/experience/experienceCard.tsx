interface CardProps {
	date: string;
	category: string;
	title: string;
	description: string;
	company: string;
	companyImg: string;
}

const ExperienceCard: React.FC<CardProps> = ({
	date,
	category,
	title,
	description,
	company,
	companyImg,
}) => {
	return (
		<div className="w-full px-8 py-4 bg-white rounded-lg shadow-md dark:bg-neutral-800">
			<div className="flex items-center justify-between">
				<span className="text-sm font-light text-gray-600 dark:text-neutral-400">
					{date}
				</span>

				<span className="px-3 py-1 text-sm font-bold text-neutral-100 transition-colors duration-300 transform bg-neutral-600 rounded cursor-pointer hover:bg-neutral-500">
					{category}
				</span>
			</div>

			<div className="mt-2">
				<div className="flex items-center">
					<img
						className="object-cover w-8 h-8 sm:w-10 sm:h-10 mr-4 rounded-full"
						src={companyImg}
						alt="Company logo"
					/>
					<p className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-neutral-200">
						{title}
					</p>
				</div>
				<p className="mt-2 text-gray-600 dark:text-neutral-400">
					{description}
				</p>
			</div>

			<div className="flex items-center mt-4">
				<span className="font-bold text-gray-700 cursor-pointer dark:text-neutral-200">
					{company}
				</span>
			</div>
		</div>
	);
};

export default ExperienceCard;
