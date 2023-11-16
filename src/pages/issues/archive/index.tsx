import FileLink from '@/components/FileLink';
import Page from '@/components/Page';

export default function Home() {
	return (
		<Page description="an archive of all of our digital releases" title="Archive" h1="Archive" h2="An archive of all of our digital releases">
			<p>sorted by month:</p>
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
			</ul>
		</Page>
	);
}
