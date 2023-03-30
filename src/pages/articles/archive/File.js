import styles from '@/styles/articles/archive/File.module.css'
import Link from 'next/link';

const File = props => {
  return (
    <li>
      <Link
        href={props.filename}
        title={props.filename}
        className={[styles.file, styles.pdf].join(" ")}
      >
        {props.children}
      </Link>
    </li>
  );
};

export default File;