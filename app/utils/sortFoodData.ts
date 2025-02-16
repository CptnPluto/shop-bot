import { FoodItemType } from "@/lib/definitions";

export function sortFoodData(nutritionals: string, foodData: FoodItemType[]): void {
	let writeIndex = 0;
	for (let readIndex = 0; readIndex < foodData.length; readIndex++) {
		const keys = Object.keys(foodData[readIndex]);
		const matchingKey = keys.find((key) =>
			key.toLowerCase().includes(nutritionals.toLowerCase())
		);
		if (matchingKey && foodData[readIndex][matchingKey as keyof FoodItemType] === true) {
			foodData[writeIndex] = foodData[readIndex];
			writeIndex++;
		}
	}
	foodData.length = writeIndex;
}
