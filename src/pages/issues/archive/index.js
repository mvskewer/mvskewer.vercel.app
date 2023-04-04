import Head from 'next/head'
import File from '@/components/File'
import Particles from '@/components/Particles'
import styles from '@/styles/issues/archive/Home.module.css'
import Gtag from '@/components/Gtag'

export default function Home() {
  return (
    <>
      <Head>
        <meta />
      </Head>

      <Gtag />
      <Particles />

      <main className={styles.main}>
        <p>hi</p>
        <ul>
          <File path="2023/February.pdf" name="February">february</File>
          <File path="2023/March.pdf" name="March">march</File>
        </ul>
      </main>
    </>
  )
}