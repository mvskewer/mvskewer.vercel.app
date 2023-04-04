document.addEventListener("readystatechange", event => {
    if (event.target.readyState === "complete") {
        setParticles();
    }
});

if (document.readyState === "complete") setInterval(setParticles, 250); // in case everything loads before this???

async function setParticles() {
    const particlesDiv = document.querySelector("#particles-js");
    if (particlesDiv !== null) {
        particlesJS('particles-js', await fetch('/particlesjs-config.json').then(res => res.json()));
        particlesDiv.id = "#particles-injected";
    }
}
