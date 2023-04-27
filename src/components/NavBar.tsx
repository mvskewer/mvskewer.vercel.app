import Script from 'next/script'
import Image from 'next/image'
import styles from '@/styles/NavBar.module.css'

export default function NavBar() {
	function handleClick() {
		history.back();
	}
	return (
		<div onClick={handleClick}>
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