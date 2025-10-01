import SignInForm from "@/components/signIn/signIn";
import Service from "@/pageElements/homeLayout/service/service";

export default function MainPage() {
	return (
		<>
			<main>
				<Service />
				<SignInForm />
			</main>
		</>
	);
}
