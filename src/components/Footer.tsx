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
				title="we're on instagram babyyy WOOOOOOO (insert moist critical pop off)"
				alt="instagram icon"
			/>
			<FooterIcon
				href="https://twitter.com/mvskewer"
				imageSrc="birdsite.svg"
				title="we're on the bird site for some reason"
				alt="twitter icon"
			/>
			<FooterIcon
				href="https://mas.to/@mvskewer"
				imageSrc="mastodon.svg"
				title="our actual social media account"
				alt="mastodon icon"
			/>
		</div>
	);
}