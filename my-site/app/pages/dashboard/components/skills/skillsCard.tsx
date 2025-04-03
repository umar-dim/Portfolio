interface SkillItem {
	skill: string;
	proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

interface SkillProps {
	skillType: string;
	skills: SkillItem[];
}

const Skill: React.FC<SkillProps> = ({ skillType, skills }) => {
	const proficiencyColors: Record<SkillItem["proficiency"], string> = {
		Beginner: "bg-red-500",
		Intermediate: "bg-yellow-500",
		Advanced: "bg-blue-500",
		Expert: "bg-green-500",
	};

  return (
    <></>
		// <div className="flex flex-col min-w-[280px] gap-4 p-4 border rounded-lg shadow-md">
		// 	<h2 className="text-lg font-semibold">{skillType}:</h2>
		// 	{skills.map((skill, index) => (
    //     <div key={index} className="flex justify-between">
		// 			<div className="text-md">{skill.skill}</div>
		// 			<span
		// 				className={`px-3 py-1 text-white rounded-md ${proficiencyColors[skill.proficiency]}`}
		// 			>
		// 				{skill.proficiency}
		// 			</span>
		// 		</div>
		// 	))}
		// </div>
	);
};

export default Skill;
