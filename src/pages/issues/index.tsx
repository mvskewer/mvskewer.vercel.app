import { useEffect, useState } from 'react';
import Page from '@/components/Page';
import Link from 'next/link';
import File from '@/components/File';

type Issue = {
	path: string;
};

export default function Home() {
	const [latestIssue, setLatestIssue] = useState<Issue | null>(null);

	useEffect(() => {
		const fetchLatestIssue = async () => {
			const response = await fetch('/api/issues/latest');
			const data = await response.json();
			setLatestIssue(data);
		};

		fetchLatestIssue();
	}, []);

	return (
		<Page description="information on our issues" title="Issues" h1="Issues" h2="All of our issues in one place!">
			<p>
				You can view all of our previous issues <Link href="/issues/archive">here</Link>.
			</p>
			<br />
			<p>Read our latest issue:</p>
			<p>
				<Link href="/issues/archive/2024/February.pdf" target="_blank">
					Open in a new tab
				</Link>
				, or read it down below
			</p>
			{latestIssue ? <File path={latestIssue.path} /> : <p>could not fetch latest issue.</p>}
			<div className="footerPadding"></div>
		</Page>
	);
}
