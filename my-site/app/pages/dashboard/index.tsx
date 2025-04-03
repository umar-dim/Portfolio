import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience/experience";
import Skills from "./components/skills/skills";

export function Dashboard() {
	return (
		<main className="flex items-center justify-center pt-10 pb-4">
			<div className="flex-1 flex flex-col items-start gap-5 min-h-0 container px-6 py-4 mx-auto">
				<About />
				<Skills />
				<Experience />
				<Contact />
			</div>
		</main>
	);
}
