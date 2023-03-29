let darkmode = false;
const svg = document.querySelector("#darkmode-svg");
const msg = document.querySelector("#darkmode-msg");
const blurry = document.querySelector("#blur");

svg.addEventListener("click", async () => {
    darkmode = !darkmode;
    handleBlur();
    await insult();
})

async function insult() {
    console.log(darkmode);
    if (darkmode) {
        const insult = await fetch('/api/darkmode').then(res => res.json());
        msg.querySelector('p').innerText = insult.output;
    } else {
        msg.querySelector('p').innerText = "loading light mode css...";
    }
}

function handleBlur() {
    if (darkmode) {
        msg.classList.remove("Home_hidden__vKntZ");
        blurry.classList.remove("Home_hidden__vKntZ");
    }
    else {
        msg.classList.add("Home_hidden__vKntZ");
        blurry.classList.add("Home_hidden__vKntZ");
    }
}
