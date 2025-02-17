import DetailsForm from "../signup/account-details";
import RegistrationForm from "../signup/multi-step-form";

export default function Onboarding() {
	return (
		<main className="h-full flex flex-col items-center justify-center">
			{/* <div>Onboarding</div>
			<DetailsForm /> */}
            <RegistrationForm />
		</main>
	);
}
