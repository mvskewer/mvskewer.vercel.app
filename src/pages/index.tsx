import Page from '@/components/Page';
import CardLink from '@/components/CardLink';

export default function Home() {
	return (
		<Page description="The official website of The Skewer - access our article archives, staff bios, and more!" title="Home" h1="The Skewer" h2="The official website of The Skewer!">
			<p>Welcome to our website! Here are some links to get you started:</p>
			<br />
			<CardLink href="issues">Issues</CardLink>
			<CardLink href="about">About</CardLink>
			<CardLink href="apply">Join Our Team</CardLink>
			<CardLink href="reader-request">Reader Request</CardLink>
		</Page>
	);
}
