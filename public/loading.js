document.addEventListener("readystatechange", event => {
    if (event.target.readyState === "complete") {
        setDone();
    }
});

if (document.readyState === "complete") setTimeout(setDone, 250); // in case everything loads before this???

// destroy hidden loading element because why not
const loadingDestroyerInterval = setInterval(() => {
    const loading = document.querySelector("#loading")
        || document.querySelector("#loading-done");

    if (loading.id.includes("done")
        && loading.style.opacity == 0) {
        loading.remove();
        clearInterval(loadingDestroyerInterval);
        console.log("destroyed loading screen thingy");
    }
}, 3000);

async function setDone() {
    console.log(document.querySelector('#loading'));
    document.querySelector("#loading").classList.add("Home_done__0YePk"); // troll emoji
    particlesJS('particles-js', await fetch('/particlesjs-config.json').then(res => res.json()));
    console.log("done loading!");
}
