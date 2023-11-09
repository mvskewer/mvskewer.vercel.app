import Image from 'next/image'
import styles from '@/styles/NavBar.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';

import dotdot from "@/functions/util/dotdot";

export default function NavBar() {
	const router = useRouter();
	const currentUrl = router.asPath;

	function handleClick() {
		if (currentUrl === '/') alert('no?');
		// setTimeout(history.back, 1000);
	}
	
	console.log(currentUrl);

	return (
		<div onClick={handleClick}>
			<Link href={dotdot(currentUrl)}>
				<Image
					src="/icons/backbutton.svg"
					className={styles.navbar}
					alt="back button"
					width="50"
					height="50"
					id="backbutton-svg"
				></Image>
			</Link>
		</div>
	);
}