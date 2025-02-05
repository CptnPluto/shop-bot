"use client";
import { getAllProducts } from "@/app/lib/actions";
import { useActionState } from "react";

function Address() {
	return (
		<>
			<label htmlFor="address">Address</label>
			<input name="address" type="text" />
		</>
	);
}

function Info() {
	return (
		<>
			<label htmlFor="name">Name</label>
			<input name="name" type="Email" />

			<label htmlFor="email">Email</label>
			<input name="email" type="password" />

			<label htmlFor="address">Password</label>
			<input name="address" type="text" />

			<label htmlFor="passwordConf">Password Confirmation</label>
			<input name="passwordConf" type="text" />
		</>
	);
}

function Budget() {
	return (
		<>
			<label htmlFor="budget">Enter budget</label>
			<input name="budget" type="text" />
		</>
	);
}

function DeliveryTime() {
	return (
		<>
			<label htmlFor="delivery-time">Desired delivery time</label>
			<input name="delivery-time" type="text" />
		</>
	);
}

function Macros() {
	return (
		<>
			<label htmlFor="macros">Enter Macros</label>
			<input name="macros" type="text" />
		</>
	);
}

function MealPlan() {
	return (
		<>
			<label htmlFor="meal-plan">Enter meal plan details</label>
			<input name="meal-plan" type="text" />
		</>
	);
}

function Nutritionals() {
	return (
		<>
			<label htmlFor="nutritionals">Enter Nutritional Requirements</label>
			<input name="nutritionals" type="text" />
		</>
	);
}

export default function SignupForm() {
	const [state, formAction] = useActionState(getAllProducts, null);

	return (
		<form className="flex flex-col" action={formAction}>
			<Address />
			<Info />
			<Budget />
			<DeliveryTime />
			<Macros />
			<MealPlan />
			<Nutritionals />
		</form>
	);
}
