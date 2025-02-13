export type User = {
	id: string;
	name: string;
	email: string;
	password: string;
	// address: string;
};

export type FoodDataType = {
    message?: string;
    foodData?: any[];
    errors?: any;
}