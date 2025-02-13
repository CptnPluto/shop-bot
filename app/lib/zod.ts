import { z } from "zod";

export const signInSchema = z.object({
	email: z
		.string({ required_error: "Email is required" })
		.min(1, "Email is required")
		.email("Invalid email"),
	password: z
		.string({ required_error: "Password is required" })
		.min(1, "Password is required")
		.min(5, "Password must be more than 5 characters")
		.max(32, "Password must be less than 32 characters"),
});

const FoodItemSchema = z.object({
	itemName: z.string(),
	proteinValue: z.number(),
	carbohydrateValue: z.number(),
	fatValue: z.number(),
	isKosher: z.boolean(),
	isHalala: z.boolean(),
	isVegan: z.boolean(),
	isPescatarian: z.boolean(),
	price: z.number(),
	isOnSale: z.boolean(),
	amountInStock: z.number(),
	// Extra details for the app
	calories: z.number(),
	servingSize: z.string(),
	brand: z.string(),
	category: z.string(),
	organic: z.boolean(),
	expirationDate: z.string(),
});

export const UserSchema = z.object({
	id: z.string(),
	name: z.string(),
	email: z.string(),
	password: z.string().optional(),
	address: z.string().optional(),
	nutritionals: z.string().optional(),
	budget: z.string().optional(),
	deliveryTime: z.string().optional(),
	mealPlan: z.string().optional(),
	age: z.string().optional(),
	zip: z.string().optional(),
	city: z.string().optional(),
	state: z.string().optional(),
	country: z.string().optional(),
	phone: z.string().optional(),
});

export const FoodItemsSchema = z.array(FoodItemSchema);
