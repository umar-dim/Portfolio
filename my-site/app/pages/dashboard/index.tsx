import About from "./components/about";
import Contact from "./components/contact";
import Experience from "./components/experience/experience";
import Skills from "./components/skills/skills";

export function Dashboard() {
	return (
		<main className="flex justify-center pt-10 pb-4  flex-col gap-5 min-h-0 container md:px-6 py-4 mx-auto">
			<About />
			<Skills />
			<Experience />
			<Contact />
		</main>
	);
}
