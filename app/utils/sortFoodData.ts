import { FoodItemType } from "@/lib/definitions";

export function sortFoodData(nutritionals: string, foodData: FoodItemType[]): void {
	let writeIndex = 0;
	for (let readIndex = 0; readIndex < foodData.length; readIndex++) {
		const keys = Object.keys(foodData[readIndex]);
		const matchingKey = keys.find((key) =>
			key.toLowerCase().includes(nutritionals.toLowerCase())
		);
		if (matchingKey && foodData[readIndex][matchingKey as keyof FoodItemType] === true) {
			console.log("Found one.");
			foodData[writeIndex] = foodData[readIndex];
			writeIndex++;
		} else {
			console.log(`Item is not ${nutritionals}: ${foodData[readIndex].itemName}`);
		}
	}
	foodData.length = writeIndex;
}
