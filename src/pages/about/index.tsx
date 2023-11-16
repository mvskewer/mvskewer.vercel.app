import Link from 'next/link';
import Page from '@/components/Page';

export default function Home() {
	return (
		<Page description="about page asdfhalskdhdsfh" title="About" h1="About" h2="About the Skewer">
			<p>
				<Link href="/about/staff">Staff</Link>
			</p>
			<p>
				<Link href="/about/mission">Our Mission</Link>
			</p>
		</Page>
	);
}
