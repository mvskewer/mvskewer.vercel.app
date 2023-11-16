import styles from '@/styles/issues/archive/File.module.css';
import Link from 'next/link';

const File = (props: { path: string; name: string; children: any }) => {
	return (
		<li className={`${styles.file} ${styles.pdf}`}>
			<Link href={`/issues/archive/${props.path}`} title={props.name} target="_blank">
				{props.children}
			</Link>
		</li>
	);
};

export default File;
