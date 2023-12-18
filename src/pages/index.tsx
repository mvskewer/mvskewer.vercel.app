import Page from '@/components/Page';
import CardLink from '@/components/CardLink';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {
	return (
		<Page description="The official website of The Skewer - access our article archives, staff bios, and more!" title="Home" h1="The Skewer" h2="The official website of The Skewer!">
			<p>Welcome to our website! Here are some links to get you started:</p>
			<br />
			<CardLink>
				<Link href="issues">Issues</Link>
			</CardLink>
			<CardLink>
				<Link href="about">About</Link>
			</CardLink>
			<CardLink>
				<Link href="apply">Join Our Team</Link>
			</CardLink>
			<CardLink>
				<Link href="reader-request">Reader Request</Link>
			</CardLink>
		</Page>
	);
}
