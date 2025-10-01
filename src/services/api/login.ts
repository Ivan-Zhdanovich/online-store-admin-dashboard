import axios from "axios";
import { signInEndPoint } from "./apiConstants";
import { ISignInForm } from "@/types/axios/authTypes";

export const loginInToApp = async (baseUrl: string, data: ISignInForm) => {
	return await axios(`${baseUrl}/${signInEndPoint}`, {
		method: "Post",
		data: data,
		headers: {
			"Content-Type": "application/json",
		},
	});
};
