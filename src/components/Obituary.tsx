import members from '@/config/members';
import minimizeName from '@/functions/util/minimizeName';

export default function Obituary(props: { name: string }) {
	return <p>{members.find(member => minimizeName(member.name) === minimizeName(props.name))?.obituary}</p>;
}
