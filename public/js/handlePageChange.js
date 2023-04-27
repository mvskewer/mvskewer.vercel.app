function handlePageChange() {
	if (location.href != locationCache) {
		locationCache = location.href;

		// darkmodeButton.removeEventListener("click", handleDarkmodeClick);
		// backbutton.removeEventListener("click", handleBackbuttonClick);

		// backbutton = document.querySelector("#backbutton-svg");
		darkmodeButton = document.querySelector("#darkmode-svg");
		msg = document.querySelector("#darkmode-msg");
		blurry = document.querySelector("#blur");

		darkmodeButton.addEventListener("click", handleDarkmodeClick);
		// backbutton.addEventListener("click", handleBackbuttonClick);
	}
}

setInterval(handlePageChange, 200);
