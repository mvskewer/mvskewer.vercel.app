import Link from "next/link";

type Member = {
	name: string;
	positions: string[];
	shortBio: string;
	longBio: string | JSX.Element; // if it's just a string, wrap it in a <p />
	deceased: boolean;
	obituary?: string | JSX.Element;
};

const members: Member[] = [
	{
		name: "John Doe",
		positions: ["Writer"],
		shortBio: "Loerm ipsum dolor sit amet.",
		longBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies diam, quis aliquam nunc elit ut elit. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies diam, quis aliquam nunc elit ut elit.",
		deceased: false,
		// image can be derived from name
	},
	{
		name: "Yongle",
		positions: ["Head", "Co-Founder", "Visual Designer", "Editor", "Writer"],
		shortBio: "Founder of The Skewer",
		longBio: "Former Emperor of the Ming Dynasty and now the head of The Skewer. He never got tired of being in charge, apparently.",
		deceased: false,
	},
	{
		name: "Torbjörn Roger Halsten Herman Adolfsson",
		positions: ["Co-Founder", "Websiter", "Editor", "Writer"],
		shortBio: "person who do website",
		longBio: "Co-Founder of the Skewer and Executive Editor. Spends more time working on the webstite than actually working on his articles.",
		deceased: false,
	},
	{
		name: "Amio Koivunen",
		positions: ["Writer"],
		shortBio: "Reviewer of many a thing",
		longBio: "Juanma's #1 fan",
		deceased: false,
	},
	{
		name: "C. Near",
		positions: ["Writer"],
		shortBio: "A former viewer writer, now a senior and not ready for life.",
		longBio: "",
		deceased: true,
	},
	{
		name: "Dr. Silly",
		positions: ["Writer"],
		shortBio: "Reporter of fights, allegedly",
		longBio: '"I am the fight reporter. I report on fights and sometimes rate them on the violence and the amount of people involved."',
		deceased: false,
	},
	{
		name: "Fullpetal Alchemist",
		positions: [""],
		shortBio: "",
		longBio: (
			<>
				<p>&quot;Who am I, you ask?</p>
				<p>A poet, a journalist,</p>
				<p>and sometimes funny.&quot;</p>
				<br />
				<p>
					It&apos;s our honor to have Fullpetal Alchemist, an esteemed poet and journalist, on our staff. They&apos;re known best for poetry published on their extremely popular Wattpad profile,{" "}
					<Link href="https://www.wattpad.com/user/BlessedBlossomBoi" target="_blank">
						BlessedBlossomBoi
					</Link>
					, and for their deep, insightful analysis of high school issues. They also take a passing interest in chess, school-scale news, and arguing about frivolous things in the debate section.
				</p>
				<br />
				<p>
					You may challenge them to a game of chess here:{" "}
					<Link href="https://lichess.org/@/Stupidity" target="_blank">
						lichess.org/@/Stupdity
					</Link>
				</p>
			</>
		),
		deceased: true,
	},
	{
		name: "J. Balvin",
		positions: ["Writer"],
		shortBio: "based character",
		longBio: "17, student, saxophone player, magic the gathering officianado, one piece addict.",
		deceased: false,
	},
	{
		name: "Mike Rotchburns",
		positions: ["Writer"],
		shortBio: "Local chainsaw expert",
		longBio: <code>rm -rf /*</code>,
		deceased: false,
	},
	{
		name: "Squishy",
		positions: ["Visual Designer"],
		shortBio: "weerd",
		longBio: "\"I like to code. I like to draw. I like to write stuff\"",
		deceased: false,
	},
	{
		name: "Fred the Møøse",
		positions: ["Writer"],
		shortBio: "Horoscoper",
		longBio: "",
		deceased: false,
	},
];

export default members;
