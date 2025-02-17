import Onboarding from "@/ui/test-steps/onboarding";
import { Suspense } from "react";

export default async function Page() {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Onboarding />
		</Suspense>
	);
}
