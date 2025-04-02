import Contact from "~/components/contact";
import Navbar from "~/components/navbar";
import Skills from "~/components/skills";

export function Dashboard() {
	return (
		<main className="flex items-center justify-center pt-10 pb-4">
			<div className="flex-1 flex flex-col items-start gap-16 min-h-0 container px-6 py-4 mx-auto">
				<h1 className="text-3xl font-bold">Welcome to Umar's site</h1>
				<Skills />
				<Contact />
			</div>
		</main>
	);
}
