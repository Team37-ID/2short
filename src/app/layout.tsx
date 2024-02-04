import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/ui/navbar"
import { IconoirProvider } from "iconoir-react"
import "@/styles/magic-pattern.css"
import Footer from "@/components/ui/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "URL Shortener | 2short",
	description: "URL/link shortener",
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
					className={`${inter.className} bg-gradient-to-br from-[#E37DB9] to-[#FDFBC1] dark:from-[#6142FF] dark:to-[#FAB0FF]`}
				>
					<div className="px-8 md:px-64 py-8 grain">
						<Navbar />
						{children}
						<Footer />
					</div>
				</body>
			</html>
		</IconoirProvider>
	)
}
