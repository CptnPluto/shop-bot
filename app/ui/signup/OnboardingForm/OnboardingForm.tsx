"use client";

import React, { useState } from "react";
import { Complete, StepContent, BottomNavigation, TopNavigation } from "./formComponents";

export default function OnboardingForm() {
	const [step, setStep] = useState<number | "complete">(1);
	const [passwordStrengthText, setPasswordStrengthText] = useState("");
	const [togglePassword, setTogglePassword] = useState(false);
	const [image, setImage] = useState(
		"data:image/jpeg;base64,{imageURL}" // Replace {imageURL} with your default image data or leave blank.
	);
	const [password, setPassword] = useState("");
	const [gender, setGender] = useState("Male");
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");
	const [profession, setProfession] = useState("");

	// Function to check password strength.
	const checkPasswordStrength = (value: string) => {
		const strongRegex = new RegExp(
			"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})"
		);
		const mediumRegex = new RegExp(
			"^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
		);

		if (strongRegex.test(value)) {
			setPasswordStrengthText("Strong password");
		} else if (mediumRegex.test(value)) {
			setPasswordStrengthText("Could be stronger");
		} else {
			setPasswordStrengthText("Too weak");
		}
	};

	const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setPassword(value);
		checkPasswordStrength(value);
	};

	// File Input handler for the profile picture.
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (ev) => {
				if (ev.target?.result) {
					setImage(ev.target.result as string);
				}
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<main className="h-full flex flex-col items-center justify-center">
			{step === "complete" ? (
				<Complete setStep={setStep} email={email} />
			) : (
				<div className="bg-white shadow-2xl">
					<div className="max-w-3xl md:w-2xl w-sm mx-auto px-4 md:py-10 py-2 h-full ">
						<TopNavigation step={step} />
						<StepContent
							step={step}
							firstName={firstName}
							email={email}
							password={password}
							togglePassword={togglePassword}
							handlePasswordChange={handlePasswordChange}
							image={image}
							handleFileChange={handleFileChange}
							setFirstName={setFirstName}
							setEmail={setEmail}
							setTogglePassword={setTogglePassword}
							passwordStrengthText={passwordStrengthText}
							gender={gender}
							setGender={setGender}
							profession={profession}
							setProfession={setProfession}
						/>
						<BottomNavigation step={step} setStep={setStep} />
					</div>
				</div>
			)}
		</main>
	);
}
