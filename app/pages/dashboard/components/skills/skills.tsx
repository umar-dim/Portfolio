import { useEffect, useState } from "react";
import Skill from "./skillsCard";
import { fetchSkills } from "~/services/supabaseService";
import LoadingSpinner from "~/components/LoadingSpinner";
import type { SkillCategory } from "~/types/skill";

const Skills = () => {
	const [skills, setSkills] = useState<SkillCategory[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getSkills = async () => {
			try {
				const skillsData = await fetchSkills();
				setSkills(skillsData);
			} finally {
				setIsLoading(false);
			}
		};

		getSkills();
	}, []);

	if (isLoading) {
		return (
			<div className="container mx-auto px-4 py-8">
				<LoadingSpinner />
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{skills.map((category) => (
					<Skill
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
