import styles from "@/styles/Page.module.css";
import Head from "next/head";
import Script from 'next/script'
import Gtag from "@/components/Gtag";
import Particles from "@/components/Particles";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Darkmode from "@/components/Darkmode";

export default function Page(props: {
	description: string;
	title: string;
	h1?: string;
	h2?: string;
	h3?: string;
	h4?: string;
	h5?: string;
	h6?: string;
	children: any;
}) {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content={props.description} />

				<link rel="icon" type="image/x-icon" href="/favicon.ico" />
				<title>{`${props.title} | The Skewer`}</title>
			</Head>

			<Darkmode />
			<Gtag />
			<Particles />
			<Script src="/js/handlePageChange.js" />

			<div className={styles.main}>
				<nav>
					<NavBar />
				</nav>

				<header>
					{ props.h1 ? <h1 className={styles.title}>{props.h1}</h1> : <></> }
					{ props.h2 ? <h2 className={styles.title}>{props.h2}</h2> : <></> }
					{ props.h3 ? <h3 className={styles.title}>{props.h3}</h3> : <></> }
					{ props.h4 ? <h4 className={styles.title}>{props.h4}</h4> : <></> }
					{ props.h5 ? <h5 className={styles.title}>{props.h5}</h5> : <></> }
					{ props.h6 ? <h6 className={styles.title}>{props.h6}</h6> : <></> }
					<hr />
				</header>

				<main>
					<div className={styles.page}>{props.children}</div>
				</main>

				<footer>
					<Footer />
				</footer>
			</div>
		</>
	);
}
