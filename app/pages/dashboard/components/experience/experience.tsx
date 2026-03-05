import { useEffect, useState } from "react";
import ExperienceCard from "./experienceCard";
import { fetchExperiences } from "~/services/supabaseService";
import type { Experience  } from "~/types/experience";
import LoadingSpinner from "~/components/LoadingSpinner";
// import LoadingSpinner from "@/app/components/LoadingSpinner";

const Experience = () => {
	const [experiences, setExperiences] = useState<Experience[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getExperiences = async () => {
			try {
				const data = await fetchExperiences();
				setExperiences(data);
				// console.log("experiences", data);
			} finally {
				setIsLoading(false);
			}
		};
		
		getExperiences();
	}, []);

	if (isLoading) {
		return (
			<>
				<h1 className="text-3xl font-bold mb-4">Experience</h1>
				<div className="container mx-auto px-4 py-8">
					<LoadingSpinner />
				</div>
			</>
		);
	}

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
