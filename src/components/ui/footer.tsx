import { Github } from "iconoir-react"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
	return (
		<footer className="flex flex-row justify-between border border-white rounded-full items-center footer bg-gradient-to-br from-[#202020]/35 to-[#202020]/5 backdrop-blur-lg px-6 py-2">
			<Link href="#">
				<Image src="2sh.svg" width={64} height={64} alt="2short logo" />
			</Link>
			<p className="text-gray-200 text-xs md:text-sm text-center text-pretty">
				Copyright © 2024 - All right reserved by Team 37
			</p>
			<div>
				<Link
					href="https://github.com/Team37-ID/2short"
					className="group rounded-lg w-10 h-10 flex justify-center items-center transition-all duration-300"
					passHref
					target="_blank"
				>
					<Github
						color="white"
						className="group-hover:fill-white w-6 md:w-full"
					/>
				</Link>
			</div>
		</footer>
	)
}

export default Footer
