import styles from "@/styles/File.module.css"

const File = (props: {path: string}) => {
	return (
		<div className={styles.container}>
			<iframe src={props.path} className={styles.file} />
		</div>
	)
}

export default File;