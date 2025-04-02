import Navbar from "~/components/navbar";
import type { Route } from "./+types/home";
import { Experience } from "~/pages/experience";

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
			<Experience />
		</>
	);
}
