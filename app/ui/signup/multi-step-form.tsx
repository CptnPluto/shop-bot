"use client";

import React, { useState } from "react";

export default function RegistrationForm() {
	// Define state variables similar to the Alpine app() object.
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

	// File input handler for the profile picture.
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

	// If the form is complete, show the success screen.
	if (step === "complete") {
		return (
			<div className="flex items-center justify-center shadow-2xl border">
				<div className="bg-white rounded-lg p-10 flex flex-col items-center shadow">
					<svg
						className="mb-4 h-20 w-20 text-green-500 mx-auto"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
							clipRule="evenodd"
						/>
					</svg>
					<h2 className="text-2xl mb-4 text-gray-800 text-center font-bold">
						Registration Success
					</h2>
					<div className="text-gray-600 mb-8">
						Thank you. We have sent you an email to {email || "demo@demo.test"}. Please
						click the link in the message to activate your account.
					</div>
					<button
						onClick={() => setStep(1)}
						className="w-40 block mx-auto focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-gray-600 bg-white hover:bg-gray-100 font-medium border"
					>
						Back to home
					</button>
				</div>
			</div>
		);
	}

	return (
		<div>
			<div className="max-w-3xl mx-auto px-4 py-10 shadow-2xl">
				{/* Top Navigation */}
				<div className="border-b-2 py-4">
					<div className="uppercase tracking-wide text-xs font-bold text-gray-500 mb-1 leading-tight">
						Step: {step} of 3
					</div>
					<div className="flex flex-col md:flex-row md:items-center md:justify-between">
						<div className="flex-1">
							{step === 1 && (
								<div className="text-lg font-bold text-gray-700 leading-tight">
									Your Profile
								</div>
							)}
							{step === 2 && (
								<div className="text-lg font-bold text-gray-700 leading-tight">
									Your Password
								</div>
							)}
							{step === 3 && (
								<div className="text-lg font-bold text-gray-700 leading-tight">
									Tell me about yourself
								</div>
							)}
						</div>
						<div className="flex items-center md:w-64">
							<div className="w-full bg-white rounded-full mr-2">
								<div
									className="rounded-full bg-green-500 text-xs leading-none h-2 text-center text-white"
									style={{
										width: `${
											((typeof step === "number" ? step : 3) * 100) / 3
										}%`,
									}}
								></div>
							</div>
							<div className="text-xs w-10 text-gray-600">
								{Math.round(((typeof step === "number" ? step : 3) * 100) / 3)}%
							</div>
						</div>
					</div>
				</div>
				{/* /Top Navigation */}

				{/* Step Content */}
				<div className="py-10">
					{step === 1 && (
						<div>
							<div className="mb-5 text-center">
								<div className="mx-auto w-32 h-32 border rounded-full relative bg-gray-100 mb-4 shadow-inner">
									<img
										id="image"
										className="object-cover w-full h-32 rounded-full"
										src={image}
										alt="Profile"
									/>
								</div>
								<label
									htmlFor="fileInput"
									className="cursor-pointer inline-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1"
										viewBox="0 0 24 24"
										strokeWidth="2"
										stroke="currentColor"
										fill="none"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<rect
											x="0"
											y="0"
											width="24"
											height="24"
											stroke="none"
										></rect>
										<path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
										<circle cx="12" cy="13" r="3" />
									</svg>
									Browse Photo
								</label>
								<div className="mx-auto w-48 text-gray-500 text-xs text-center mt-1">
									Click to add profile picture
								</div>
								<input
									name="photo"
									id="fileInput"
									accept="image/*"
									type="file"
									className="hidden"
									onChange={handleFileChange}
								/>
							</div>

							<div className="mb-5">
								<label
									htmlFor="firstname"
									className="font-bold mb-1 text-gray-700 block"
								>
									Firstname
								</label>
								<input
									type="text"
									id="firstname"
									className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
									placeholder="Enter your firstname..."
									value={firstName}
									onChange={(e) => setFirstName(e.target.value)}
								/>
							</div>

							<div className="mb-5">
								<label
									htmlFor="email"
									className="font-bold mb-1 text-gray-700 block"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
									placeholder="Enter your email address..."
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
						</div>
					)}

					{step === 2 && (
						<div>
							<div className="mb-5">
								<label
									htmlFor="password"
									className="font-bold mb-1 text-gray-700 block"
								>
									Set up password
								</label>
								<div className="text-gray-600 mt-2 mb-4">
									Please create a secure password including the following criteria
									below.
									<ul className="list-disc text-sm ml-4 mt-2">
										<li>lowercase letters</li>
										<li>numbers</li>
										<li>capital letters</li>
										<li>special characters</li>
									</ul>
								</div>
								<div className="relative">
									<input
										type={togglePassword ? "text" : "password"}
										id="password"
										className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
										placeholder="Your strong password..."
										value={password}
										onChange={handlePasswordChange}
									/>
									<div
										className="absolute right-0 bottom-0 top-0 px-3 py-3 cursor-pointer"
										onClick={() => setTogglePassword(!togglePassword)}
									>
										{togglePassword ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-6 h-6 block fill-current text-gray-500"
												viewBox="0 0 24 24"
											>
												<path d="M12 19c.946 0 1.81-.103 2.598-.281l-1.757-1.757C12.568 16.983 12.291 17 12 17c-5.351 0-7.424-3.846-7.926-5 .204-.47.674-1.381 1.508-2.297L4.184 8.305c-1.538 1.667-2.121 3.346-2.132 3.379-.069.205-.069.428 0 .633C2.073 12.383 4.367 19 12 19zM12 5c-1.837 0-3.346.396-4.604.981L3.707 2.293 2.293 3.707l18 18 1.414-1.414-3.319-3.319c2.614-1.951 3.547-4.615 3.561-4.657.069-.205.069-.428 0-.633C21.927 11.617 19.633 5 12 5z" />
											</svg>
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="w-6 h-6 block fill-current text-gray-500"
												viewBox="0 0 24 24"
											>
												<path d="M12,9c-1.642,0-3,1.359-3,3c0,1.642,1.358,3,3,3c1.641,0,3-1.358,3-3C15,10.359,13.641,9,12,9z" />
												<path d="M12,5c-7.633,0-9.927,6.617-9.948,6.684L1.946,12l0.105,0.316C2.073,12.383,4.367,19,12,19s9.927-6.617,9.948-6.684L22.054,12l-0.105-0.316C21.927,11.617,19.633,5,12,5z M12,17c-5.351,0-7.424-3.846-7.926-5C4.578,10.842,6.652,7,12,7 c5.351,0,7.424,3.846,7.926,5C19.422,13.158,17.348,17,12,17z" />
											</svg>
										)}
									</div>
								</div>
								<div className="flex items-center mt-4 h-3">
									<div className="w-2/3 flex justify-between h-2">
										<div
											className={`h-2 rounded-full mr-1 w-1/3 bg-gray-300 ${
												passwordStrengthText === "Too weak" ||
												passwordStrengthText === "Could be stronger" ||
												passwordStrengthText === "Strong password"
													? "bg-red-400"
													: ""
											}`}
										></div>
										<div
											className={`h-2 rounded-full mr-1 w-1/3 bg-gray-300 ${
												passwordStrengthText === "Could be stronger" ||
												passwordStrengthText === "Strong password"
													? "bg-orange-400"
													: ""
											}`}
										></div>
										<div
											className={`h-2 rounded-full w-1/3 bg-gray-300 ${
												passwordStrengthText === "Strong password"
													? "bg-green-400"
													: ""
											}`}
										></div>
									</div>
									<div className="text-gray-500 font-medium text-sm ml-3 leading-none">
										{passwordStrengthText}
									</div>
								</div>
								<p className="mt-5 text-gray-600">
									Inspired from dribbble shot: Exploration for a password strength
									meter by{" "}
									<a
										href="https://dribbble.com/OvertonGraphics"
										className="text-blue-500"
									>
										Josh Overton
									</a>
									.
								</p>
							</div>
						</div>
					)}

					{step === 3 && (
						<div>
							<div className="mb-5">
								<label
									htmlFor="gender"
									className="font-bold mb-1 text-gray-700 block"
								>
									Gender
								</label>
								<div className="flex">
									<label className="flex justify-start items-center text-truncate rounded-lg bg-white pl-4 pr-6 py-3 shadow-sm mr-4">
										<div className="text-teal-600 mr-3">
											<input
												type="radio"
												name="gender"
												value="Male"
												checked={gender === "Male"}
												onChange={(e) => setGender(e.target.value)}
												className="form-radio focus:outline-none focus:shadow-outline"
											/>
										</div>
										<div className="select-none text-gray-700">Male</div>
									</label>
									<label className="flex justify-start items-center text-truncate rounded-lg bg-white pl-4 pr-6 py-3 shadow-sm">
										<div className="text-teal-600 mr-3">
											<input
												type="radio"
												name="gender"
												value="Female"
												checked={gender === "Female"}
												onChange={(e) => setGender(e.target.value)}
												className="form-radio focus:outline-none focus:shadow-outline"
											/>
										</div>
										<div className="select-none text-gray-700">Female</div>
									</label>
								</div>
							</div>
							<div className="mb-5">
								<label
									htmlFor="profession"
									className="font-bold mb-1 text-gray-700 block"
								>
									Profession
								</label>
								<input
									type="text"
									id="profession"
									className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
									placeholder="eg. Web Developer"
									value={profession}
									onChange={(e) => setProfession(e.target.value)}
								/>
							</div>
						</div>
					)}
				</div>
			</div>

			{/* Bottom Navigation */}
			<div className="py-5 bg-white shadow-md">
				<div className="max-w-3xl mx-auto px-4">
					<div className="flex justify-between">
						<div className="w-1/2">
							{step > 1 && (
								<button
									onClick={() =>
										setStep((prev) => (typeof prev === "number" ? prev - 1 : 1))
									}
									className="w-32 focus:outline-none py-2 px-5 rounded-lg shadow-sm text-center text-gray-600 bg-white hover:bg-gray-100 font-medium border"
								>
									Previous
								</button>
							)}
						</div>
						<div className="w-1/2 text-right">
							{step < 3 && (
								<button
									onClick={() =>
										setStep((prev) => (typeof prev === "number" ? prev + 1 : 3))
									}
									className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium"
								>
									Next
								</button>
							)}
							{step === 3 && (
								<button
									onClick={() => setStep("complete")}
									className="w-32 focus:outline-none border border-transparent py-2 px-5 rounded-lg shadow-sm text-center text-white bg-blue-500 hover:bg-blue-600 font-medium"
								>
									Complete
								</button>
							)}
						</div>
					</div>
				</div>
			</div>

			{/* Global styles for form-checkbox and form-radio */}
			<style jsx global>{`
				[x-cloak] {
					display: none;
				}
				[type="checkbox"] {
					box-sizing: border-box;
					padding: 0;
				}
				.form-checkbox,
				.form-radio {
					-webkit-appearance: none;
					-moz-appearance: none;
					appearance: none;
					-webkit-print-color-adjust: exact;
					color-adjust: exact;
					display: inline-block;
					vertical-align: middle;
					background-origin: border-box;
					-webkit-user-select: none;
					-moz-user-select: none;
					-ms-user-select: none;
					user-select: none;
					flex-shrink: 0;
					color: currentColor;
					background-color: #fff;
					border-color: #e2e8f0;
					border-width: 1px;
					height: 1.4em;
					width: 1.4em;
				}
				.form-checkbox {
					border-radius: 0.25rem;
				}
				.form-radio {
					border-radius: 50%;
				}
				.form-checkbox:checked {
					background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
					border-color: transparent;
					background-color: currentColor;
					background-size: 100% 100%;
					background-position: center;
					background-repeat: no-repeat;
				}
				.form-radio:checked {
					background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
					border-color: transparent;
					background-color: currentColor;
					background-size: 100% 100%;
					background-position: center;
					background-repeat: no-repeat;
				}
			`}</style>
		</div>
	);
}
