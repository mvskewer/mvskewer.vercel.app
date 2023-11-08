export default function minimizeName(name: string): string {
	return decodeURIComponent(name)
		.toLowerCase()
		.replace(/[\s+]/g, '-')
		.replace(/[^a-z0-9\-\öø]/g, '')
}