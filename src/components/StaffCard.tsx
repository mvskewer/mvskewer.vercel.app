import styles from "@/styles/staff/StaffCard.module.css";
// import homeStyles from '@/styles/staff/Home.module.css'
import Image from "next/image";

export default function Bio(props: { img: string; name: string; children: any }) {
	return (
		<div className={styles.cardContainer}>
			<Image src={`/staff/img/${props.img}.webp`} width="69" height="69" alt={`a picture of or for ${props.name}`} className={styles.img}></Image>
			<p>
				<b>{props.name}</b>
			</p>
			{props.children}
		</div>
	);
}
