import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

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
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0X6T2X9WNM"></Script>
      <Script src="/gtag.js"></Script>

      <div className={[styles.loading, styles.center].join(" ")} id="loading"> {/* what???? */}
        <p>loading...</p>
      </div>
      {/* show on load */}
      <Script src="/loading.js"></Script>

      <div className={styles["particles-js"]} id="particles-js"></div>
      <Script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></Script>

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
        <h1 className={styles.title}>The Skewer</h1>
        <h2 className={styles.title}>The offical website of The Skewer!</h2>
        <hr />

        <div className={styles.page}>
          <p><a href="articles">articles</a></p>
          <p><a href="staff">about our staff</a></p>
        </div>
      </div>
    </>
  )
}
