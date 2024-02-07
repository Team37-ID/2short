"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { ZodError, z } from "zod"

const URLInput = () => {
	const url = z
		.string()
		.url({ message: "Please provide a valid URL" })
		.startsWith("https://", { message: "Must provide secure URL" })
		.trim()

	const [inputVal, setInputVal] = useState<string>("")
	const [errMessage, setErrMessage] = useState<string>("")
	const [isError, setIsError] = useState<boolean>(false)

	useEffect(() => {
		setIsError(inputVal.length < 1)
	}, [inputVal])

	const handlTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const val = e.target.value
		setInputVal(val)
		url.safeParse(val)
		console.log(val)
	}

	const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		try {
			const validatedUrl = url.parse(inputVal)
			setErrMessage("")

			await fetch("/api/v1/shortenurl", {
				method: "POST",
				body: JSON.stringify({ fullUrl: validatedUrl }),
				headers: {
					"Content-Type": "application/json",
				},
			})

			console.log("Success")
		} catch (err) {
			if (err instanceof ZodError) {
				setErrMessage(err.errors[0].message)
			}
			console.log("Error")
		}
	}

	return (
		<div className="flex flex-col gap-2 md:flex-row items-center justify-center">
			<input
				type="url"
				placeholder="Paste long URL here"
				className="input input-bordered w-full max-w-sm md:max-w-md"
				value={inputVal}
				onChange={handlTextChange}
			/>
			<button
				type="submit"
				className={cn(
					"btn btn-primary w-full max-w-sm md:w-auto",
					isError && "btn-disabled cursor-not-allowed",
				)}
				onClick={handleClick}
			>
				Create
			</button>
		</div>
	)
}

export default URLInput
