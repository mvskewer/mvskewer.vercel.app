export default function dotdot(path: string) {
	return path.replace(/[\w\-]+\/?$/, '');
}