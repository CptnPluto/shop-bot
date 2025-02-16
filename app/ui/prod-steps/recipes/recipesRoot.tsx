import { generateRecipes } from "@/lib/actions";
import { Button } from "@/ui/custom-components";
import RecipeCards from "./recipe-cards";
import Link from "next/link";
import { Suspense } from "react";
import { FoodDataType, GenRecipesResponse } from "@/lib/definitions";

export default async function Page({ foodData }: { foodData: FoodDataType }) {
	const recipeRes = generateRecipes(foodData);

	return (
		<main className="flex flex-col gap-y-10">
			<h1 className="text-4xl">Recipes</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<RecipeCards genRecipeResponse={recipeRes} />
			</Suspense>
			<Button>
				<Link href="/step-4">Fill Cart</Link>
			</Button>
		</main>
	);
}
