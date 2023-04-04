let darkmode = false;
const svg = document.querySelector("#darkmode-svg");
const msg = document.querySelector("#darkmode-msg");
const blurry = document.querySelector("#blur");

svg.addEventListener("click", async () => {
    darkmode = !darkmode;
    handleBlur();
    await insult();
})

let loadingDotsInterval;

async function insult() {
    console.log(darkmode);
    if (darkmode) {
        clearInterval(loadingDotsInterval);
        const insult = await fetch('/api/darkmode').then(res => parseRes(res));
        if (!("error" in insult)) {
            msg.querySelector('p').innerText = insult.output;
        } else {
            msg.querySelector('p').innerHTML = insult.output;
        }
    } else {
        let i = 0;
        loadingDotsInterval = setInterval(() => {
            msg.querySelector('p').innerText = `loading light mode css${".".repeat(i)}`;
            if (++i > 3) i = 0; // hehe
        }, 200);
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

async function parseRes(res) {
    if (res.status === 200)
        return res.json();
    else
        return {
            error: res.status,
            output: `oh no! <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${res.status}" style="color:black!important;">this</a> happened!`
        }
}