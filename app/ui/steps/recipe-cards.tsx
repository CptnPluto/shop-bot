"use client";

import { useState, use } from "react";
import { motion, LayoutGroup } from "motion/react";
import type { GenRecipesResponse, RecipeType } from "@/lib/definitions";
import { CheckBadgeIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { lusitana } from "../fonts";
import { Button } from "../custom-components";
import Link from "next/link";

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
	const recipeList = rawRecipeData.recipes || [];
	const [recipes, setRecipes] = useState<RecipeType[]>(recipeList);

	// Track the currently selected (top) card
    
	const [selectedId, setSelectedId] = useState<number | null>(
        recipeList.length > 0 ? recipeList[recipeList.length - 1].id : null
	);
    
    if (recipes.length === 0) {
        return <div>No recipes available</div>;
    }
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
		<>
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

			<Link href="/add-to-cart">
				<Button>
					<CheckBadgeIcon /> Confirm Order
				</Button>
			</Link>

			{rawRecipeData && (
				<div className="flex items-center gap-2 my-5">
					<ExclamationCircleIcon className="h-5 w-5 text-red-500" />
					<div className={`${lusitana.className}`}>{rawRecipeData?.message}</div>
				</div>
			)}
		</>
	);
}
