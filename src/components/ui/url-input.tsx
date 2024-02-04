const URLInput = () => {
	return (
		<div className="flex flex-col gap-2 md:flex-row">
			<input
				type="url"
				placeholder="Paste long URL here"
				className="input input-bordered w-full max-w-md"
			/>
			<button
				type="button"
				className="btn btn-primary w-full max-w-sm md:w-auto"
			>
				Create
			</button>
		</div>
	)
}

export default URLInput
