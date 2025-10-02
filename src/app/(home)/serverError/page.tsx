import styles from "./serverError.module.scss";

export default function ServerError() {
	return (
		<div>
			<h1 className={styles.header}>Server Error</h1>
		</div>
	);
}
