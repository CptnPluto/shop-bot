"use client";

import { AtSymbolIcon, KeyIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { lusitana } from "@ui/fonts";
import { Button } from "@ui/button";
import { signup, SignupState } from "@/lib/actions";

const initialState: SignupState = {
	errors: {},
	message: null,
};

export default function SignupForm() {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
	const [state, formAction, isPending] = useActionState(signup, initialState);

	return (
		<form action={formAction} className="space-y-3">
			<div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
				<h1 className={`${lusitana.className} mb-3 text-2xl`}>
					Please sign up to continue.
				</h1>
				<div>
					<label
						className="mb-3 mt-5 block text-xs font-medium text-gray-900"
						htmlFor="name"
					>
						Name
					</label>
					<div className="relative">
						<input
							className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
							id="name"
							type="name"
							name="name"
							placeholder="Enter your name"
							aria-describedby="name-error"
							required
						/>
						<AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
					</div>
					<div id="name-error" aria-live="polite" aria-atomic="true">
						{state.errors?.name &&
							state.errors.name.map((error: string) => (
								<p className="mt-2 text-sm text-red-500" key={error}>
									{error}
								</p>
							))}
					</div>
				</div>
				<div className="w-full">
					<div>
						<label
							className="mb-3 mt-5 block text-xs font-medium text-gray-900"
							htmlFor="email"
						>
							Email
						</label>
						<div className="relative">
							<input
								className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
								id="email"
								type="email"
								name="email"
								placeholder="Enter your email address"
								aria-describedby="email-error"
								required
							/>
							<AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
						</div>
						<div id="name-error" aria-live="polite" aria-atomic="true">
							{state.errors?.email &&
								state.errors.email.map((error: string) => (
									<p className="mt-2 text-sm text-red-500" key={error}>
										{error}
									</p>
								))}
						</div>
					</div>
					<div className="mt-4">
						<label
							className="mb-3 mt-5 block text-xs font-medium text-gray-900"
							htmlFor="password"
						>
							Password
						</label>
						<div className="relative">
							<input
								className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
								id="password"
								type="password"
								name="password"
								placeholder="Enter password"
								required
								minLength={6}
								aria-describedby="password-error"
							/>
							<KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
						</div>
						<div id="name-error" aria-live="polite" aria-atomic="true">
							{state.errors?.password &&
								state.errors.password.map((error: string) => (
									<p className="mt-2 text-sm text-red-500" key={error}>
										{error}
									</p>
								))}
						</div>
					</div>
					<div className="mt-4">
						<label
							className="mb-3 mt-5 block text-xs font-medium text-gray-900"
							htmlFor="passwordConf"
						>
							Password
						</label>
						<div className="relative">
							<input
								className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
								id="passwordConf"
								type="password"
								name="passwordConf"
								placeholder="Enter password again"
								aria-describedby="passwordConf-error"
								required
								minLength={6}
							/>
							<KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
						</div>
						<div id="passwordConf-error" aria-live="polite" aria-atomic="true">
							{state.errors?.passwordConf &&
								state.errors.passwordConf.map((error: string) => (
									<p className="mt-2 text-sm text-red-500" key={error}>
										{error}
									</p>
								))}
						</div>
					</div>
					<input type="hidden" name="redirectTo" value={callbackUrl} />
					<Button className="mt-4 w-full" aria-disabled={isPending}>
						Sign up <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
					</Button>
				</div>
				<div className="flex h-8 items-end space-x-1">
					{state.errors?.status &&
						state.errors.status.map((error: string) => (
							<div key={error}>
								<ExclamationCircleIcon className="h-5 w-5 text-red-500" />
								<p className="text-sm text-red-500">{error}</p>
							</div>
						))}
				</div>
			</div>
		</form>
	);
}
