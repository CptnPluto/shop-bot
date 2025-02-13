"use server";

// import { FoodItemsSchema } from "@/lib/zod";
// import { FoodDataType } from "@/lib/definitions";

// Helper function to generate 100 sample items
const generateSampleData = () => {
	const foodNames = [
		"Apple",
		"Banana",
		"Chicken Breast",
		"Salmon",
		"Tofu",
		"Broccoli",
		"Carrot",
		"Almonds",
		"Eggs",
		"Milk",
		"Cheddar Cheese",
		"Yogurt",
		"Quinoa",
		"Brown Rice",
		"Spinach",
		"Kale",
		"Strawberries",
		"Blueberries",
		"Orange",
		"Beef Steak",
		"Pork Chop",
		"Lettuce",
		"Tomato",
		"Cucumber",
		"Bell Pepper",
		"Zucchini",
		"Mushrooms",
		"Avocado",
		"Oatmeal",
		"Honey",
		"Granola",
		"Peanut Butter",
		"Jelly",
		"Pasta",
		"Bread",
		"Butter",
		"Sour Cream",
		"Salsa",
		"Black Beans",
		"Kidney Beans",
		"Chickpeas",
		"Lentils",
		"Shrimp",
		"Cod",
		"Scallops",
		"Bacon",
		"Sausage",
		"Turkey",
		"Duck",
		"Lamb",
		"Eggplant",
		"Pumpkin",
		"Peas",
		"Corn",
		"Potato",
		"Sweet Potato",
		"Rice Noodles",
		"Couscous",
		"Barley",
		"Rye Bread",
		"Sourdough Bread",
		"Bagel",
		"Croissant",
		"Muffin",
		"Donut",
		"Pretzel",
		"Crackers",
		"Soda",
		"Coffee",
		"Tea",
		"Orange Juice",
		"Apple Juice",
		"Grapefruit",
		"Watermelon",
		"Pineapple",
		"Mango",
		"Papaya",
		"Cantaloupe",
		"Pomegranate",
		"Grapes",
		"Plum",
		"Peach",
		"Pear",
		"Apricot",
		"Fig",
		"Date",
		"Raisin",
		"Cranberry",
		"Cashews",
		"Walnuts",
		"Pistachios",
		"Sunflower Seeds",
		"Chia Seeds",
		"Flaxseeds",
		"Quark",
		"Cottage Cheese",
		"Ricotta",
		"Blue Cheese",
		"Feta Cheese",
		"Parmesan",
		"Mozzarella",
	];

	const brands = [
		"Nature's Best",
		"Farm Fresh",
		"Organic Valley",
		"Golden Harvest",
		"Healthy Choice",
	];
	const categories = [
		"Fruit",
		"Vegetable",
		"Meat",
		"Dairy",
		"Grain",
		"Seafood",
		"Nut",
		"Baked Goods",
	];

	const sampleData = [];
	for (let i = 0; i < 100; i++) {
		const baseName = foodNames[i % foodNames.length];
		const itemName =
			i < foodNames.length ? baseName : `${baseName} ${Math.floor(i / foodNames.length)}`;

		const proteinValue = parseFloat((Math.random() * 40).toFixed(1));
		const carbohydrateValue = parseFloat((Math.random() * 50).toFixed(1));
		const fatValue = parseFloat((Math.random() * 20).toFixed(1));
		const isKosher = Math.random() < 0.7;
		const isHalala = Math.random() < 0.7;
		const nonVeganKeywords = [
			"Chicken",
			"Beef",
			"Pork",
			"Bacon",
			"Sausage",
			"Turkey",
			"Duck",
			"Lamb",
			"Salmon",
			"Shrimp",
			"Cod",
			"Scallops",
		];
		const isMeat = nonVeganKeywords.some((keyword) => itemName.includes(keyword));
		const isVegan = !isMeat && Math.random() < 0.8;
		const isPescatarian = isMeat
			? itemName.includes("Salmon") || itemName.includes("Shrimp") || itemName.includes("Cod")
			: Math.random() < 0.5;
		const price = parseFloat((Math.random() * 20 + 1).toFixed(2));
		const isOnSale = Math.random() < 0.3;
		const amountInStock = Math.floor(Math.random() * 200 + 10);
		const calories = Math.floor(Math.random() * 300 + 50);
		const servingSize = "100g";
		const brand = brands[Math.floor(Math.random() * brands.length)];
		const category = categories[Math.floor(Math.random() * categories.length)];
		const organic = Math.random() < 0.4;
		const futureDate = new Date(Date.now() + Math.floor(Math.random() * 10000000000));
		const expirationDate = futureDate.toISOString().split("T")[0];

		sampleData.push({
			itemName,
			proteinValue,
			carbohydrateValue,
			fatValue,
			isKosher,
			isHalala,
			isVegan,
			isPescatarian,
			price,
			isOnSale,
			amountInStock,
			calories,
			servingSize,
			brand,
			category,
			organic,
			expirationDate,
		});
	}
	return sampleData;
};

// export default function handler(req, res) {
//   try {
//     // Validate our data against the schema
//     const validatedData = FoodItemsSchema.parse(sampleData);
//     res.status(200).json(validatedData);
//   } catch (error) {
//     console.error("Data validation error:", error);
//     res.status(500).json({ error: error.message });
//   }
// }

// export async function GET() {
// 	//   return Response.json({
// 	//     message:
// 	//       'Database already seeded. Use this file if you want to try other seeding things.',
// 	//   });
//     console.log("Fetching food data");
// 	try {
// 		// await seedUsers();
// 		const validatedData = FoodItemsSchema.parse(sampleData);
// 		//     await seedCustomers();
// 		//     await seedInvoices();
// 		//     await seedRevenue();

// 		return Response.json(
// 			{ message: "Food items generated", data: validatedData },
// 			{ status: 200 }
// 		);
// 	} catch (error) {
// 		// await client.sql`ROLLBACK`;
// 		console.error("Data validation error:", error);
// 		return Response.json({ error }, { status: 500 });
// 	}
// }

export async function fetchFoodData(): Promise<any> {
	try {
		const sampleData = generateSampleData();

		// const response = await fetch("/api/food");
		// if (!response.ok) {
		// throw new Error("Failed to fetch food data");
		// }
		// const data = await response.json();
		console.log("Fetching food data: ", sampleData[0]);
		return { message: `Successfully fetched food data`, foodData: sampleData, errors: {} };
	} catch (error) {
		console.error("Error fetching food data: ", error);
		return { message: "Error fetching food data", errors: error };
	}
}

