import Image from 'next/image'
import styles from '@/styles/NavBar.module.css'
import Link from 'next/link';

export default function NavBar() {
	function handleClick() {
		if (location.pathname === '/') alert('wait what');
		history.back();
	}
	
	return (
		<Link href="..">
			<div onClick={handleClick}>
				<Image
					src="/icons/backbutton.svg"
					className={styles.navbar}
					alt="back button"
					width="50"
					height="50"
					id="backbutton-svg"
				></Image>
			</div>
		</Link>
	);
}