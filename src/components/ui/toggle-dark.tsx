"use client"

import { HalfMoon, SunLight } from "iconoir-react"

const ToggleDark = () => {
	return (
		<label className="swap swap-flip">
			<input
				type="checkbox"
				className="theme-controller"
				value="halloween"
			/>
			<div
				data-tip="Toggle dark mode"
				className="tooltip tooltip-bottom swap-on border flex items-center justify-center p-3 rounded-lg bg-gradient-to-br from-orange-600 to-yellow-400 backdrop-blur-lg"
			>
				<SunLight className="fill-current w-6 md:w-full" />
			</div>
			<div
				data-tip="Toggle light mode"
				className="tooltip tooltip-bottom swap-off border flex items-center justify-center p-3 rounded-lg bg-gradient-to-br from-purple-900 to-violet-500 backdrop-blur-lg"
			>
				<HalfMoon className="fill-current w-6 md:w-full" />
			</div>
		</label>
	)
}

export default ToggleDark
