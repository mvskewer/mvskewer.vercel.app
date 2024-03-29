import Page from '@/components/Page';
import Link from 'next/link';

export default function ReaderRequest() {
	return (
		<Page description="request an article" title="Reader Request" h1="Reader Request Form" h2="Request an article here!">
			<p>Submit an Article Idea For The Skewer!</p>
			<p>Fill out the form below, and if we like it, we&apos;ll write about it!</p>
			<Link href="https://forms.gle/tNNtXoKQWb9fXpcBA">https://forms.gle/tNNtXoKQWb9fXpcBA</Link>
		</Page>
	);
}
