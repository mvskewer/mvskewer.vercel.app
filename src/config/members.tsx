import Link from 'next/link';

type Member = {
	name: string;
	positions: string[];
	shortBio: string;
	longBio: string | JSX.Element; // if it's just a string, wrap it in a <p />
	deceased: boolean;
	obituary?: string | JSX.Element;
};

const members: Member[] = [
	// {
	// 	name: 'John Doe',
	// 	positions: ['Writer'],
	// 	shortBio: 'Loerm ipsum dolor sit amet.',
	// 	longBio:
	// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies diam, quis aliquam nunc elit ut elit. Sed euismod, diam quis aliquam tincidunt, nunc elit ultricies diam, quis aliquam nunc elit ut elit.',
	// 	deceased: false,
	// 	// image can be derived from name
	// },
	{
		name: 'Yongle',
		positions: ['Head', 'Co-Founder', 'Visual Designer', 'Editor', 'Writer'],
		shortBio: 'Founder of The Skewer',
		longBio: 'Former Emperor of the Ming Dynasty and now the head of The Skewer. He never got tired of being in charge, apparently.',
		deceased: false,
	},
	{
		name: 'Torbjörn Roger Halsten Herman Adolfsson',
		positions: ['Co-Founder', 'Websiter', 'Editor', 'Writer'],
		shortBio: 'person who do website',
		longBio: 'Co-Founder of the Skewer and Executive Editor. Spends more time working on the webstite than actually working on his articles.',
		deceased: false,
	},
	{
		name: 'Amio Koivunen',
		positions: ['Writer'],
		shortBio: 'Resident shitposter',
		longBio: "Juanma's #1 fan",
		deceased: false,
	},
	{
		name: 'C. Near',
		positions: ['Writer'],
		shortBio: 'viewer recruit',
		longBio: 'A former viewer writer, now a senior and not ready for life.',
		deceased: true,
		obituary: `C. Near was a very important news reporter who we are devastated to lose. She always kept us up to date with what was going on in the school and she provided near instantaneous coverage of current events. C. Near provided up-to-date information on the physics fair and then tragically informed the skewer staff about Carl Darwin's unfortunate passing in which she wrote an obituary for. C. Near wasn't only up to cover news stories. She also debated against Fullpetal on how to correctly define a sandwich! The Skewer staff is mourning the tragic loss of C. Near as she was a vital team member and news reporter. She will be missed.`
	},
	{
		name: 'Dr. Silly',
		positions: ['Writer'],
		shortBio: 'Reporter of fights, allegedly',
		longBio: '"I am the fight reporter. I report on fights and sometimes rate them on the violence and the amount of people involved."',
		deceased: false,
	},
	{
		name: 'Fullpetal Alchemist',
		positions: [''],
		shortBio: '',
		longBio: (
			<>
				<p>&quot;Who am I, you ask?</p>
				<p>A poet, a journalist,</p>
				<p>and sometimes funny.&quot;</p>
				<br />
				<p>
					It&apos;s our honor to have Fullpetal Alchemist, an esteemed poet and journalist, on our staff. They&apos;re known best for poetry published on their extremely popular Wattpad profile,{' '}
					<Link href="https://www.wattpad.com/user/BlessedBlossomBoi" target="_blank">
						BlessedBlossomBoi
					</Link>
					, and for their deep, insightful analysis of high school issues. They also take a passing interest in chess, school-scale news, and arguing about frivolous things in the debate section.
				</p>
				<br />
				<p>
					You may challenge them to a game of chess here:{' '}
					<Link href="https://lichess.org/@/Stupidity" target="_blank">
						lichess.org/@/Stupdity
					</Link>
				</p>
			</>
		),
		deceased: true,
		obituary: `Fullpetal Alchemist was an amazing reporter who wasn't afraid to write about challenging and controversial topics. He dove into the depths of the history of cafeteria food and why it is the way it is. He wasn't afraid to talk about SROs and how they can be beneficial to schools, and also uncovered the forbidden history of unofficial newspapers at Mounds View. He was also on the front lines last year when a student got attacked by another student armed with pepper spray. He was determined to uncover the truth and facts behind the attack and report them to the good people of Mounds View High School. Fullpetal wasn't just an excellent reporter and investigator, he also was well versed in poetry, writing many different genres to make classics like "Lunch" and "Parking". The loss of Fullpetal is weighing hard on our entire staff as he is considered to be one of the greatest Skewer staff members of all time. He will be missed.`
	},
	{
		name: 'J. Balvin',
		positions: ['Writer'],
		shortBio: 'based character',
		longBio: '17, student, saxophone player, magic the gathering officianado, one piece addict.',
		deceased: false,
	},
	{
		name: 'Mike Rotchburns',
		positions: ['Writer'],
		shortBio: 'Local chainsaw expert',
		longBio: <code>rm -rf /*</code>,
		deceased: false,
	},
	{
		name: 'Squishy',
		positions: ['Visual Designer'],
		shortBio: 'weerd',
		longBio: '"I like to code. I like to draw. I like to write stuff"',
		deceased: false,
	},
	{
		name: 'Fred the Møøse',
		positions: ['Writer'],
		shortBio: 'Horoscoper',
		longBio: '',
		deceased: false,
	},
];

export default members;
