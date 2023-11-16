export default function dotdot(path: string) {
    const decodedPath = decodeURIComponent(path);
    const newPath = decodedPath.replace(/[\w\-\öø]+\/?$/, '');
    return newPath.split('/').map(segment => encodeURIComponent(segment)).join('/');
}