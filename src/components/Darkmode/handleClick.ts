import styles from '@/styles/Darkmode.module.css'

let darkmode = false;

export default async function handleClick() {
	let loadingDotsInterval: number | NodeJS.Timer;
	darkmode = !darkmode;
	let msg: any = document.querySelector('#darkmode-msg');
	let blurry: any = document.querySelector('#blur');
	
	
	if (darkmode) {
		msg?.classList.remove(styles.hidden);
		blurry?.classList.remove(styles.hidden);
		initLoadingDots();
		await insult();
	} else {
		msg.classList.add(styles.hidden);
		blurry.classList.add(styles.hidden);
		msg.querySelector('p').innerText = 'aHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQ==';
	}

	function initLoadingDots() {
		let i = 0;
		loadingDotsInterval = setInterval(() => {
			msg.querySelector('p').innerText = `loading light mode css${'.'.repeat(i)}`;
			if (++i > 3) i = 0;
		}, 150);
	}

	async function parseRes(res: any) {
		if (res.status === 200) return res.json();
		else return {
			error: res.status,
			output: `oh no! <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${res.status}" style="color:black!important;">this</a> happened!<br><br>check back in a few minutes if you <i>still</i> need light mode that badly.<br>if this issue persists, please file an issue <a href="https://github.com/moundsviewskewer/mvskewer.vercel.app/issues/new" target="_blank" style="color:black!important;">here</a>`
		}
	}

	async function insult() {
		const insult = await parseRes(await fetch('/api/darkmode')); // slightly less disgusting than chained .then()
		clearInterval(loadingDotsInterval);
		if (!("error" in insult)) {
			msg.querySelector('p').innerText = insult.output;
		} else {
			msg.querySelector('p').innerHTML = insult.output;
		}
	}
}