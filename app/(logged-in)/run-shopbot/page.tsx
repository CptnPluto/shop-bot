import { fetchFoodData, generateRecipes, addToCart, placeOrder, review } from "@/lib/actions";
import FoodDataLoader from "@/ui/prod-loaders/foodData-loader";
import FoodData from "@/ui/prod-steps/food-data";
import { Suspense } from "react";

export default async function Page() {
	const foodData = await fetchFoodData();
	const recipes = await generateRecipes(foodData);
	const cart = await addToCart(recipes);
	const orderConf = await placeOrder(cart);
	const reviewOrder = await review(orderConf);

	return (
		<main className="h-full w-full">
			<div className="flex items-center justify-center h-full">
				<Suspense fallback={<FoodDataLoader />}>
					<FoodData />
				</Suspense>
			</div>
		</main>
	);
}
