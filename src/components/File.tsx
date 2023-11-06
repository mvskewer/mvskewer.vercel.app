import styles from "@/styles/File.module.css"

const File = (props: {path: string}) => {
	return (
		<iframe src={props.path} className={styles.file} />
	)
}

export default File;