import Page from "@/components/Page";
import Link from "next/link";

export default function Home() {
	return (
		<Page description="Apply to join our team!" title="Apply" h1="Applications" h2="Apply to join our team!">
			<p>Hey! Thanks for visiting our page and reading our paper. If you&apos;re interested in joining our team, you can follow the steps below:</p>
			<br />
			<ol start={0}>
				<li>Fill out the <Link href="https://forms.gle/2A7cjpCUePy3hByu5">Google Form</Link></li>
				<li>If we think you&apos;re the stuff, we&apos;ll invite you to a private Google Chat to conduct an interview
					<ul><li><h6>note that you can request to do the interview on call or in-person if you really want to</h6></li></ul>
				</li>
			</ol>
		</Page>
	);
}
