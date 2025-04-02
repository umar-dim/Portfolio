import type { Route } from "./+types/home";
import { Dashboard } from "../pages/dashboard/index";
import Navbar from "~/components/navbar";

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
			<Dashboard />
		</>
	);
}
