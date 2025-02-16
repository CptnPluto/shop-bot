import { Button } from "@/ui/custom-components";
import RecipeCards from "@/ui/steps/recipe-cards";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
	return (
		<main className="flex flex-col gap-y-10">
            <h1 className="text-4xl">Recipes</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<RecipeCards />
			</Suspense>
			<Button>
				<Link href="/step-4">Fill Cart</Link>
			</Button>
		</main>
	);
}
