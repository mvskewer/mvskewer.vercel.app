import styles from '@/styles/Darkmode.module.css'
import Image from 'next/image'
import Script from 'next/script'
import handleClick from './Darkmode/handleClick'

export default function Darkmode() {
	return (
		<div>
			<Image onClick={handleClick}
				src="/icons/darkmode.svg"
				className={styles.darkmode}
				alt="dark mode toggle"
				width="50"
				height="50"
				id="darkmode-svg"
			></Image>
			<div className={`${styles.blur} ${styles.center} ${styles.hidden}`} id="blur"></div>
			<div className={`${styles.darkmode} ${styles.hidden} ${styles["darkmode-msg"]} ${styles.center}`} id="darkmode-msg">
				<p>aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ==</p>
			</div>
		</div>
	);
}
