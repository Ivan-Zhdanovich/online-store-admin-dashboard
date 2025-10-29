export interface ISignInForm {
	email: string;
	password: string;
}

export interface ISignUpForm extends ISignInForm {
	role: string;
}
