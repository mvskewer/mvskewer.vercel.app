let darkmode = false;
let svg = document.querySelector("#darkmode-svg");
let msg = document.querySelector("#darkmode-msg");
let blurry = document.querySelector("#blur");
let locationCache = location.href;

async function handleClick() {
	darkmode = !darkmode;
	handleBlur();
	await insult();
}

svg.addEventListener("click", handleClick);

setInterval(handlePageChange, 250);

let loadingDotsInterval;

async function insult() {
	console.log(darkmode);
	if (darkmode) {
		clearInterval(loadingDotsInterval);
		const insult = await fetch("/api/darkmode").then(res => parseRes(res));
		if (!("error" in insult)) {
			msg.querySelector("p").innerText = insult.output;
		} else {
			msg.querySelector("p").innerHTML = insult.output;
		}
	} else {
		let i = 0;
		loadingDotsInterval = setInterval(() => {
			msg.querySelector("p").innerText = `loading light mode css${".".repeat(i)}`;
			if (++i > 3) i = 0; // hehe
		}, 200);
	}
}

function handleBlur() {
	if (darkmode) {
		msg.classList.remove("Darkmode_hidden__Nojce");
		blurry.classList.remove("Darkmode_hidden__Nojce");
	} else {
		msg.classList.add("Darkmode_hidden__Nojce");
		blurry.classList.add("Darkmode_hidden__Nojce");
	}
}

async function parseRes(res) {
	if (res.status === 200) return res.json();
	else
		return {
			error: res.status,
			output: `oh no! <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${res.status}" style="color:black!important;">this</a> happened!`,
		};
}

function handlePageChange() {
	if (location.href != locationCache) {
		locationCache = location.href;
		svg.removeEventListener("click", handleClick);
		svg = document.querySelector("#darkmode-svg");
		msg = document.querySelector("#darkmode-msg");
		blurry = document.querySelector("#blur");

		svg.addEventListener("click", handleClick);
	}
}
