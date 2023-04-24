// .js until I figure out how to configure topLevelAwait in TS...

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
	model: "text-davinci-003",
	prompt: `\
insult a user who tried to switch from dark mode to light mode. make it sarcastic.
let them know that they can't switch to light mode.
imply that the user should feel bad about choosing to switch from dark mode.`,
	temperature: 0.7,
	max_tokens: 128,
	top_p: 1,
	frequency_penalty: 0,
	presence_penalty: 0,
});

// ---

const output = response.data.choices[0].text.replace(/^\n+/, "").replaceAll('"', ""); // for some reason it really likes quotes

export default function handler(req, res) {
	res.setHeader('Cache-Control', 'no-store');
	res.status(200).json({ output: output });
	// console.log(response.data.choices.text);
}