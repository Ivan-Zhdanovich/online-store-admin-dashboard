import axios from "axios";
import { analyticsEndPoint } from "./apiConstants";

export const getAnalytics = async (baseUrl: string) => {
	return await axios(`${baseUrl}/${analyticsEndPoint}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
};
