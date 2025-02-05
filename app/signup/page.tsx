import { Suspense } from "react";
import SignupForm from '@/app/ui/signup/signup-form'

export default function Page() {
	return (
		<main className="flex items-center justify-center h-screen">
			<div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
				<div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
					<div className="w-32 text-white md:w-36"></div>
				</div>
				<div id="top-block" className="">
					Signup Page
				</div>
				<Suspense>
					<SignupForm />
				</Suspense>
			</div>
		</main>
	);
}
