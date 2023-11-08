import { useRouter } from "next/router";
import { redirect } from "next/navigation";
import members from "./members";
import minimizeName from "@/functions/util/minimizeName";

export default function Member() {
	const router = useRouter();
	const { member } = router.query;

	if (member === undefined)
		return (
			<>
				<p>404</p>
				<p>
					member <code>{JSON.stringify(member)}</code> not found.
				</p>
			</>
		);

	const memberSlugString = member.toString();

	// redirect to minified name
	if (memberSlugString !== minimizeName(memberSlugString)) redirect(`/about/staff/${minimizeName(memberSlugString)}`);

	const selectedMember = members.find(e => minimizeName(e.name) === minimizeName(memberSlugString));
	return (
		<div>
			<h1>{selectedMember?.name}</h1>
		</div>
	);
}
