// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import styles from '@/styles/Darkmode.module.css'

type Data = {
  selector: string
}

export default function handler(
	_req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({ selector: styles.hidden })
}
