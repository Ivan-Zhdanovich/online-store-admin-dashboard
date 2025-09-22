import { useEffect, useState } from "react";
import { IUser } from "@/types/axios/commonTypes";
import styles from "./users.module.scss";
import { getUsers } from "@/services/api/getUsers";
import axios, { AxiosResponse } from "axios";

export default function Users() {
	const [users, setUsers] = useState<IUser[]>([]);
	const baseUrl = "http://localhost:8080/";

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
		</div>
	);
}
