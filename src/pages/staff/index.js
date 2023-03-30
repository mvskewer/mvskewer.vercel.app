import Head from 'next/head'
import Script from 'next/script'
import Bio from './Bio'
import styles from '@/styles/staff/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="staff info page idk ***fill this out later***" />
        <title>Articles | The Skewer</title>
      </Head>

      {/* loading + particles */}
      <div className={[styles.loading, styles.center].join(" ")} id="loading">
        <p>loading...</p>
      </div>
      <Script src="/staff/loading.js"></Script> {/* THIS IS A TEMPORARY WORKAROUND */}
      <div className={styles["particles-js"]} id="particles-js"></div>
      <Script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></Script>
      {/* end section!!!!!!!!!*/}

      <div className={styles.main}>
        <header>
          <h1 className={styles.title}>Staff Page</h1>
          <h2 className={styles.title}>about our staff</h2>
          <hr />
        </header>
        <div className={styles.page}>
          <Bio name="Yongle" img="yongle">
            Used to be the Emperor of the Ming Dynasty and is now the head of the Skewer.
          </Bio>
          <Bio name="Torbjörn Roger Halsten Herman Adolfsson" img="torbjörn-roger-halsten-herman-adolfsson">
            Used to be the Emperor of the Ming Dynasty and is now the head of the Skewer.
          </Bio>
          <Bio name="Amio Koivunen" img="amio-koivunen">
            Used to be the Emperor of the Ming Dynasty and is now the head of the Skewer.
          </Bio>
          <Bio name="C. Real" img="c-real">
            Used to be the Emperor of the Ming Dynasty and is now the head of the Skewer.
          </Bio>
          <Bio name="Dr. Silly" img="dr-silly">
            Used to be the Emperor of the Ming Dynasty and is now the head of the Skewer.
          </Bio>
          <Bio name="Fullpetal Alchemist" img="fullpetal-alchemist">
            Used to be the Emperor of the Ming Dynasty and is now the head of the Skewer.
          </Bio>
          <Bio name="J. Balvin" img="j-balvin">
            among us
          </Bio>
        </div>
      </div>
    </>
  );
}