"use client";
import React from "react";
import { useActionState } from "react";
import clsx from "clsx";
import { signup } from "@/lib/actions";
import { Button, Label, Input } from "@ui/custom-components";
import type { UserOnboarding } from "@/lib/definitions";

interface FormStepProps {
	formData: UserOnboarding;
}

export const Address = ({ formData }: FormStepProps) => {
	return (
		<section>
			<Label htmlFor="address">Address</Label>
			<Input name="address" type="text" value={formData?.address} />
		</section>
	);
};

// export const Info = ({ formData }: FormStepProps) => {
// 	return (
// 		<section>
// 			<Label htmlFor="name">
// 				Name
// 			</Label>
// 			<Input name="name" type="text" value={formData?.name} />

// 			<Label htmlFor="email">
// 				Email
// 			</Label>
// 			<Input name="email" type="email" value={formData?.email} />

// 			<Label htmlFor="password">
// 				Password
// 			</Label>
// 			<Input
// 				name="password"
// 				type="password"
// 				value={formData?.password}
// 			/>

// 			<Label htmlFor="passwordConf">
// 				Password Confirmation
// 			</Label>
// 			<Input
// 				name="passwordConf"
// 				type="password"
// 				value={formData?.passwordConf}
// 			/>
// 		</section>
// 	);
// };

export const Budget = ({ formData }: FormStepProps) => {
	return (
		<section>
			<Label htmlFor="budget">Enter budget</Label>
			<Input name="budget" type="text" value={formData?.budget} />
		</section>
	);
};

export const DeliveryTime = ({ formData }: FormStepProps) => {
	return (
		<section>
			<Label htmlFor="deliveryTime">Desired delivery time</Label>
			<Input name="deliveryTime" type="text" value={formData?.deliveryTime} />
		</section>
	);
};

export const Macros = ({ formData }: FormStepProps) => {
	return (
		<section>
			<Label htmlFor="macros">Enter Macros</Label>
			<Input name="macros" type="text" value={formData?.macros} />
		</section>
	);
};

export const MealPlan = ({ formData }: FormStepProps) => {
	return (
		<section>
			<Label htmlFor="mealPlan">Enter meal plan details</Label>
			<Input name="mealPlan" type="text" value={formData?.mealPlan} />
		</section>
	);
};

export const Nutritionals = ({ formData }: FormStepProps) => {
	return (
		<section>
			<Label htmlFor="nutritionals">Enter Nutritional Requirements</Label>
			<Input name="nutritionals" type="text" value={formData?.nutritionals} />
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

	const [state, formAction] = useActionState(signup, initialState);

	const slides = [
		// <Info key="info" formData={state.formData} />,
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
					<div key={index} className="w-full shrink-0 flex flex-col justify-between">
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
								<Input type="hidden" name="finalStep" value="true" />
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

			{/* {isLastStep && <Input type="hidden" name="lastStep" value="true" />}
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
						"bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-sm ml-auto",
						{ hidden: !isLastStep }
					)}
				>
					Submit
				</Button> */}
			{/* </div> */}
		</form>
	);
}
