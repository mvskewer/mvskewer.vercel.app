import Script from "next/script";

const Gtag = () => {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-K3K1HE0L5N"></Script>
            <Script src="/gtag.js"></Script>
        </>
    );
}

export default Gtag;