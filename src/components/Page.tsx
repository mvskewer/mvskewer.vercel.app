import styles from '@/styles/Page.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Script from 'next/script'
import Gtag from '@/components/Gtag'
import Particles from '@/components/Particles'

export default function Page(props: any) {
	return (
		<>
		<Head>
		  <meta charSet="UTF-8" />
		  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
		  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		  <meta name="description" content={props.description} />
  
		  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
		  <title>{props.title} | The Skewer</title>
		</Head>
		
		<Gtag />
		<Particles />
  
		<div className={styles.main}>
		  <header>
			<h1 className={styles.title}>{props.h1}</h1>
			<h2 className={styles.title}>{props.h2}</h2>
			<hr />
		  </header>
  
		  <div className={styles.page}>
			{props.children}
		  </div>
		</div>
	  </>
	);
}