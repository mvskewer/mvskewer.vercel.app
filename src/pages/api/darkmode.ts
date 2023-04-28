// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  output: string,
  error?: number
}

const funnyStatusCodes = [
	501,
	405,
	402,
];

const funnyStatusCode = funnyStatusCodes[Math.floor(Math.random() * funnyStatusCodes.length)];

export default function handler(
	_req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.setHeader('Cache-Control', 'no-store');
	res.status(funnyStatusCode).json({ output: 'John Doe', error: funnyStatusCode })
}
