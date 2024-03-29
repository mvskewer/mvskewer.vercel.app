import FileLink from '@/components/FileLink';
import Page from '@/components/Page';

export default function Home() {
	return (
		<Page description="an archive of all of our digital releases" title="Archive" h1="Archive" h2="An archive of all of our digital releases">
			<p>2023:</p>
			<ul>
				<FileLink path="2023/February.pdf" name="February">
					February
				</FileLink>
				<FileLink path="2023/March.pdf" name="March">
					March
				</FileLink>
				<FileLink path="2023/September.pdf" name="September">
					September
				</FileLink>
				<FileLink path="2023/November.pdf" name="November">
					November
				</FileLink>
				<FileLink path="2023/December.pdf" name="December">
					December
				</FileLink>
			</ul>
			<p>2024:</p>
			<ul>
				<FileLink path="2024/February.pdf" name="February">
					February
				</FileLink>
				<FileLink path="2024/March.pdf" name="March">
					March
				</FileLink>
			</ul>
		</Page>
	);
}
