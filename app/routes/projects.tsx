import Navbar from "~/components/navbar";
import type { Route } from "./+types/home";
import { Projects } from "~/pages/projects";
import { useState, useEffect } from "react";

export function meta({}: Route.MetaArgs) {
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
		{ title: "Umar's Portfolio - Projects" }, // Page title
		{
			name: "description",
			content:
				"Explore the projects of Umar, an aspiring software developer. See how I've applied my skills in web development, machine learning, and more.",
		}, // Description for the projects page
		{
			name: "keywords",
			content:
				"Umar Khan, software development projects, web development, machine learning, React, Node.js, Python, software engineering, full-stack development, portfolio",
		}, // Keywords related to your projects
		{ name: "author", content: "Umar Khan" }, // Author of the portfolio
		{ name: "robots", content: "index, follow" }, // To allow search engines to index this page
		{ property: "og:title", content: "Umar's Portfolio - Projects" }, // Open Graph title for social media sharing
		{
			property: "og:description",
			content:
				"Explore the projects of Umar, an aspiring software developer. See how I've applied my skills in web development, machine learning, and more.",
		}, // Open Graph description for social media sharing
		{ property: "og:image", content: "/card.jpg" },
		{ property: "og:url", content: currentUrl },
		{ property: "og:type", content: "website" },
		{ name: "twitter:title", content: "Umar's Portfolio - Projects" }, // Twitter card title
		{
			name: "twitter:description",
			content:
				"Explore the projects of Umar, an aspiring software developer. See how I've applied my skills in web development, machine learning, and more.",
		}, // Twitter card description
		{ name: "twitter:image", content: "/card.jpg" }, // Twitter card image (replace with actual image)
	];
}

export default function Home() {
	return (
		<>
			<Navbar />
			<Projects />
		</>
	);
}
