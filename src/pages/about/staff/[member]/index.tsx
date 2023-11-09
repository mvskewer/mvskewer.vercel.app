import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import members from "@/config/members";
import minimizeName from "@/functions/util/minimizeName";
import Link from "next/link"

import Page from "@/components/Page";

export default function Member() {
	const router = useRouter();
	const { member } = router.query;

	if (member === undefined) {
		return (
			<Page
				description="member data loading..."
				title="loading..."
				h1="‮"
				h2="‮"
			>
				<p>‮</p>
			</Page>
		);
	}

	const memberSlugString = member.toString();
	const selectedMember = members.find(e => minimizeName(e.name) === minimizeName(memberSlugString));

	if (selectedMember === undefined)
		return (
			<Page
				description="This could be you!"
				title="nobody"
			>
				<p>404</p>
				<p>
					member <code>{memberSlugString}</code> not found.
				</p>
				<p>
					this could be you though! you should apply to <Link href="/apply">Join Our Team</Link>!
				</p>
			</Page>
		);

	// redirect to minified name
	// if (memberSlugString !== minimizeName(memberSlugString)) redirect(`/about/staff/${minimizeName(memberSlugString)}`);

	return (
		<Page
			description={`${selectedMember.name}'s page`}
			title={selectedMember.name}
			h1={selectedMember.name}
			h2={selectedMember.shortBio}
		>
			<p>{selectedMember.longBio}</p>
		</Page>
	);
}
