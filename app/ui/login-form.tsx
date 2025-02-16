"use client";

import { useActionState } from "react";
import { AtSymbolIcon, KeyIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@ui/custom-components";
import LoadingModal from "@ui/loading-modal";
import { authenticate } from "@/lib/actions";
import { lusitana } from "@ui/fonts";

export default function LoginForm() {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams.get("callbackUrl") || "/home";
	const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

	return (
		<form action={formAction} className="space-y-3">
			<div className="rounded-lg bg-gray-100 px-6 pb-4 pt-8">
				<LoadingModal isPending={isPending} />
				<h1 className={`${lusitana.className} mb-3 text-2xl text-center`}>
					Please log in to continue.
				</h1>
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
								required
							/>
							<AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
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
							/>
							<KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
						</div>
					</div>
				</div>
				<input type="hidden" name="redirectTo" value={callbackUrl} />
				<Button className="mt-4 w-full" aria-disabled={isPending}>
					Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
				</Button>
				<div className="flex mt-2 items-center justify-between">
					<p>Don&apos;t have an account?</p>
					<Link
						className="flex h-5 items-center px-1 ml-2 rounded-lg text-sm font-medium text-blue-500 transition-colors hover:text-blue-400 hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
						href="/signup"
					>
						Sign up{" "}
						<ArrowRightIcon className="group-hover:text-blue-900 ml-auto h-5 w-5 text-blue-500 inline" />
					</Link>
				</div>
				<div className="flex h-8 items-end space-x-1">
					{errorMessage && (
						<>
							<ExclamationCircleIcon className="h-5 w-5 text-red-500" />
							<p className="text-sm text-red-500">{errorMessage}</p>
						</>
					)}
				</div>
			</div>
		</form>
	);
}
