import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/FooterIcon.module.css'

export default function FooterIcon(props: {
	href: string;
	title: string;
	imageSrc: string;
	alt: string;
}) {
	return (
		<div className={styles.footerIcon} title={props.title}>
			<Link href={props.href} target="_blank" rel="me">
				<Image src={`/icons/${props.imageSrc}`} alt={props.alt} width="32" height="32" />
			</Link>
		</div>
	);
}
