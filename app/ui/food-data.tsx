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

			<div className="relative overflow-x-auto overflow-y-auto h-[40rem] max-h-[calc(100vh-20rem)] rounded-2xl m-2 shadow-2xl">
				{data ? (
					<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						{/* make the thead sticky */}
						{/* <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> */}

						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0 z-10">
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
					</table>
				) : (
					<div className="flex justify-center items-center h-full">No data yet</div>
				)}
			</div>
		</div>
	);
}
