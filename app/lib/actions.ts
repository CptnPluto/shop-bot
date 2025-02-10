"use server";

export type UserSignup = {
	name: string;
	email: string;
	address: string;
	macros: string;
	nutritionals: string;
	budget: string;
	deliveryTime: string;
	mealPlan: string;
	password: string;
	passwordConf: string;
};

export type State = {
	step: number;
	formData: FormData;
    stepping: number;
};

export async function getAllProducts(prevState: any, formData: FormData) {
	console.log("Getting all products");
	console.log("Form data: ", formData.get("name"));
	return { message: `Successfully submitted`, formData: formData, errors: {} };
}

export async function userSignup(prevState: State, formData: FormData): Promise<any> {
	const rawData = Object.fromEntries(formData.entries());
    console.log("Raw data: ", rawData);

    console.log("Signing user up.");
	console.log("Name: ", formData.get("name"));
	console.log("Email: ", formData.get("email"));
	console.log("Address: ", formData.get("address"));
	console.log("Macros: ", formData.get("macros"));
	console.log("Nutritionals: ", formData.get("nutritionals"));
	console.log("Budget: ", formData.get("budget"));
	console.log("DeliveryTime: ", formData.get("deliveryTime"));
	console.log("Meal Plan: ", formData.get("mealPlan"));
	console.log("Password: ", formData.get("password"));
	console.log("Password Conf: ", formData.get("passwordConf"));

    if (formData.get("finalStep")) {
        console.log("Final step");
        return { message: `Successfully submitted`, formData: formData, errors: {} };
    }

	return { step: prevState.step + prevState.stepping, formData: formData, stepping: 0 };
}

export async function nextStep(step: number): Promise<any> {
    return { step: step + 1 };
}