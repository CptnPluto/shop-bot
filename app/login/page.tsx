import Loading from "@/signup/loading";
import LoginForm from "@ui/login-form";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "Login",
};

export default function LoginPage() {
	return (
		<main className="flex items-center justify-center h-screen">
			<div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
				<div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
					<div className="w-32 text-white md:w-36">{/* <Logo /> */}</div>
				</div>
				<Suspense fallback={<Loading />}>
					<LoginForm />
				</Suspense>
			</div>
		</main>
	);
}
