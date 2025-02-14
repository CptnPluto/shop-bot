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

const users = [
    {
      id: '410544b2-4001-4271-9855-fec4b6a6442a',
      name: 'User',
      email: 'user@nextmail.com',
      password: '123456',
    },
  ];
  
  const customers = [
    {
      id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
      name: 'Evil Rabbit',
      email: 'evil@rabbit.com',
      image_url: '/customers/evil-rabbit.png',
    },
    {
      id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Delba de Oliveira',
      email: 'delba@oliveira.com',
      image_url: '/customers/delba-de-oliveira.png',
    },
    {
      id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
      name: 'Lee Robinson',
      email: 'lee@robinson.com',
      image_url: '/customers/lee-robinson.png',
    },
    {
      id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
      name: 'Michael Novotny',
      email: 'michael@novotny.com',
      image_url: '/customers/michael-novotny.png',
    },
    {
      id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
      name: 'Amy Burns',
      email: 'amy@burns.com',
      image_url: '/customers/amy-burns.png',
    },
    {
      id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
      name: 'Balazs Orban',
      email: 'balazs@orban.com',
      image_url: '/customers/balazs-orban.png',
    },
  ];
  export { users, customers, generateSampleData }
  