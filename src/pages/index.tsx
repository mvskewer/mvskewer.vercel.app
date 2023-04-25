import Page from '@/components/Page'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Particles from '@/components/Particles'
import Gtag from '@/components/Gtag'


export default function Home() {
  return (
    <Page
      description="The official website of The Skewer - access our article archives, staff bios, and more!"
      title="Home"
      h1="The Skewer"
      h2="The official website of The Skewer!"
    >

      <Gtag />
      <Particles />

      darkmode
      <div className={styles.darkmode}>
        <Image
          src="./darkmode.svg"
          className={styles.darkmode}
          alt="dark mode toggle"
          width="50"
          height="50"
          id="darkmode-svg"
        ></Image>
        <div className={[styles.blur, styles.center, styles.hidden].join(" ")} id="blur"></div>
        <div
          className={[styles.darkmode, styles.hidden, styles["darkmode-msg"], styles.center].join(" ")}
          id="darkmode-msg"
        >
          <p>loading light mode css...</p>
        </div>
        <Script src="./darkmode.js"></Script>
      </div>

      <p>to be filled out later. here are some links though:</p>
      <br />
      <p><Link href="issues">issues</Link></p>
      <p><Link href="staff">about our staff</Link></p>
    </Page>
  )
}
