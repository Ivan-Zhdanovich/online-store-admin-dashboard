import { Key, useEffect, useState } from "react";
import styles from "./orders.module.scss";
import { IOrder } from "@/types/axios/commonTypes";
import axios, { AxiosResponse } from "axios";
import { getOrders } from "@/services/api/getOrders";

export default function Orders() {
	const [orders, setOrders] = useState<IOrder[]>([]);
	const baseUrl = "http://localhost:3000";

	const getAllOrders = async () => {
		try {
			if (baseUrl) {
				const response: AxiosResponse<IOrder[]> = await getOrders(baseUrl);
				if ((response.status = axios.HttpStatusCode.Ok)) {
					setOrders(response.data);
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllOrders();
	}, []);
	return (
		<div>
			<h1 className={styles.header}>Order Management</h1>
			<table className={styles.tableUsers}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Status</th>
						<th>Total</th>
						<th>Created at</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{orders &&
						orders.map((order, index: Key) => (
							<tr key={index}>
								<td>{order.id}</td>
								<td>{order.status}</td>
								<td>{order.total}</td>
								<td>{String(order.createdAt)}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}
