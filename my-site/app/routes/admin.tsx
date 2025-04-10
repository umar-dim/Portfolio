import type { Route } from "./+types/home";
import Navbar from "~/components/navbar";
import { useEffect, useState } from "react";
import Admin from "~/pages/admin";
import AdminRoute from "~/components/adminRoute";

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
		{ title: "Umar's Portfolio - Aspiring Software Developer" },
		{
			name: "description",
			content:
				"Explore the portfolio of Umar, an aspiring software developer with experience in web development, programming, and problem-solving.",
		},
		{
			name: "keywords",
			content:
				"Umar Khan, portfolio, aspiring software developer, web development, React, Node.js, programming, software engineering",
		},
		{ name: "author", content: "Umar Khan" },
		{ name: "robots", content: "index, follow" },
		{
			property: "og:title",
			content: "Umar's Portfolio - Aspiring Software Developer",
		},
		{
			property: "og:description",
			content:
				"Explore the portfolio of Umar, an aspiring software developer with experience in web development, programming, and problem-solving.",
		},
		{ property: "og:image", content: "/card.jpg" },
		{ property: "og:url", content: currentUrl },
		{ property: "og:type", content: "website" },
		{
			name: "twitter:title",
			content: "Umar's Portfolio - Aspiring Software Developer",
		},
		{
			name: "twitter:description",
			content:
				"Explore the portfolio of Umar, an aspiring software developer with experience in web development, programming, and problem-solving.",
		},
		{ name: "twitter:image", content: "/card.jpg" }, // Replace with your portfolio image URL
	];
}

export default function Home() {
	return (
		<AdminRoute>
			<Navbar />
			<Admin />
		</AdminRoute>
	);
}
