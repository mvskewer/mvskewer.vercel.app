import { useRouter } from 'next/router';
import { redirect } from 'next/navigation';
import members from '@/config/members';
import minimizeName from '@/functions/util/minimizeName';
import Link from 'next/link';
import Image from 'next/image';

import Page from '@/components/Page';
import Obituary from '@/components/Obituary';
import HTTPCat from '@/components/HTTPCat';
import httpStatusCodes from '@/config/httpStatusCodes';

export default function Member() {
	const router = useRouter();
	const { member } = router.query;

	if (member === undefined) {
		return (
			<Page description="member data loading..." title="loading..." h1="‮" h2="‮">
				<p>‮</p>
			</Page>
		);
	}

	const memberSlugString = member.toString();
	const selectedMember = members.find(e => minimizeName(e.name) === minimizeName(memberSlugString));

	if (selectedMember === undefined) {
		const code = Math.floor(Math.random() * 20) === 4 ? 451 : 404;

		return (
			<Page description="This could be you!" title="nobody" h1="404" h2={`member "${memberSlugString}" not found.`}>
				<HTTPCat code={code} width="500" height="400" />
				<p>
					we couldn&apos;t find a member named <code>{memberSlugString}</code>.
				</p>
				<p>
					this could be you though! you should apply to <Link href="/apply">Join Our Team</Link>!
				</p>
			</Page>
		);
	}

	// redirect to minified name
	if (memberSlugString !== minimizeName(memberSlugString)) {
		router.replace(`/about/staff/${minimizeName(memberSlugString)}`);
		return null;
	}

	return (
		<Page description={`${selectedMember.name}'s page`} title={selectedMember.name} h1={selectedMember.name} h2={selectedMember.shortBio} faviconPath={"/staff/img/" + minimizeName(selectedMember.name) + ".webp"}>
			{selectedMember.deceased && (
				<>
					<Obituary name={minimizeName(selectedMember.name)} />
					<br />
					<hr />
					<br />
					<strong>original bio:</strong>
					<br />
					<br />
				</>
			)}
			<p>{selectedMember.longBio}</p>
		</Page>
	);
}
