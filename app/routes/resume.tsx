import Navbar from "~/components/navbar";
import type { Route } from "./+types/home";
import { Resume } from "~/pages/resume";
import { useState, useEffect } from "react";

export function meta({ }: Route.MetaArgs) {
		const [currentUrl, setCurrentUrl] = useState("");
	
			useEffect(() => {
				if (typeof window !== "undefined") {
					// Now it's safe to use window
					setCurrentUrl(window.location.href);
				}
			}, []);
	return [
		// { title: "Umar's Portfolio" },
		// { name: "description", content: "Welcome to React Router!" },
		{ title: "Umar's Resume - Aspiring Software Developer" }, // Page title
		{
			name: "description",
			content:
				"View the resume of Umar Khan, an aspiring software developer with experience in web development, machine learning, and more. Explore my qualifications, skills, and achievements.",
		}, // Description for the resume page
		{
			name: "keywords",
			content:
				"Umar Khan, resume, software developer resume, full-stack developer, web development, machine learning, React, Node.js, Python, software engineering, aspiring software developer",
		}, // Keywords related to the resume
		{ name: "author", content: "Umar Khan" }, // Author of the portfolio
		{ name: "robots", content: "index, follow" }, // Allow search engines to index this page
		{
			property: "og:title",
			content: "Umar's Resume - Aspiring Software Developer",
		}, // Open Graph title for social media sharing
		{
			property: "og:description",
			content:
				"View the resume of Umar Khan, an aspiring software developer with experience in web development, machine learning, and more. Explore my qualifications, skills, and achievements.",
		}, // Open Graph description for social media
		{ property: "og:image", content: "/card.jpg" },
		{ property: "og:url", content: currentUrl },
		{ property: "og:type", content: "website" },
		{
			name: "twitter:title",
			content: "Umar's Resume - Aspiring Software Developer",
		}, // Twitter card title
		{
			name: "twitter:description",
			content:
				"View the resume of Umar Khan, an aspiring software developer with experience in web development, machine learning, and more. Explore my qualifications, skills, and achievements.",
		}, // Twitter card description
		{ name: "twitter:image", content: "/card.jpg" }, // Twitter card image (replace with actual image)
	];
}

export default function Home() {
	return (
		<>
			<Navbar />
			<Resume />
		</>
	);
}
