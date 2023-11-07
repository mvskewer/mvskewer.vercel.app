import { useRouter } from "next/router";
import members from "./members";
import minimizeName from '@/functions/util/minimizeName';

export default function Member() {
	const router = useRouter();
	const { member } = router.query;

	const memberSlugString = member?.toString();

	const selectedMember = members.find(e => minimizeName(e.name) === minimizeName(memberSlugString));

	if (selectedMember) {
		return (
			<div>
				<h1>{selectedMember.name}</h1>
			</div>
		);
	} else return <><p>404</p><p>member <code>{JSON.stringify(member)}</code> not found.</p></>;
}