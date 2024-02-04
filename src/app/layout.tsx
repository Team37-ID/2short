import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/ui/navbar"
import { IconoirProvider } from "iconoir-react"
import "@/styles/magic-pattern.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<IconoirProvider
			iconProps={{
				color: "white",
				width: 24,
				height: 24,
			}}
		>
			<html lang="en">
				<body
					className={`${inter.className} bg-gradient-to-br from-[#E37DB9] to-[#FDFBC1] dark:from-[#030264] dark:to-[#D99BFA]`}
				>
					<div className="px-64 py-8 grain">
						<Navbar />
						{children}
					</div>
				</body>
			</html>
		</IconoirProvider>
	)
}
