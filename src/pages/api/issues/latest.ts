import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ path: "/issues/archive/2023/September.pdf" });
}
