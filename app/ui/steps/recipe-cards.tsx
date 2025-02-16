// app/components/RecipeCardStack.tsx
"use client";

import { useState, use } from "react";
import { motion, LayoutGroup } from "motion/react";
import type { GenRecipesResponse, RecipeType } from "@/lib/definitions";

interface RecipeCardProps {
	recipe: RecipeType;
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
				boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
			}}
			transition={{ duration: 0.1 }}
		>
			<h2 className="text-xl font-bold">{recipe.title}</h2>
			{isTop && (
				<div className="mt-2 text-gray-700">
					<p>{recipe.content}</p>
				</div>
			)}
		</motion.div>
	);
};

export default function RecipeCardStack({
	genRecipeResponse,
}: {
	genRecipeResponse: Promise<GenRecipesResponse>;
}) {
	const rawRecipeData = use(genRecipeResponse);
	const [recipes, setRecipes] = useState<RecipeType[]>(rawRecipeData.recipes || []);

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
