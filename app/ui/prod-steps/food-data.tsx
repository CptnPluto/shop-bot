import { fetchFoodData } from "@/lib/actions";
import RecipeCards from "./recipes/recipesRoot";
import { Suspense } from "react";
import RecipeCardsLoader from "../prod-loaders/recipeCards-loader";

interface FoodDataProps {
	isOnboarded: string;
}

export default async function FoodData() {
	const foodData = await fetchFoodData();

	return (
		<Suspense fallback={<RecipeCardsLoader />}>
			<RecipeCards foodData={foodData} />
		</Suspense>
	);
}
