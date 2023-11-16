import Image from 'next/image';

export default function HTTPCat(props: { code: number | string; width: number | string; height: number | string }) {
	return <Image src={`https://http.cat/${props.code}.jpg`} width={+props.width} height={+props.height} alt={`http cat ${props.code}`}></Image>;
}
