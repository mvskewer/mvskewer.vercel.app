import styles from '@/styles/articles/archive/File.module.css'
import Link from 'next/link';

const File = props => {
  return (
    <li className={[styles.file, styles.pdf].join(" ")}>
      <a
        href={props.path}
        title={props.name}
      >
        {props.children}
      </a>
    </li>
  );
};

export default File;