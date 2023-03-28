import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
	model: "text-davinci-003",
	prompt: "insult someone who tried to switch from dark mode to light mode, and then let them know, unapologetically, that they can't switch to light mode",
	temperature: 0.7,
	max_tokens: 128,
	top_p: 1,
	frequency_penalty: 0,
	presence_penalty: 0,
});

// ---

const output = response.data.choices[0].text.replace(/^\n+/,"");

export default function handler(req, res) {
	res.status(200).json({ output: output });
	// console.log(response.data.choices.text);
}