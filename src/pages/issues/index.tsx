import Head from 'next/head'
import styles from '@/styles/issues/Home.module.css'
import Link from 'next/link'
import Particles from '@/components/Particles'
import Gtag from '@/components/Gtag'

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Issues | The Skewer</title>
      </Head>

      <Gtag />
      <Particles />

      <main className={styles.body}>
        <div className={styles.main}>
          <h1>issues</h1>
          <p></p>
          <Link href="/issues/archive">archive</Link>
        </div>
      </main>
    </>
  )
}