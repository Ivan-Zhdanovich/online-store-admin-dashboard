"use client";

import { useEffect, useState } from "react";
import { IUser } from "@/types/axios/commonTypes";
import styles from "./users.module.scss";
import { getUsers } from "@/services/api/getUsers";
import axios, { AxiosResponse } from "axios";

export default function Users() {
	const [users, setUsers] = useState<IUser[]>([]);
	const baseUrl = "http://localhost:3000";

	const getAllUsers = async () => {
		try {
			if (baseUrl) {
				const response: AxiosResponse<IUser[]> = await getUsers(baseUrl);
				if ((response.status = axios.HttpStatusCode.Ok)) {
					setUsers(response.data);
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllUsers();
	}, []);
	return (
		<div>
			<h1 className={styles.header}>User Management</h1>
			<table className={styles.tableUsers}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Email</th>
						<th>Role</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{users &&
						users.map((user) => (
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.email}</td>
								<td>{user.role}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}
