import { fetchFoodData } from "@/lib/actions";
import RecipesRoot from "@/ui/prod-steps/recipes/recipes-root";
import { Suspense } from "react";
import RecipeCardsLoader from "../prod-loaders/recipeCards-loader";
import { cookies } from "next/headers";

export default async function FoodData() {
    const cookieStore = await cookies()
    const userEmail = cookieStore.get("email")?.value || "";
	const foodData = await fetchFoodData(userEmail);

	return (
		<Suspense fallback={<RecipeCardsLoader />}>
			<RecipesRoot foodData={foodData} />
		</Suspense>
	);
}
