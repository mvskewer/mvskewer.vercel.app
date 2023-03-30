import Head from 'next/head'
import Script from 'next/script'
import styles from '@/styles/articles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Articles | The Skewer</title>
      </Head>

      {/* loading + particles */}
      <div className={[styles.loading, styles.center].join(" ")} id="loading">
        <p>loading...</p>
      </div>
      <Script src="/articles/loading.js"></Script>
      <div className={styles["particles-js"]} id="particles-js"></div>
      <Script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></Script>
      {/* end section!!!!!!!!!*/}

      <main className={styles.body}>
        <div className={styles.main}>
          <p>articles!!!!!</p>
          <Link href="/articles/archive">archiveaaaa</Link>
        </div>
      </main>
    </>
  )
}