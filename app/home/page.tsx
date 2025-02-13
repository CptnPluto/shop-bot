import FoodData from "@ui/food-data";
import { Suspense } from "react";

export default function Page() {
    

	return (
		<main className="text-2xl">
			<div>Home Page</div>
			<div id="apis">
				<span>API&apos;s</span>
				<Suspense fallback={<div>Loading...</div>}>
					<FoodData />
				</Suspense>
			</div>
		</main>
	);
}
