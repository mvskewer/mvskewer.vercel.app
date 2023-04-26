import styles from '@/styles/Footer.module.css'
import FooterIcon from '@/components/FooterIcon'

export default function Footer() {
	return (
		<div className={styles.footer}>
			<FooterIcon 
				href="https://github.com/moundsviewskewer/mvskewer.vercel.app"
				imageSrc="/github.svg"
				title="this website is open source - check us out on github!"
				alt="github icon"
			/>
			<FooterIcon
				href="https://tinyletter.com/mvskewer"
				imageSrc="/mail.svg"
				title="sign up for our newsletter here!"
				alt="mail icon"
			/>
		</div>
	);
}