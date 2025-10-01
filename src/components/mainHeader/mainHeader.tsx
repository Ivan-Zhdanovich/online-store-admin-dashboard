import { MainPath } from "@/services/router/rotes";
import Link from "next/link";
import styles from "./mainHeader.module.scss";

export default function MainHeader() {
	const renderNavigationElements = () => {
		return (
			<>
				<Link className={styles.navigationLink} href={MainPath.Users}>
					User management
				</Link>
				<Link className={styles.navigationLink} href={MainPath.Products}>
					<p className={styles.navigationLink__text}>Product management</p>
				</Link>
				<Link className={styles.navigationLink} href={MainPath.Orders}>
					<p className={styles.navigationLink__text}>Order Management</p>
				</Link>
				<Link className={styles.navigationLink} href={MainPath.SalesReports}>
					<p className={styles.navigationLink__text}>Sales Management</p>
				</Link>
				<Link className={styles.navigationLink} href={MainPath.Analytics}>
					<p className={styles.navigationLink__text}>Analytics</p>
				</Link>
			</>
		);
	};
	return (
		<header className={styles.headerWrap}>
			<div className={styles.headerContainer}>
				<nav className={styles.navigationWrap}>{renderNavigationElements()}</nav>
			</div>
		</header>
	);
}
