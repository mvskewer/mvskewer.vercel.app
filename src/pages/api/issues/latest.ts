import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
	// eventually I'll make this dynamic but not today (:
	res.status(200).json({ path: '/issues/archive/2024/February.pdf' });
}
