import { Button } from "@/ui/custom-components";
import FoodData from "@/ui/steps/food-data";
import Link from "next/link";
import { Suspense } from "react";
import { cookies } from "next/headers";

export default async function Page() {
	const cookieStore = await cookies();
	const isOnboarded = cookieStore.get("onboarded")?.value || "false";

	return (
		<main>
			<Suspense fallback={<div>Loading...</div>}>
				<FoodData isOnboarded={isOnboarded} />
			</Suspense>
			<Button>
				<Link href="/step-3">Create Recipes</Link>
			</Button>
		</main>
	);
}
