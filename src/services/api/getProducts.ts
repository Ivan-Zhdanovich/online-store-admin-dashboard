import axios from "axios";
import { productsEndPoint } from "./apiConstants";

export const getProducts = async (baseUrl: string) => {
	return await axios(`${baseUrl}/${productsEndPoint}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
};
