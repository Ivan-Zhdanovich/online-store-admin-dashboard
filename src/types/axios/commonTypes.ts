export interface IUser {
	id: number;
	role: string;
	email: string;
}

export interface IProduct {
	id: number;
	name: string;
	description: string;
	price: number;
	quantity: number;
}

export interface IOrder {
	id: number;
	status: string;
	total: number;
	createdAt: Date;
}
