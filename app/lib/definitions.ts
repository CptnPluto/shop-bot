export type User = {
	id: string;
	name: string;
	email: string;
	password?: string;
	address?: string;
	nutritionals?: string;
	budget?: string;
	deliveryTime?: string;
	mealPlan?: string;
	age?: string;
	zip?: string;
	city?: string;
	state?: string;
	country?: string;
	phone?: string;
};

export type FoodDataType = {
	message?: string;
	foodData?: any[];
	errors?: any;
};
