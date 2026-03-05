export interface Project {
	id: string;
	name: string;
	description: string;
	technologies: string[];
	githubLink?: string;
	liveUrl?: string;
	learnings?: string[];
	dateCompleted?: string;
	motivation?: string;
}
