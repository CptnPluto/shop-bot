// app/components/RecipeCardStack.tsx
"use client";

import { useState } from "react";
import { motion, LayoutGroup } from "motion/react";
type Recipe = {
	id: number;
	title: string;
	content: string;
};

interface RecipeCardProps {
	recipe: Recipe;
	isTop: boolean;
	onClick: () => void;
}

const RecipeCard = ({ recipe, isTop, onClick }: RecipeCardProps) => {
	return (
        <motion.div
            layout
            onClick={onClick}
            className={`cursor-pointer bg-white rounded-lg shadow-lg px-10 pb-10 border transition-all 
                  ${isTop && "border-blue-500"}`}
            whileHover={{ 
                scale: 1.03, 
                ...(isTop ? {} : { translateY: "-20px" }), 
                boxShadow: "0 8px 16px rgba(0,0,0,0.2)" 
            }}
            transition={{ duration: 0.1 }}
        >
            {/* Recipe Title Always Visible */}
            <h2 className="text-xl font-bold">{recipe.title}</h2>
            {/* Only the top card displays the full content */}
            {isTop && (
                <div className="mt-2 text-gray-700">
                    <p>{recipe.content}</p>
                </div>
            )}
        </motion.div>
	);
};

export default function RecipeCardStack() {
	// Sample recipe data
	const [recipes, setRecipes] = useState<Recipe[]>([
		{
			id: 1,
			title: "Spaghetti Bolognese",
			content:
				"Ingredients: spaghetti, ground beef, tomato sauce, garlic, herbs. Instructions: Cook spaghetti; simmer beef in tomato sauce with garlic and herbs; combine and serve hot.",
		},
		{
			id: 2,
			title: "Chicken Salad",
			content:
				"Ingredients: grilled chicken, mixed greens, cherry tomatoes, cucumbers, vinaigrette. Instructions: Toss ingredients together and drizzle with vinaigrette.",
		},
		{
			id: 3,
			title: "Vegetable Stir Fry",
			content:
				"Ingredients: broccoli, bell peppers, carrots, soy sauce, garlic, ginger. Instructions: Stir fry vegetables with garlic and ginger; add soy sauce at the end.",
		},
	]);

	// Track the currently selected (top) card
	const [selectedId, setSelectedId] = useState<number>(recipes[recipes.length - 1].id);

	// When a card is clicked, reorder so that the selected card moves to the top
	const handleCardClick = (id: number) => {
		setSelectedId(id);
		setRecipes((prevRecipes) => {
			const newOrder = [...prevRecipes];
			const index = newOrder.findIndex((recipe) => recipe.id === id);
			if (index > -1) {
				const [selectedRecipe] = newOrder.splice(index, 1);
				newOrder.push(selectedRecipe);
			}
			return newOrder;
		});
	};

	return (
		<LayoutGroup>
			<div className="relative h-96 w-full">
				{recipes.map((recipe, index) => {
					// The card's stacking offset increases for cards lower in the stack.
					const offsetT = index * 50;
                    const offsetL = index * 2;
					// Determine if this card is currently the "top" card.
					const isTop = recipe.id === selectedId;
					return (
						<motion.div
							key={recipe.id}
							layout
							className="absolute w-full"
							style={{ top: offsetT, left: offsetL }}
						>
							<RecipeCard
								recipe={recipe}
								isTop={isTop}
								onClick={() => handleCardClick(recipe.id)}
							/>
						</motion.div>
					);
				})}
			</div>
		</LayoutGroup>
	);
}
