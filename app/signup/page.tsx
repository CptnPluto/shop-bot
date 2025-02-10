import { Suspense } from "react";
import SignupForm from "@/app/ui/signup/signup-form";

export default function Page() {
	return (
		<main className="flex items-center justify-center h-screen">
			<div className="relative flex max-w-[400px] h-full flex-col space-y-2.5 p-4 ">
				<div className="flex h-40 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
					<div className=" text-white">User Signup</div>
				</div>
				<Suspense>
					<SignupForm />
				</Suspense>
			</div>
		</main>
	);
}
