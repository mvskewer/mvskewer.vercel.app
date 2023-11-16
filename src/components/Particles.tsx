import Script from 'next/script';
import styles from '@/styles/Particles.module.css';

const Particles = () => {
	return (
		<>
			<Script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></Script>
			<div className={styles['particles-js']} id="particles-js"></div>
			<Script src="/js/particles.js"></Script>
		</>
	);
};

export default Particles;
