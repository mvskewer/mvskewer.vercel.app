// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import OpenAI from 'openai';

type Data = {
	output: string;
	error?: number;
};

const funnyStatusCodes = [501, 405, 402];

const funnyStatusCode = funnyStatusCodes[Math.floor(Math.random() * funnyStatusCodes.length)];

export default async function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
	res.setHeader('Cache-Control', 'no-cache');
	if (process.env.OPENAI_API_KEY) {
		res.status(100);

		const openai = new OpenAI({
			apiKey: process.env.OPENAI_API_KEY,
		});

		const response = await openai.chat.completions.create({
			model: 'gpt-3.5-turbo',
			messages: [
				{
					role: 'system',
					content: `\
insult a user who tried to switch from dark mode to light mode. make it sarcastic.
let them know that they can't switch to light mode.
imply that the user should feel bad about choosing to switch from dark mode.
the user is not able to switch to light mode. they are stuck in dark mode.`,
				},
			],
			temperature: 0.7,
			max_tokens: 128,
		});

		// ---

		const output = response.choices[0].message.content?.replace(/^\n+/, '').replaceAll('"', ''); // for some reason it really likes quotes

		if (!output) {
			res.status(500).json({ output: 'Johnathan H. Doe', error: 500 });
			return;
		}

		res.status(200).json({ output: output });
	} else {
		res.status(funnyStatusCode).json({ output: 'John Doe', error: funnyStatusCode });
	}
}
