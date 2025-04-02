import Navbar from "~/components/navbar";

export function Experience() {
	return (
		<main className="flex items-center justify-center pt-16 pb-4">
			<div className="flex-1 flex flex-col items-start gap-16 min-h-0 container px-6 py-4 mx-auto">
				<h1 className="text-3xl font-bold">Experience Page</h1>
				<button className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-stone-600 rounded-lg hover:bg-stone-500 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-opacity-80">
					Primary
				</button>
			</div>
		</main>
	);
}
