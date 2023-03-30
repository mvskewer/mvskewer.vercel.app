import styles from '@/styles/articles/archive/File.module.css'

const File = props => {
  return (
    <li>
      <a
        href={props.filename}
        title={props.filename}
        className={[styles.file, styles.pdf].join(" ")}
      >
        {props.children}
      </a>
    </li>
  );
};

export default File;