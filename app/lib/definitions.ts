export type User = {
	id: string;
	name: string;
	email: string;
	password: string;
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
	protein?: number;
	fat?: number;
	carbohydrates?: number;
	onboarded: string; // conditional in the DB based on if all other fields are filled out
};

export type UserOnboarding = {
	address: string;
	macros: string;
	nutritionals: string;
	budget: string;
	deliveryTime: string;
	mealPlan: string;
};

export type SignupState = {
	errors?: {
		name?: string[];
		email?: string[];
		password?: string[];
		passwordConf?: string[];
		status?: string[];
	};
	message?: string | null;
	prevState?: FormData;
};

export type FoodItemType = {
	itemName: string;
	proteinValue: number;
	carbohydrateValue: number;
	fatValue: number;
	isKosher: boolean;
	isHalala: boolean;
	isVegan: boolean;
	isPescatarian: boolean;
	price: number;
	isOnSale: boolean;
	amountInStock: number;
	// Extra details for the app
	calories: number;
	servingSize: string;
	brand: string;
	category: string;
	organic: boolean;
	expirationDate: string;
};

export type FoodDataType = {
	message?: string;
	foodData?: FoodItemType[];
	errors?: any;
};

export type FoodPreferencesType = {
	protein: number;
	carbohydrates: number;
	fat: number;
	nutritionals: string;
};
