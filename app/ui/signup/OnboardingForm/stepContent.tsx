import { Input } from "@/ui/custom-components";
import Image from "next/image";

interface StepContentProps {
	step: number;
	firstName: string;
	email: string;
	password: string;
	togglePassword: boolean;
	handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	image: string;
	handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	setFirstName: React.Dispatch<React.SetStateAction<string>>;
	setEmail: React.Dispatch<React.SetStateAction<string>>;
	setTogglePassword: React.Dispatch<React.SetStateAction<boolean>>;
	passwordStrengthText: string;
	gender: string;
	setGender: React.Dispatch<React.SetStateAction<string>>;
	profession: string;
	setProfession: React.Dispatch<React.SetStateAction<string>>;
}

export const StepContent = ({
	step,
	firstName,
	email,
	password,
	togglePassword,
	handlePasswordChange,
	image,
	handleFileChange,
	setFirstName,
	setEmail,
	setTogglePassword,
	passwordStrengthText,
	gender,
	setGender,
	profession,
	setProfession,
}: StepContentProps) => {
	return (
		<div id="step-content" className="py-10">
			{step === 1 && (
				<div id="step1">
					<div className="mb-5 text-center">
						<div className="mx-auto w-32 h-32 border rounded-full relative bg-gray-100 mb-4 shadow-inner">
							<Image
								id="image"
								className="object-cover w-full h-32 rounded-full"
								src={image}
								alt="Profile"
								height="400"
								width="400"
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
								<rect x="0" y="0" width="24" height="24" stroke="none"></rect>
								<path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
								<circle cx="12" cy="13" r="3" />
							</svg>
							Browse Photo
						</label>
						<div className="mx-auto w-48 text-gray-500 text-xs text-center mt-1">
							Click to add profile picture
						</div>
						<Input
							name="photo"
							id="fileInput"
							accept="image/*"
							type="file"
							className="hidden"
							onChange={handleFileChange}
						/>
					</div>

					<div className="mb-5">
						<label htmlFor="firstname" className="font-bold mb-1 text-gray-700 block">
							First Name
						</label>
						<Input
							type="text"
							id="firstname"
							className="w-full px-4 py-3 rounded-lg shadow-sm focus:outline-none focus:shadow-outline text-gray-600 font-medium"
							placeholder="Enter your first name..."
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>

					<div className="mb-5">
						<label htmlFor="email" className="font-bold mb-1 text-gray-700 block">
							Email
						</label>
						<Input
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
				<div id="step2">
					<div className="mb-5">
						<label htmlFor="password" className="font-bold mb-1 text-gray-700 block">
							Set up password
						</label>
						<div className="text-gray-600 mt-2 mb-4">
							Please create a secure password including the following criteria below.
							<ul className="list-disc text-sm ml-4 mt-2">
								<li>lowercase letters</li>
								<li>numbers</li>
								<li>capital letters</li>
								<li>special characters</li>
							</ul>
						</div>
						<div className="relative">
							<Input
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
							Inspired from dribbble shot: Exploration for a password strength meter
							by{" "}
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
				<div id="step3">
					<div className="mb-5">
						<label htmlFor="gender" className="font-bold mb-1 text-gray-700 block">
							Gender
						</label>
						<div className="flex">
							<label className="flex justify-start items-center text-truncate rounded-lg bg-white pl-4 pr-6 py-3 shadow-sm mr-4">
								<div className="text-teal-600 mr-3">
									<Input
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
									<Input
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
						<label htmlFor="profession" className="font-bold mb-1 text-gray-700 block">
							Profession
						</label>
						<Input
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
	);
};
