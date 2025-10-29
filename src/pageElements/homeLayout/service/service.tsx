import Image from "next/image";
import SignInForm from "@/components/signIn/signIn";
import safeDial from "../../../assets/pages/main/safe_dial.png";
import groceryCart from "../../../assets/pages/main/grocery_cart.png";

import styles from "./service.module.scss";

export default function Service() {
	return (
		<div className={styles.serviceContainer}>
			<h1>Administration.</h1>
			<p>All power corrupts, and absolute power corrupts absolutely.</p>
			<div className={styles.imagesFormContainer}>
				<Image
					className={styles.mainPictureSafe}
					src={safeDial}
					priority={true}
					alt="The main picture with safe dial"
				/>
				<SignInForm />
				<Image
					className={styles.mainPictureCart}
					src={groceryCart}
					priority={true}
					alt="The main picture with grocery cart"
				/>
			</div>
		</div>
	);
}
