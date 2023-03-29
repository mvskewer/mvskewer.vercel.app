import Head from 'next/head'
import Script from 'next/script'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const A = props => {
    return (
      <a href={props.href} className="anchor">{props.children}</a>
    )
  }

  return (
    <>
      <Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-0X6T2X9WNM"></Script>
        <Script src="./gtag.js"></Script>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
        <title>The Skewer</title>
      </Head>
      <div className={styles.loading} id="loading"> {/* what???? */}
        <p>loading...</p>
      </div>
      {/* show on load */}
      <Script src="./loading.js"></Script>

      <div className={styles["particles-js"]} id="particles-js"></div>
      {/* <Script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></Script>
      <Script>{
        let particlesScript = document.scripts[0];
          Array.from(document.scripts).forEach(e => {
            if (e.src === "https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js") {
          particlesScript = e;
            }
          });
          e.onload = async () => {
            const particles = await fetch('/particlesjs-config.json').then(res => res.json());
        particlesJS('particles-js', particles);
          }
        }</Script> */}

      <div className={styles.main}>
        <h1 className={styles.title}>The Skewer</h1>
        <h2 className={styles.title}>The offical website of The Skewer!</h2>
        <hr />

        <p><A href="articles">articles</A></p>
        <p><A href="staff">about our staff</A></p>
      </div>
    </>
  )
}
