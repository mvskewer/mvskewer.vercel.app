type Member = {
	name: string;
	position: [string];
	shortBio: string;
	longBio: string;
};

const members: [Member] = [
	{
		name: "John Doe",
		position: ["Writer"],
		shortBio: "Loerm ipsum dolor sit amet.",
		longBio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies diam, quis aliquam nunc elit ut elit. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies diam, quis aliquam nunc elit ut elit.",
		// image can be derived from name
	},
];

export default members;
