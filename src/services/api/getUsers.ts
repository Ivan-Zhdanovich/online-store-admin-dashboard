import axios from "axios";
import { usersEndPoint } from "./apiConstants";

export const getUsers = async (baseUrl: string) => {
	return await axios(`${baseUrl}/${usersEndPoint}/`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
};
