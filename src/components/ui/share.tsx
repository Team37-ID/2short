import { SendDiagonalSolid } from "iconoir-react/solid"

const Share = () => {
	return (
		<button
			type="button"
			className="flex flex-row justify-center items-center gap-2 border py-2 px-4 rounded-lg bg-gradient-to-br from-[#202020]/35 to-[#202020]/5 backdrop-blur hover:bg-primary transition-colors duration-300"
		>
			<p className="text-white md:text-base text-sm">Share</p>
			<SendDiagonalSolid className="w-6 md:w-full" />
		</button>
	)
}

export default Share
