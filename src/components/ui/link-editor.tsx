const LinkEditor = () => {
	return (
		<div className="relative">
			<span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
				2.sh/
			</span>
			<input
				id="text-link"
				type="text"
				className="input input-bordered w-full max-w-xs pl-14 placeholder-gray-500"
				maxLength={24}
			/>
		</div>
	)
}

export default LinkEditor
