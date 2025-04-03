import ResumePdf from "./components/resumePdf";


export function Resume() {
	return (
		<main className="flex items-center justify-center pt-16 pb-4">
			<div className="flex-1 flex flex-col items-start gap-16 min-h-0 container px-6 py-4 mx-auto">
				<h1 className="text-3xl font-bold">My Resume</h1>
        <ResumePdf />
			</div>
		</main>
	);
}
