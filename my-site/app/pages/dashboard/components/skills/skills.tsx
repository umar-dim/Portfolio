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
					skill: "C/C++",
					proficiency: "Expert",
				},
				{
					skill: "Python",
					proficiency: "Advanced",
				},
				{
					skill: "JavaScript",
					proficiency: "Intermediate",
				},
				{
					skill: "TypeScript",
					proficiency: "Intermediate",
				},
				{
					skill: "Dart",
					proficiency: "Intermediate",
				},
				{
					skill: "Java",
					proficiency: "Intermediate",
				},
				{
					skill: "Ruby",
					proficiency: "Beginner",
				},
				{
					skill: "F#",
					proficiency: "Beginner",
				},
			],
		},

		{
			skillType: "Frameworks",
			skills: [
				{
					skill: "React",
					proficiency: "Advanced",
				},
				{
					skill: "Flutter",
					proficiency: "Advanced",
				},
				{
					skill: "Node.js",
					proficiency: "Intermediate",
				},
				{
					skill: "Tailwind",
					proficiency: "Intermediate",
				},
				{
					skill: "PostgreSQL",
					proficiency: "Intermediate",
				},
				{
					skill: "MongoDb",
					proficiency: "Intermediate",
				},
			],
		},

		{
			skillType: "Tools",
			skills: [
				{
					skill: "Git",
					proficiency: "Expert",
				},
				{
					skill: "VS Code",
					proficiency: "Expert",
				},
				{
					skill: "Neovim/vim",
					proficiency: "Expert",
				},
				{
					skill: "GitHub",
					proficiency: "Advanced",
				},
				{
					skill: "Android Studio",
					proficiency: "Intermediate",
				},
				{
					skill: "IntelliJ IDEA",
					proficiency: "Intermediate",
				},
			],
		},
	];

	return (
		<section id="skills">
			<div className=" flex flex-col  items-start gap-5  min-h-0 container px-6 py-4 mx-auto">
				<h1 className="text-3xl font-bold">Skills</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{skills.map((category) => (
						<Skill
							key={category.skillType}
							skillType={category.skillType}
							skills={category.skills}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;
