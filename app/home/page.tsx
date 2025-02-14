import { lusitana } from "@/ui/fonts";
import FoodData from "@ui/food-data";
import { Suspense } from "react";
import { cookies } from "next/headers";

export default async function Page() {
	const cookieStore = await cookies();
	const isOnboarded = cookieStore.get("onboarded")?.value;
	console.log("isOnboarded: ", isOnboarded);

	return (
		<main className="text-2xl">
			<div id="apis" className="flex flex-col justify-center gap-2">
				<h1 className={`${lusitana.className} `}>API&apos;s</h1>
				{isOnboarded === "true" ? (
					<div>You're ready to start ordering!</div>
				) : (
					<div>Ready to get started? Fill out your preferences now.</div>
				)}
				<Suspense fallback={<div>Loading...</div>}>
					<FoodData />
				</Suspense>
			</div>
		</main>
	);
}
