"use client"

import { HalfMoon, SunLight } from "iconoir-react"

const ToggleDark = () => {
	return (
		<label className="swap swap-rotat">
			<input
				type="checkbox"
				className="theme-controller"
				value="halloween"
			/>
			<SunLight className="swap-on fill-current" />
			<HalfMoon className="swap-off fill-current" />
		</label>
	)
}

export default ToggleDark
