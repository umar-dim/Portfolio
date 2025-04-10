import ExperienceCard from "./experienceCard";

const Experience = () => {
	const experiences = [
		{
			date: "Jan 2025 - 4 months",
			category: "Full Stack",
			title: "Web Developer Intern",
			description:
				"Helped building a real-time telehealth app connecting physicians and patients via video calls, utilizing AI-driven diagnostics and feedback to enhance consultations, improve decision-making, and increase healthcare accessibility and efficiency.",
			company: "Ingenio Care",
			companyImg: "./ingenio.png",
		},
		{
			date: "Jan 2023 - Dec 2024",
			category: "Tutor",
			title: "Computer Science Tutor",
			description:
				"I assist students in understanding complex concepts, completing assignments, and enhancing problem-solving skills. I provide personalized guidance to help students succeed in their computer science courses.",
			company: "ELC - University of Illinois Chicago",
			companyImg: "./uic.png",
		},
	];
	return (
		<section id="experience">
			<div className="container mx-auto px-4">
				<h1 className="text-3xl font-bold mb-4">Experience</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{experiences.map((experience, index) => (
						<ExperienceCard key={index} {...experience} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
