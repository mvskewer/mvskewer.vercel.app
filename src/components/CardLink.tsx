import Link from "next/link";

export default function CardLink(props: any) {
	return <p>
		<Link href={props.href}>{props.children}</Link>
	</p>
}