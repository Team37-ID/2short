import Image from "next/image"
import ToggleDark from "@/components/ui/toggle-dark"
import Share from "@/components/ui/share"

const Navbar = () => {
	return (
		<nav className="flex flex-row justify-between w-full z-50 top-0">
			<Image src="2sh.svg" width={64} height={64} alt="2short logo" />
			<div className="flex flex-row justify-center md:gap-4 gap-2">
				<ToggleDark />
				<Share />
			</div>
		</nav>
	)
}

export default Navbar
