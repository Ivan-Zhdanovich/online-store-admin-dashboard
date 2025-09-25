import axios from "axios";
import { ordersEndPoint } from "./apiConstants";

export const getOrders = async (baseUrl: string) => {
	return await axios(`${baseUrl}/${ordersEndPoint}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
};
