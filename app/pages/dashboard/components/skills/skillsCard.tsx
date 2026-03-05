import type { SkillCategory, SkillItem } from "~/types/skill";

const Skill: React.FC<SkillCategory> = ({ skillType, skills }) => {
	const proficiencyColors: Record<SkillItem["proficiency"], string> = {
		Beginner: "bg-red-500",
		Intermediate: "bg-yellow-500",
		Advanced: "bg-blue-500",
		Expert: "bg-green-500",
	};

	return (
		<div className="w-full sm:min-w-[318px] px-5 py-3 bg-white rounded-lg shadow-md dark:bg-neutral-800">
			<div className="mt-2">
				<div className="flex items-center">
					<p className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-neutral-200">
						{skillType}
					</p>
				</div>
			</div>

			<div className="flex flex-col mt-2">
				{skills.map((skill) => (
					<div
						key={skill.skill}
						className="flex items-center justify-between my-0.25"
					>
						<span className="font-bold text-gray-700 cursor-pointer dark:text-neutral-200">
							{skill.skill}
						</span>
						<span
							className={`p-1 text-xs text-white rounded-full ${
								proficiencyColors[skill.proficiency]
							}`}
						>
							{/* {skill.proficiency} */}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skill;
