import Link from "next/link";
import { Button } from "../custom-components";
import SignupForm from "../signup/account-details";

export default function Onboarding() {
	return (
		<main className="h-full flex flex-col items-center justify-center">
			<div>Onboarding</div>
            <SignupForm />
			<Button>
				<Link href="/step-2">Generate Food Data</Link>
			</Button>
		</main>
	);
}
