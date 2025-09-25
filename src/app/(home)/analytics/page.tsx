"use client";

import { IAnalytic } from "@/types/axios/commonTypes";
import { Key, useEffect, useState } from "react";
import { getAnalytics } from "@/services/api/getAnalytics";
import axios, { AxiosResponse } from "axios";

import styles from "./analytics.module.scss";

export default function Analytics() {
	const [analytics, setAnalytics] = useState<IAnalytic[]>([]);
	const baseUrl = "http://localhost:3000";

	const getAllAnalytics = async () => {
		try {
			if (baseUrl) {
				const response: AxiosResponse<IAnalytic[]> = await getAnalytics(baseUrl);
				if ((response.status = axios.HttpStatusCode.Ok)) {
					setAnalytics(response.data);
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllAnalytics();
	}, []);
	return (
		<div>
			<h1 className={styles.header}>Analytics</h1>
			<table className={styles.tableUsers}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Rating</th>
						<th>Comment</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{analytics &&
						analytics.map((analytic, index: Key) => (
							<tr key={index}>
								<td>{analytic.id}</td>
								<td>{analytic.comment}</td>
								<td>{analytic.rating}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}
