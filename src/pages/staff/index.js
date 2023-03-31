import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
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
            <p>Used to be the Emperor of the Ming Dynasty and is now the head of The Skewer.</p>
          </Bio>
          <Bio name="Torbjörn Roger Halsten Herman Adolfsson" img="torbjörn-roger-halsten-herman-adolfsson">
            <p>Co-Founder of the Skewer and Executive Editor. Spends more time working on the webstite than actually working on his articles.</p>
          </Bio>
          <Bio name="Amio Koivunen" img="amio-koivunen">
            <p>Juanma&apos;s #1 fan</p>
          </Bio>
          <Bio name="C. Near" img="c-near">
            <p>A former viewer writer, now a senior and not ready for life.</p>
          </Bio>
          <Bio name="Dr. Silly" img="dr-silly">
            <p>&quot;I am the fight reporter. I report on fights and sometimes rate them on the violence and the amount of people involved.&quot;</p>
          </Bio>
          <Bio name="Fullpetal Alchemist" img="fullpetal-alchemist">
            <p>&quot;Who am I, you ask?</p>
            <p>A poet, a journalist,</p>
            <p>and sometimes funny.&quot;</p>
            <br />
            <p>It&apos;s our honor to have Fullpetal Alchemist, an esteemed poet and journalist, on our staff. They&apos;re known best for poetry published on their extremely popular Wattpad profile, <Link href="https://www.wattpad.com/user/BlessedBlossomBoi">BlessedBlossomBoi</Link>, and for their deep, insightful analysis of high school issues. They also take a passing interest in chess, school-scale news, and arguing about frivolous things in the debate section.</p>
            <br />
            <p>You may challenge them to a game of chess here: <Link href="https://lichess.org/@/Stupidity">lichess.org/@/Stupdity</Link></p>
          </Bio>
          <Bio name="J. Balvin" img="j-balvin">
            17, student, saxophone player, magic the gathering officianado, one piece addict.
          </Bio>
        </div>
      </div>
    </>
  );
}