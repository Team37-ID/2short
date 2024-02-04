import URLInput from "@/components/ui/url-input"

export default function Home() {
	return (
		<main className="flex flex-col gap-2 min-h-screen items-center justify-center md:flex-row">
			<URLInput />
			<button
				type="button"
				className="btn btn-primary w-full max-w-sm md:w-auto"
			>
				Create
			</button>
		</main>
	)
}
