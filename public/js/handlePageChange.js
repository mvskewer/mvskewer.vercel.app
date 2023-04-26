function handlePageChange() {
	// big clunky regex time woo
	if (/(?:https?\:\/\/)?[\w\.-]+(?:\:\d{1,5})?\/$/.test(location.href)) {
		backbutton.style = "display:none;";
	} else {
		backbutton.style = "display:block;";
	}
	if (location.href != locationCache) {
		locationCache = location.href;

		darkmodeButton.removeEventListener("click", handleDarkmodeClick);
		backbutton.removeEventListener("click", handleBackbuttonClick);

		backbutton = document.querySelector("#backbutton-svg");
		darkmodeButton = document.querySelector("#darkmode-svg");
		msg = document.querySelector("#darkmode-msg");
		blurry = document.querySelector("#blur");

		darkmodeButton.addEventListener("click", handleDarkmodeClick);
		backbutton.addEventListener("click", handleBackbuttonClick);
	}
}

setInterval(handlePageChange, 200);
