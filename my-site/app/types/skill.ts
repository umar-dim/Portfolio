export interface SkillItem {
	skill: string;
	proficiency: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface SkillCategory {
	skillType: string;
	skills: SkillItem[];
}
