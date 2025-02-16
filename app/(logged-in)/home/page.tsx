import { lusitana } from "@/ui/fonts";
// import { Suspense } from "react";
import { cookies } from "next/headers";
import Link from "next/link";
import { Button } from "@/ui/custom-components";

export default async function Page() {
	const cookieStore = await cookies();
	const isOnboarded = cookieStore.get("onboarded")?.value;
	console.log("isOnboarded: ", isOnboarded);

	return (
		<main className="text-2xl h-full">
			<div className="flex flex-col justify-center items-center h-full gap-2">
				<h1 className={`${lusitana.className} `}>Home Page</h1>

				{/* Step 1: Onboard User */}
				{isOnboarded === "true" ? (
					<div className="grow flex flex-col gap-2 items-center justify-center">
						<p className="text-center">You&apos;re ready to start ordering!</p>
						<Button>
							<Link href="/step-2">TEST : Generate Food Data</Link>
						</Button>
						<Button>
							<Link href="/run-shopbot">Generate Food Data</Link>
						</Button>
					</div>
				) : (
					<div>
						<p>Ready to get started? Fill out your preferences now.</p>
                        <Button>
							<Link href="/step-1">Fill out your preferences</Link>
						</Button>
					</div>
				)}
			</div>
		</main>
	);
}
