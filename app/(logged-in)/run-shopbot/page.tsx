import FoodDataLoader from "@/ui/prod-loaders/foodData-loader";
import FoodData from "@/ui/prod-steps/food-data";
import { Suspense } from "react";

export default async function Page() {

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
