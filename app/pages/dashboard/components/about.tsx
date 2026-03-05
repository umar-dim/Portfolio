import React from "react";

const About = () => {
	return (
		<section id="about">
			<div className="flex flex-col gap-5 md:flex-row-reverse md:justify-between">
				<div className="md:flex-1 justify-center mx-auto px-6 py-4">
					<img
						src="./profile.jpg"
						alt="Umar Khan"
						className="object-cover w-48 h-48 rounded-full transform scale-x-[-1]"
					/>
				</div>

				<div className="md:flex-3 flex flex-col md:justify-center  min-h-0 container px-6 py-4 mx-auto">
					<h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
						Welcome to <span className="text-neutral-500 ">Umar</span>'s
						Portfolio
					</h1>

					<p className="mt-3 text-neutral-600 dark:text-neutral-400">
						Explore my portfolio! I'm an aspiring software developer with
						experience in web development, programming, and problem-solving.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
