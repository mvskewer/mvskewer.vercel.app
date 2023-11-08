import styles from '@/styles/Footer.module.css'
import FooterIcon from '@/components/FooterIcon'

export default function Footer() {
	return (
		<div className={styles.footer}>
			<FooterIcon 
				href="https://github.com/moundsviewskewer/mvskewer.vercel.app"
				imageSrc="github.svg"
				title="this website is open source - check us out on github!"
				alt="github icon"
			/>
			<FooterIcon
				href="https://tinyletter.com/mvskewer"
				imageSrc="mail.svg"
				title="sign up for our newsletter here!"
				alt="mail icon"
			/>
			<FooterIcon
				href="https://www.instagram.com/mvskewer/"
				imageSrc="instagram.svg"
				title="our instagram account"
				alt="instagram icon"
			/>
			<FooterIcon
				href="https://x.com/mvskewer"
				imageSrc="x.svg"
				title="our twitter account"
				alt="twitter icon"
			/>
			<FooterIcon
				href="https://mas.to/@mvskewer"
				imageSrc="mastodon.svg"
				title="our mastodon account"
				alt="mastodon icon"
			/>
		</div>
	);
}