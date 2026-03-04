import { skills } from "../data/skills";

const SkillsCard = ({
  skillType,
  skills,
}: {
  skillType: string;
  skills: { skill: string; proficiency: string }[];
}) => {
  const proficiencyColors: Record<string, string> = {
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
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((category) => (
          <SkillsCard
            key={category.skillType}
            skillType={category.skillType}
            skills={category.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
