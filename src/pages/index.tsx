import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Particles from '@/components/Particles'
import Gtag from '@/components/Gtag'


export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="The official website of The Skewer - access our article archives, staff bios, and more!" />

        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
        <title>Home | The Skewer</title>
      </Head>
      
      <Gtag />
      <Particles />

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

      <div className={styles.main}>
        <header>
          <h1 className={styles.title}>The Skewer</h1>
          <h2 className={styles.title}>The offical website of The Skewer!</h2>
          <hr />
        </header>

        <div className={styles.page}>
          <p>to be filled out later. here are some links though:</p>
          <br />
          <p><Link href="issues">issues</Link></p>
          <p><Link href="staff">about our staff</Link></p>
        </div>
      </div>
    </>
  )
}
