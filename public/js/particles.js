setInterval(setParticles, 250);

async function setParticles() {
	if (document.readyState === 'complete') {
		const particlesDiv = document.querySelector('#particles-js');
		if (particlesDiv !== null) {
			particlesJS('particles-js', await fetch('/particlesjs-config.json').then(res => res.json()));
			particlesDiv.id = '#particles-injected';
		}
	}
}
