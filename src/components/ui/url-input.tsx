"use client"

import { useState } from "react"
import { ZodError, z } from "zod"

const URLInput = () => {
	const url = z
		.string()
		.url({ message: "Please provide a valid URL" })
		.min(1)
		.startsWith("https://", { message: "Must provide secure URL" })
		.trim()

	const [inputVal, setInputVal] = useState<string>()
	const [errMessage, setErrMessage] = useState<string>()

	const handlTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value
		setInputVal(val)
		console.log(val)
	}

	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		try {
			url.safeParse(inputVal)
			setErrMessage("")
			console.log("Success")
		} catch (err) {
			if (err instanceof ZodError) {
				setErrMessage(err.errors[0].message)
			}
			console.log("Error")
		}
	}

	return (
		<div className="flex flex-col gap-2 md:flex-row">
			<input
				type="url"
				placeholder="Paste long URL here"
				className="input input-bordered w-full max-w-md"
				value={inputVal}
				onChange={handlTextChange}
			/>
			{errMessage && <p className="text-red-500">{errMessage}</p>}
			<button
				type="submit"
				className="btn btn-primary w-full max-w-sm md:w-auto"
				onClick={handleClick}
			>
				Create
			</button>
		</div>
	)
}

export default URLInput
