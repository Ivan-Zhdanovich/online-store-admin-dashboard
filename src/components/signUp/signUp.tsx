import { Controller, useForm } from "react-hook-form";
import styles from "./signUp.module.scss";
import { InputTypeList } from "@/helpers/input";
import { ISignUpForm } from "@/types/axios/authTypes";

export default function SignUpForm() {
	const {
		formState: {},
		control,
		handleSubmit,
	} = useForm<ISignUpForm>({
		defaultValues: {
			email: "",
			password: "",
			role: "",
		},
	});
	return (
		<form className={styles.signUpFormWrap} onSubmit={handleSubmit(() => undefined)}>
			<div className={styles.signUpFormContainer}>
				<div className={styles.inputWrap}>
					<label>Email</label>
					<Controller
						name="email"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<input className={styles.input} id="email" type={InputTypeList.Text} placeholder="Email" {...field} />
						)}
					/>
				</div>
				<div className={styles.inputWrap}>
					<label>Password</label>
					<Controller
						name="password"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<input
								className={styles.input}
								id="password"
								type={InputTypeList.Password}
								placeholder="Password"
								{...field}
							/>
						)}
					/>
				</div>
				<div className={styles.inputWrap}>
					<label>Role</label>
					<Controller
						name="role"
						control={control}
						defaultValue=""
						render={({ field }) => (
							<input className={styles.input} id="role" type={InputTypeList.Text} placeholder="Role" {...field} />
						)}
					/>
				</div>
				<button className={styles.signUpButton}>Зарегистрировать</button>
			</div>
		</form>
	);
}
