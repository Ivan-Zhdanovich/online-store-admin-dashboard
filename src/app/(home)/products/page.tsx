"use client";

import { useEffect, useState } from "react";
import styles from "./products.module.scss";
import axios, { AxiosResponse } from "axios";
import { IProduct } from "@/types/axios/commonTypes";
import { getProducts } from "@/services/api/getProducts";

export default function Products() {
	const [products, setProducts] = useState<IProduct[]>([]);
	const baseUrl = "http://localhost:3000";

	const getAllProducts = async () => {
		try {
			if (baseUrl) {
				const response: AxiosResponse<IProduct[]> = await getProducts(baseUrl);
				if ((response.status = axios.HttpStatusCode.Ok)) {
					setProducts(response.data);
				}
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllProducts();
	}, []);
	return (
		<div>
			<h1 className={styles.header}>Product Management</h1>
			<table className={styles.tableProducts}>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Description</th>
						<th>Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{products &&
						products.map((product) => (
							<tr key={product.id}>
								<td>{product.id}</td>
								<td>{product.name}</td>
								<td>{product.description}</td>
								<td>{product.quantity}</td>
								<td>{product.price}</td>
							</tr>
						))}
				</tbody>
			</table>
		</div>
	);
}
