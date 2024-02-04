"use client"

import { SendDiagonalSolid } from "iconoir-react/solid"
import { useCopyToClipboard } from "usehooks-ts"
import { useState } from "react"

const Share = () => {
	const [copiedText, copy] = useCopyToClipboard()
	const [showToast, setShowToast] = useState<boolean>(false)

	const handleCopy = (text: string) => {
		copy(text)
			.then(() => {
				setShowToast(true)
				console.log(`${copiedText} copied to clipboard`)
				setTimeout(() => setShowToast(false), 3000)
			})
			.catch(() => console.log("Failed to copy"))
	}

	return (
		<div>
			<button
				type="button"
				className="flex flex-row justify-center items-center gap-2 border py-3 px-4 rounded-lg bg-gradient-to-br from-[#202020]/35 to-[#202020]/5 backdrop-blur hover:bg-primary transition-colors duration-300"
				onClick={() => handleCopy(window.location.href)}
			>
				<p className="text-white md:text-base text-sm">Share</p>
				<SendDiagonalSolid className="w-6 md:w-full" />
			</button>
			{showToast && (
				<div className="toast toast-end">
					<div className="alert bg-green-500">
						<p className="text-white">Link copied to clipboard!</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default Share
