import Page from "@/components/Page";
import Link from "next/link";

export default function Home() {
	return (
		<Page description="information on our issues" title="Issues" h1="Issues" h2="All of our issues in one place!">
			<p>Read our latest issue:</p>
			<p><Link href="/issues/archive/2023/March.pdf" target="_blank">March 2023</Link></p>
			<br />
			<p>You can view all of our previous issues <Link href="/issues/archive">here</Link>.</p>
		</Page>
	);
}
