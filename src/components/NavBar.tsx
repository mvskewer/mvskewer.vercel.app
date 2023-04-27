import Script from 'next/script'
import Image from 'next/image'
import styles from '@/styles/NavBar.module.css'

export default function NavBar() {
	return (
		<div className={styles.navbar}>
			<Image
				src="/icons/backbutton.svg"
				className={styles.navbar}
				alt="back button"
				width="50"
				height="50"
				id="backbutton-svg"
			></Image>
			<Script src="/js/backbutton.js"></Script>
		</div>
	);
}