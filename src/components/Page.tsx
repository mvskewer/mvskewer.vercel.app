import styles from "@/styles/Page.module.css";
import Head from "next/head";
import Gtag from "@/components/Gtag";
import Particles from "@/components/Particles";
import Footer from "@/components/Footer";
import SkewerNavigationBar from "@/components/SkewerNavigationBar";

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
				<nav>
					<SkewerNavigationBar />
				</nav>

				<header>
					<h1 className={styles.title}>{props.h1}</h1>
					<h2 className={styles.title}>{props.h2}</h2>
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
