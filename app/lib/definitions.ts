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

export type FoodDataType = {
	message?: string;
	foodData?: any[];
	errors?: any;
};

