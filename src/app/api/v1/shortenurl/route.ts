import { NextRequest, NextResponse } from "next/server"
import ShortUniqueId from "short-unique-id"
import { getXataClient } from "@/lib/db/xata"

type Payload = {
	fullUrl: string
}

export async function POST(req: NextRequest, res: NextResponse) {
	const xata = getXataClient()

	const uid = new ShortUniqueId({ length: 7 })
	const { fullUrl }: Payload = await req.json()

	const shortUrl = `2.sh/${uid.rnd()}`

	const record = await xata.db.Url.create({
		full_url: fullUrl,
		short_url: shortUrl,
	})

	return new Response(JSON.stringify(record), {
		status: 201,
		headers: {
			"Content-Type": "application/json",
		},
	})
}
