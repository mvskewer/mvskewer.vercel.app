// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  output: string,
  error?: number
}

export default function handler(
	_req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(501).json({ output: 'John Doe', error: 501 })
}
