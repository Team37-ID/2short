"use client"

import { SendDiagonalSolid } from "iconoir-react/solid"
import { useCopyToClipboard } from "usehooks-ts"

const Share = () => {
	const [copiedText, copy] = useCopyToClipboard()

	const handleCopy = (text: string) => {
		copy(text)
			.then(() => console.log(`${copiedText} copied to clipboard`))
			.catch(() => console.log("Failed to copy"))
	}

	return (
		<button
			type="button"
			className="flex flex-row justify-center items-center gap-2 border py-2 px-4 rounded-lg bg-gradient-to-br from-[#202020]/35 to-[#202020]/5 backdrop-blur hover:bg-primary transition-colors duration-300"
			onClick={() => handleCopy(window.location.href)}
		>
			<p className="text-white md:text-base text-sm">Share</p>
			<SendDiagonalSolid className="w-6 md:w-full" />
		</button>
	)
}

export default Share
