import { createClient } from "@supabase/supabase-js";
import type { SkillCategory } from "~/types/skill";
import type { Experience } from "~/types/experience";
import type { Project } from "~/types/project";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const fetchSkills = async (): Promise<SkillCategory[]> => {
	const { data, error } = await supabase.from("skill").select("*");

	if (error) {
		console.error("Error fetching skills:", error);
		return [];
	}

	return data.reduce((acc: SkillCategory[], curr) => {
		const existingCategory = acc.find((cat) => cat.skillType === curr.type);
		if (existingCategory) {
			existingCategory.skills.push({
				skill: curr.skill,
				proficiency: curr.proficiency,
			});
		} else {
			acc.push({
				skillType: curr.type,
				skills: [
					{
						skill: curr.skill,
						proficiency: curr.proficiency,
					},
				],
			});
		}
		return acc;
	}, []);
};

export const fetchExperiences = async (): Promise<Experience[]> => {
	const { data, error } = await supabase.from("experience").select("*");

	if (error) {
		console.error("Error fetching experiences:", error);
		return [];
	}

	return data;
};

export const fetchProjects = async (): Promise<Project[]> => {
	const { data, error } = await supabase
		.from("project")
		.select("id, name, description, technologies");

	if (error) {
		console.error("Error fetching projects:", error);
		return [];
	}

	return data;
};

export const fetchProjectById = async (id: string): Promise<Project | null> => {
	const { data, error } = await supabase
		.from("project")
		.select("*")
		.eq("id", id)
		.single();

	if (error) {
		console.error("Error fetching project:", error);
		return null;
	}

	return data;
};
