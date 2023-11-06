import { useEffect, useState } from 'react';
import Page from "@/components/Page";
import Link from "next/link";
import File from "@/components/File";

export default function Home() {
	const [latestIssue, setLatestIssue] = useState(null);

	useEffect(() => {
		const fetchLatestIssue = async () => {
			const response = await fetch("/api/issues/latest");
			const data = await response.json();
			setLatestIssue(data);
		};

		fetchLatestIssue();
	}, []);

	return (
		<Page description="information on our issues" title="Issues" h1="Issues" h2="All of our issues in one place!">
			<p>You can view all of our previous issues <Link href="/issues/archive">here</Link>.</p>
			<br />
			<p>Read our latest issue:</p>
			{latestIssue && <File path={latestIssue.path} />}
		</Page>
	);
}