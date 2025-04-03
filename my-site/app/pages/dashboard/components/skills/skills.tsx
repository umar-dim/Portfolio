import Skill from "./skillsCard";

interface SkillItem {
	skill: string;
	proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

interface SkillCategory {
	skillType: string;
	skills: SkillItem[];
}

const Skills = () => {
	const skills: SkillCategory[] = [
		{
			skillType: "Languages",
			skills: [
				{
					skill: "Python",
					proficiency: "Advanced",
				},
				{
					skill: "JavaScript",
					proficiency: "Intermediate",
				},
				{
					skill: "HTML",
					proficiency: "Intermediate",
				},
			],
		},

		{
			skillType: "Frameworks",
			skills: [
				{
					skill: "Django",
					proficiency: "Intermediate",
				},
				{
					skill: "React",
					proficiency: "Intermediate",
				},
				{
					skill: "Tailwind",
					proficiency: "Intermediate",
				},
				{
					skill: "Bootstrap",
					proficiency: "Intermediate",
				},
			],
		},

		{
			skillType: "Tools",
			skills: [
				{
					skill: "Git",
					proficiency: "Advanced",
				},
				{
					skill: "GitHub",
					proficiency: "Advanced",
				},
				{
					skill: "VS Code",
					proficiency: "Advanced",
				},
			],
		},
	];

	return (
		<section id="skills">
			<div className=" flex flex-col  items-start gap-5  min-h-0 container px-6 py-4 mx-auto">
				<h1 className="text-3xl font-bold">Skills</h1>
				{/* <div
					className="flex flex-col sm:flex-wrap md:flex-row min-w-sm justify-start gap-4 bg-red-500  px-6 py-4"
				>
					{skills.map((category) => (
						<Skill
							key={category.skillType}
							skillType={category.skillType}
							skills={category.skills}
						/>
					))}
				</div> */}
			</div>
		</section>
	);
};

export default Skills;
