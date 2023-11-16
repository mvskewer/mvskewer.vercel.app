import minimizeName from '@/functions/util/minimizeName';
import styles from '@/styles/staff/StaffCard.module.css';
// import homeStyles from '@/styles/staff/Home.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function StaffCard(props: { img: string; name: string; children: JSX.Element }) {
	return (
		<Link href={`/about/staff/${minimizeName(props.name)}`} className="no-grow">
			<div className={styles.card}>
				<Image src={`/staff/img/${props.img}.webp`} width="420" height="420" alt={`a picture of or for ${props.name}`} className={styles.img}></Image>
				<p>
					<b>{props.name}</b>
				</p>
				{props.children}
			</div>
		</Link>
	);
}
