import OnboardingForm from "@/ui/signup/OnboardingForm/OnboardingForm";
import { Suspense } from "react";

export default async function Page() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<OnboardingForm />
		</Suspense>
	);
}
