import minimizeName from '@/functions/util/minimizeName';
import styles from '@/styles/staff/StaffCard.module.css';
// import homeStyles from '@/styles/staff/Home.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function StaffCard(props: { img: string; name: string; children: JSX.Element }) {
	return (
		<div className={styles.card}>
			<Link href={`/about/staff/${minimizeName(props.name)}`}>
				<Image src={`/staff/img/${props.img}.webp`} width="69" height="69" alt={`a picture of or for ${props.name}`} className={styles.img}></Image>
				<p>
					<b>{props.name}</b>
				</p>
				{props.children}
			</Link>
		</div>
	);
}
