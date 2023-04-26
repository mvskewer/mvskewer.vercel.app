import styles from '@/styles/Darkmode.module.css'
import Image from 'next/image'
import Script from 'next/script'

export default function Darkmode() {
	return (
		<div className={styles.darkmode}>
			<Image
				src="/icons/darkmode.svg"
				className={styles.darkmode}
				alt="dark mode toggle"
				width="50"
				height="50"
				id="darkmode-svg"
			></Image>
			<div className={`${styles.blur} ${styles.center} ${styles.hidden}`} id="blur"></div>
			<div className={`${styles.darkmode} ${styles.hidden} ${styles["darkmode-msg"]} ${styles.center}`} id="darkmode-msg">
				<p>loading light mode css...</p>
			</div>
			<Script src="/js/darkmode.js"></Script>
		</div>
	);
}
