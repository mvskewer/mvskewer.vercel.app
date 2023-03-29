document.addEventListener("readystatechange", async event => {
    if (event.target.readyState === "complete") {
        setDone();
    }
});

if (document.readyState === "complete") setDone(); // in case everything loads before this???

// destroy hidden loading element because why not
const loadingDestroyerInterval = setInterval(() => {
    const loading = document.querySelector("#loading")
        || document.querySelector("#loading-done");

    if (loading.id.includes("done")
        && loading.style.opacity == 0) {
        loading.remove();
        clearInterval(loadingDestroyerInterval);
    }
}, 3000);

function setDone() {
    console.log(document.querySelector('#loading'));
    document.querySelector("#loading").classList.add("done");
    console.log("done loading!");
}
