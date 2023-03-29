document.addEventListener("readystatechange", async event => {
    if (event.target.readyState === "complete") {
        setDone();
    }
});

if (document.readyState === "complete") setDone();

// destroy hidden loading element because why not
const loadingDestroyerInterval = setInterval(() => {
    const loading = document.querySelector(".loading");

    if (loading.classList.contains("done")
        && loading.style.opacity == 0) {
        loading.remove();
        clearInterval(loadingDestroyerInterval);
    }
}, 1000);

function setDone() {
    console.log(document.querySelector('.loading'));
    document.querySelector(".loading").classList.add("done");
    console.log("done loading!");
}
