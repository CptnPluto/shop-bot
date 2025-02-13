"use client";
import { useState } from "react";
import { Button } from "./button";
import { fetchFoodData } from "@/api/food/getFoodData";

export default function FoodData() {
	const [data, setData] = useState<any>(null);
	const handleFetchFood = async () => {
		const foodData = await fetchFoodData();
		setData(foodData);
	};

	return (
		<div>
			<h2>Food Data</h2>
			<Button onClick={handleFetchFood}>Fetch Food Data</Button>

			<div className="relative overflow-x-auto">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							{/* map all the fields of data to <th> elements */}
							{data &&
								data.foodData[0] &&
								Object.keys(data.foodData[0]).map((key: string) => (
									<th scope="col" className="px-6 py-3" key={key}>
										{key}
									</th>
								))}
						</tr>
					</thead>
					{data && (
						<tbody>
							{data.foodData.map((item: any) => (
								<tr
									key={item.itemName}
									className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
								>
									{Object.keys(item).map((key: string) => (
										<td className="px-6 py-4" key={key}>
											{item[key]}
										</td>
									))}
								</tr>
							))}
						</tbody>
					)}
				</table>
			</div>

			<ul>
				{data &&
					data.foodData.map((item: any) => (
						<li key={item.itemName}>
							<h3>{item.itemName}</h3>
							<ul>
								<li>Protein: {item.proteinValue}</li>
								<li>Carbs: {item.carbohydrateValue}</li>
								<li>Fat: {item.fatValue}</li>
								<li>Price: {item.price}</li>
								<li>Calories: {item.calories}</li>
								<li>Brand: {item.brand}</li>
								<li>Category: {item.category}</li>
								<li>Expiration Date: {item.expirationDate}</li>
							</ul>
						</li>
					))}
			</ul>
		</div>
	);
}
