type Member = {
	name: string;
	positions: string[];
	shortBio: string;
	longBio: string;
};

const members: Member[] = [
	{
		name: "John Doe",
		positions: ["Writer"],
		shortBio: "Loerm ipsum dolor sit amet.",
		longBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies diam, quis aliquam nunc elit ut elit. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies diam, quis aliquam nunc elit ut elit.",
		// image can be derived from name
	},
	{
		name: "Torbjörn Roger Halsten Herman Adolfsson",
		positions: ["Co-Founder", "Editor", "Writer"],
		shortBio: "Loerm ipsum dolor sit amet.",
		longBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies diam, quis aliquam nunc elit ut elit. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies diam, quis aliquam nunc elit ut elit.",
	},
];

export default members;
