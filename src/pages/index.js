import Head from 'next/head'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0X6T2X9WNM"></Script>
        <Script src="./gtag.js"></Script>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
        <link rel="stylesheet" href="style.css" />
        <title>The Skewer</title>
      </Head>
      {/* <div class="loading">
        <p>loading...</p>
      </div> */}

      <main id={styles.main}>

      </main>
    </>
  )
}
