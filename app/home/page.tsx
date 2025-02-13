import { lusitana } from "@/ui/fonts";
import FoodData from "@ui/food-data";
import { Suspense } from "react";

export default function Page() {
    

	return (
		<main className="text-2xl">
			<div id="apis" className="flex flex-col justify-center gap-2">
				<h1 className={`${lusitana.className} `}>API&apos;s</h1>
				<Suspense fallback={<div>Loading...</div>}>
					<FoodData />
				</Suspense>
			</div>
		</main>
	);
}
