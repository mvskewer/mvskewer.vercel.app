import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // initialize...

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" type="image/x-icon" href="./favicon.ico" />
        <link rel="stylesheet" href="style.css" />
        <title>The Skewer</title>
      </Head>
      {/* <div class="loading">
        <p>loading...</p>
      </div> */}

      <Particles id="tsparticles" url="/particles.json" init={particlesInit} loaded={particlesLoaded} />

      <main id={styles.main}>

      </main>
    </>
  )
}
