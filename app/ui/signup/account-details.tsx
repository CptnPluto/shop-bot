"use client";
import React from "react";
import { useActionState } from "react";
import clsx from "clsx";
import { userSignup } from "@/lib/actions";
import { Button } from "@ui/button";

const inputClassnames =
	"peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500";
const labelClassnames = "mb-2 block text-sm font-medium";

type UserSignup = {
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

interface FormStepProps {
	formData: UserSignup;
}

export const Address = ({ formData }: FormStepProps) => {
	return (
		<section>
			<label className={labelClassnames} htmlFor="address">
				Address
			</label>
			<input
				className={inputClassnames}
				name="address"
				type="text"
				value={formData?.address}
			/>
		</section>
	);
};

export const Info = ({ formData }: FormStepProps) => {
	return (
		<section>
			<label className={labelClassnames} htmlFor="name">
				Name
			</label>
			<input className={inputClassnames} name="name" type="text" value={formData?.name} />

			<label className={labelClassnames} htmlFor="email">
				Email
			</label>
			<input className={inputClassnames} name="email" type="email" value={formData?.email} />

			<label className={labelClassnames} htmlFor="password">
				Password
			</label>
			<input
				className={inputClassnames}
				name="password"
				type="password"
				value={formData?.password}
			/>

			<label className={labelClassnames} htmlFor="passwordConf">
				Password Confirmation
			</label>
			<input
				className={inputClassnames}
				name="passwordConf"
				type="password"
				value={formData?.passwordConf}
			/>
		</section>
	);
};

export const Budget = ({ formData }: FormStepProps) => {
	return (
		<section>
			<label className={labelClassnames} htmlFor="budget">
				Enter budget
			</label>
			<input className={inputClassnames} name="budget" type="text" value={formData?.budget} />
		</section>
	);
};

export const DeliveryTime = ({ formData }: FormStepProps) => {
	return (
		<section>
			<label className={labelClassnames} htmlFor="deliveryTime">
				Desired delivery time
			</label>
			<input
				className={inputClassnames}
				name="deliveryTime"
				type="text"
				value={formData?.deliveryTime}
			/>
		</section>
	);
};

export const Macros = ({ formData }: FormStepProps) => {
	return (
		<section>
			<label className={labelClassnames} htmlFor="macros">
				Enter Macros
			</label>
			<input className={inputClassnames} name="macros" type="text" value={formData?.macros} />
		</section>
	);
};

export const MealPlan = ({ formData }: FormStepProps) => {
	return (
		<section>
			<label className={labelClassnames} htmlFor="mealPlan">
				Enter meal plan details
			</label>
			<input
				className={inputClassnames}
				name="mealPlan"
				type="text"
				value={formData?.mealPlan}
			/>
		</section>
	);
};

export const Nutritionals = ({ formData }: FormStepProps) => {
	return (
		<section>
			<label className={labelClassnames} htmlFor="nutritionals">
				Enter Nutritional Requirements
			</label>
			<input
				className={inputClassnames}
				name="nutritionals"
				type="text"
				value={formData?.nutritionals}
			/>
		</section>
	);
};

export const Submit = () => {
	return <Button type="submit">Submit</Button>;
};

export default function SignupForm() {
	const initialState = {
		message: null,
		errors: {},
	};

	const [state, formAction] = useActionState(userSignup, initialState);

	const slides = [
		<Info key="info" formData={state.formData} />,
		<Address key="address" formData={state.formData} />,
		<Budget key="budget" formData={state.formData} />,
		<DeliveryTime key="deliveryTime" formData={state.formData} />,
		<Macros key="macros" formData={state.formData} />,
		<MealPlan key="mealPlan" formData={state.formData} />,
		<Nutritionals key="nutritionals" formData={state.formData} />,
	];

	const handleNext = (e: any) => {
		const form = e.currentTarget.closest("form");
		if (form) {
			const currentSlide = parseInt(form.dataset.move || "0", 10);
			if (currentSlide < slides.length - 1) {
				form.dataset.move = (currentSlide + 1).toString();
				form.style.setProperty("--slide", form.dataset.move);
			}
		}
	};

	const handlePrevious = (e: any) => {
		const form = e.currentTarget.closest("form");
		if (form) {
			const currentSlide = parseInt(form.dataset.move || "0", 10);
			if (currentSlide > 0) {
				form.dataset.move = (currentSlide - 1).toString();
				form.style.setProperty("--slide", form.dataset.move);
			}
		}
	};

	return (
		<form
			className="flex flex-col relative w-full max-w-md mx-auto overflow-hidden"
			action={formAction}
			data-move="0"
		>
			<div className="w-full h-full flex transition-transform duration-300 signup-nav">
				{slides.map((slide, index) => (
					<div key={index} className="w-full flex-shrink-0 flex flex-col justify-between">
						{slide}
						<div className="flex justify-between mt-4">
							<Button
								type="button"
								onClick={handlePrevious}
								className={clsx({
									"bg-gray-500 hover:bg-gray-400 disabled": index === 0,
								})}
							>
								Previous
							</Button>
							{index === slides.length - 1 && (
								<input type="hidden" name="finalStep" value="true" />
							)}
							{index === slides.length - 1 ? (
								<Button type="submit">Submit</Button>
							) : (
								<Button
									type={index === slides.length - 1 ? "submit" : "button"}
									onClick={handleNext}
								>
									Next
								</Button>
							)}
						</div>
					</div>
				))}
			</div>

			{/* Navigation Buttons */}

			{/* {isLastStep && <input type="hidden" name="lastStep" value="true" />}
			<div className="flex justify-between mt-4">
				<Button
					type="button"
					onClick={handlePrevious}
					className={clsx({ "bg-gray-500 hover:bg-gray-400": step === 0 })}
					disabled={step === 0}
				>
					Previous
				</Button>
				<Button
					type={"submit"}
					className={clsx(
						"bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded ml-auto",
						{ hidden: !isLastStep }
					)}
				>
					Submit
				</Button> */}
			{/* </div> */}
		</form>
	);
}
