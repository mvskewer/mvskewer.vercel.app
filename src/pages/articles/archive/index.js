import Head from 'next/head'
import File from './File'
import styles from '@/styles/articles/archive/Home.module.css'

// `npx serve .` somewhere???



export default function Home() {
  return (
    <>
      <Head>
        <meta />
      </Head>
      <main className={styles.main}>
        <p>hi</p>
        <ul>
          <File filename="February.pdf">hehasdheaef</File>
        </ul>
      </main>
    </>
  )
}