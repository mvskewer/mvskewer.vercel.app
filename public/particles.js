(async () => {
	const particles = await fetch('./particlesjs-config.json').then(res => res.json());
	particlesJS('particles-js', particles);
})();