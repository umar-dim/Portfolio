import Navbar from "~/components/navbar";
import type { Route } from "./+types/home";
import { Projects } from "~/pages/projects";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Umar's Portfolio" },
		{ name: "description", content: "Welcome to React Router!" },
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
