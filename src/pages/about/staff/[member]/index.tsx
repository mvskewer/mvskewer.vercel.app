import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import members from "./members";
import minimizeName from "@/functions/util/minimizeName";

import Page from "@/components/Page";

export default function Member() {
	const router = useRouter();
	const { member } = router.query;

	if (member === undefined) {
		return (
			<Page>
				<p>loading...</p>
			</Page>
		);
	}

	const memberSlugString = member.toString();
	const selectedMember = members.find(e => minimizeName(e.name) === minimizeName(memberSlugString));

	if (selectedMember === undefined)
		return (
			<Page>
				<p>404</p>
				<p>
					member <code>{memberSlugString}</code> not found.
				</p>
			</Page>
		);

	// redirect to minified name
	// if (memberSlugString !== minimizeName(memberSlugString)) redirect(`/about/staff/${minimizeName(memberSlugString)}`);

	return (
		<Page>
			<h1>{selectedMember?.name}</h1>
		</Page>
	);
}
