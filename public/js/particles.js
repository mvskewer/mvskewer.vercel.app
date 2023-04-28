setInterval(setParticles, 10);
const particlesDiv = document.querySelector("#particles-js");

async function setParticles() {
	if (document.readyState === "complete" && particlesDiv !== null) {
		await particlesJS("particles-js", await fetch("/particlesjs-config.json").then(res => res.json()));
		particlesDiv.id = "#particles-injected";
	}
}
