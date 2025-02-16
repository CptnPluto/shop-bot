import { Button } from "@/ui/custom-components";
import Onboarding from "@/ui/steps/onboarding";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
	return (
		<main>
			<Suspense fallback={<div>Loading...</div>}>
				<Onboarding />
			</Suspense>
			<Button>
				<Link href="/step-2">Generate Food Data</Link>
			</Button>
		</main>
	);
}
